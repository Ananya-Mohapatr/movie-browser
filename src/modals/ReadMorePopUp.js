import React from 'react'
import './ReadMorePopUp.css'
const ReadMorePopUp = ({data,callBack}) => {
  return (
    <div id="myModal" className="modal">
  <div className="modal-content">
    <span className="close" onClick={callBack}>&times;</span>
    <p>{data}</p>
  </div>

</div>
  )
}

export default ReadMorePopUp