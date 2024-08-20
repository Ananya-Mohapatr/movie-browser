import React from 'react'
import Header from './Header'
import './Header.css'
import './Mainbody.css'
import logo from '../assets/cinema-logo-movie-emblem-template-movie-production-logo-film-camera-logo-template-film-strip-ci_1041545-4853.avif'
import notBookmarked from '../assets/bookmark_2107915.png'
import search from '../assets/search.png'
import advancedSearch from '../assets/advanced-search.png'
import { useSelector } from 'react-redux'
const MainBody = () => {
  
  return (
    <div>
      <div className='header'>
        <div style={{display:'flex'}}>
<img style={{height:'50px'}} src={logo}/>
<h5>MOVIE BROWSER</h5></div>
<input type='search'/>
<img src={search} className='searchImg'/>
<img src={advancedSearch}/>
<img src={notBookmarked} style={{height:'25px',float:'right',padding:'10px'}}/>
    </div>
        <Header/>
    </div>
  )
}

export default MainBody