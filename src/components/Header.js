import React,{useState,useEffect} from 'react'
import {ACCOUNT_ID,API_READ_ACCESS_TOKEN,API_URL} from '../utils/Constant'
import './Header.css'
import bgImg from '../assets/background-image.png'
import fav from '../assets/bookmark_13484736.png'
import ReadMorePopUp from '../modals/ReadMorePopUp'
const Header = () => {
  const [movieList,setMovieList] = useState([])
  const [open,setOpen] = useState(false)
  const [overview,setOverview] = useState("")
  const fetchMovieList = async()=>{
    let account_id = ACCOUNT_ID
    let res = 
    await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_READ_ACCESS_TOKEN}`,{
            method:'GET',
      headers: {
        accept: 'application/json',
        Authorization: `${API_READ_ACCESS_TOKEN}`
      }
    }

    )
    .then(response=>response.json())
    .then(response=>{
      console.log("response",response)
      setMovieList(response.results)
    })
    .catch(err=>console.log("error",err))
  }
  
  const openPopup = (data)=>{
    console.log("hello")
    setOpen(true)
    setOverview(data)
  }
  const closePopup=()=>{
   setOpen(false)
  }
  useEffect(()=>{
    fetchMovieList()
  },[])
  return (
    <div>
    <div className='header'>
Header

    </div>
    <div style={{display:'grid',gridTemplateColumns:'auto auto auto auto'}} >
    {/* <img src={bgImg} className='bgImgg'/> */}
    {movieList.map((i)=>{
      return (<div className='card' >
        <div><b>{i.title || i.name} ({i?.release_date?.toString().slice(0,4) || i?.first_air_date?.toString().slice(0,4)})</b><img src={fav} style={{height:'25px',float:'right'}}/></div>
        <img src={'https://image.tmdb.org/t/p/w220_and_h330_face'+i.poster_path} className='img'/>
        <p>{i.overview.length<50 ?i.overview : i.overview.substr(0,80)+"..."}</p>{i.overview.length>80?<button style={{'color':'blue'}} onClick={()=>openPopup(i.overview)} >Read More</button>:''}
        </div>)
    })}
    </div>
    {open &&
        <ReadMorePopUp
        data={overview}
        callBack={closePopup}/>
}
    </div>
  )
}

export default Header