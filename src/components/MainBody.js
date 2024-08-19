import React from 'react'
import Header from './Header'
import './Header.css'
import './Mainbody.css'
import logo from '../assets/cinema-logo-movie-emblem-template-movie-production-logo-film-camera-logo-template-film-strip-ci_1041545-4853.avif'
import notBookmarked from '../assets/bookmark_2107915.png'
import search from '../assets/94156_search_512x512.png'
const MainBody = () => {
  return (
    <div>
      <div className='header'>
        <div style={{display:'flex'}}>
<img style={{height:'50px'}} src={logo}/>
<h5>MOVIE BROWSER</h5></div>
<input type='search'/>
<img src={search} className='searchImg'/>
<img src={notBookmarked} style={{height:'25px',float:'right'}}/>
    </div>
        <Header/>
    </div>
  )
}

export default MainBody