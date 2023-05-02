// import React, { useState } from 'react'
import { useState } from 'react'
import css from './MenuList.module.css'
import {menuLists} from './menuListDB'
// import P1 from '../Figma Pic/p1.png'

function MenuSingle({menuList}) {

    const [varient, setVarients] = useState("small")

    const offerPer = menuList.offerTag > 35


  return (
        // <div className={css.row}>
                <div className={css.col2}>
                    <div className={css.colContainer}>
                        <h2 className={css.cetagoryTitle}>{menuList.categoryTitle}</h2>
                                <div className={css.offerContainer}>
                                    <div className={css.offerTag}>
                                        <span style={{backgroundColor: offerPer? "red" : "rgb(10, 230, 10)"}}>-{menuList.offerTag}%</span>
                                    </div>
                                    <div className={css.offerTax}>
                                        <p style={{textTransform: "uppercase"}}>{menuList.title}...................................... <span>{menuList.price}</span></p>
                                        <p>{menuList.description}</p>
                                    </div>
                                </div>
                    </div>
                </div>
                
        // </div>
  )
}

export default MenuSingle
