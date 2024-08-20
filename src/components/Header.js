import React,{useState,useEffect} from 'react'
import {ACCOUNT_ID,API_READ_ACCESS_TOKEN,API_URL} from '../utils/Constant'
import './Header.css'
import bgImg from '../assets/background-image.png'
import notBookmarked from '../assets/bookmark_2107915.png'
import bookmarkedImg from '../assets/bookmark_2107725.png'
import ReadMorePopUp from '../modals/ReadMorePopUp'
import { useDispatch, useSelector } from 'react-redux'
import { addItems, removeItem } from '../utils/Slice'
const Header = () => {
  const dispatch = useDispatch()
  const [movieList,setMovieList] = useState([])
  const [open,setOpen] = useState(false)
  const [overview,setOverview] = useState("")
  var item = useSelector((store)=>store.slice.items)
  console.log("items",item)
  const fetchMovieList = async()=>{
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
      let newRes = response.results.map((i)=>{
        i.bookmarked = false
        i.bookmarkedImg = notBookmarked
        return i 
      })
      setMovieList(newRes)
    })
    .catch(err=>console.log("error",err))
  }
  
  const openPopup = (data)=>{
    setOpen(true)
    setOverview(data)
  }
  const closePopup=()=>{
   setOpen(false)
  }
  const handleBookmark = (id)=>{
    // let newList = movieList.map((element)=>element.id == id ? {...element,bookmarked:!element.bookmarked,bookmarkedImg:element.bookmarked?bookmarkedImg:notBookmarked}:element)
    let newList = movieList.map((i)=>{
      if(i.id === id ){
        i.bookmarked = !i.bookmarked
        if(i.bookmarked){
          dispatch(addItems(i))
          i.bookmarkedImg = bookmarkedImg
        }
        else{
          dispatch(removeItem(i))
          i.bookmarkedImg = notBookmarked
        }
      }
      return i
      
    })
    console.log("newList",newList)
    setMovieList(newList)

  }
  useEffect(()=>{
    fetchMovieList()
  },[])
  return (
    <div>
    <div style={{display:'grid',gridTemplateColumns:'auto auto auto auto'}} >
    {/* <img src={bgImg} className='bgImgg'/> */}
    {movieList.map((i)=>{
      return (<div className='card' >
        <div><b>{i?.name || i?.title } ({i?.release_date?.toString().slice(0,4) || i?.first_air_date?.toString().slice(0,4)})</b><img onClick={()=>handleBookmark(i?.id)}src={i?.bookmarkedImg} style={{height:'25px',float:'right'}}/></div>
        <img src={'https://image.tmdb.org/t/p/w220_and_h330_face'+i?.poster_path} className='img'/>
        <p>{i?.overview?.length<50 ?i?.overview : i?.overview.substr(0,80)+"..."}</p>{i?.overview?.length>80?<button style={{'color':'blue'}} onClick={()=>openPopup(i?.overview)} >Read More</button>:''}
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