import React from 'react'
import css from './Banner2.module.css'


function Banner2({Data, title, img})
{


  return (

    <div className={css.row}  style={{
      backgroundImage:`linear-gradient(rgba(6, 6, 6, 0.838), rgba(6, 6, 6, 0.479)), url(${img}) `
    }}>
        <div className={css.col}  >
        
        <h1>{title}</h1>
        <h2>{Data.description}</h2>
        </div>
        
    </div>
   

  )
}

export default Banner2
