import React from 'react'
import css from './AdsFeed.module.css'
function AdsFeed({Data}) {
  return (
    <div className={css.container}>
      <div className={css.row1}>
        <div className={css.colum1}>
          <h2>Download Now</h2>
          <h1>OUR MOBILE APP</h1>
          <p>simply download mobile app using below link by clicking</p>
          <button>Click Here</button>
        </div>
        <div className={css.colum2}>
          <img src={Data.im} alt="no image"/>
         
        </div>

      </div>
    </div>
  )
}

export default AdsFeed;
