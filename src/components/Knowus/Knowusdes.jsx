import React from 'react'
import css from './Knowus.module.css'

function Knowusdes({Data}) {
  return (
    
        <div className={css.row1}>
            <div className={css.col1}>
                <img src={Data.img} style={{ height: '300px', width: '500px', paddingTop:'10px', paddingLeft:'50px', marginRight:'100px' }}/>
            </div>

            <div className={css.col1}>
                <p className={css.para}>{Data.textP}</p>
            </div>

        </div>
  
  )
}

export default Knowusdes
