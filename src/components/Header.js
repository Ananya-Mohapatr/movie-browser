import React,{useState,useEffect} from 'react'
import {ACCOUNT_ID,API_READ_ACCESS_TOKEN,API_URL} from '../utils/Constant'
import './Header.css'
import bgImg from '../assets/background-image.png'
const Header = () => {
  const [movieList,setMovieList] = useState([])
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
        <b>{i.title || i.name}</b></div>)
    })}
    </div>
    </div>
  )
}

export default Header