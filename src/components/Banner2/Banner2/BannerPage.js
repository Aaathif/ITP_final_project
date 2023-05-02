import React from "react";
import data from './Banner2DB'
import Banner2 from "./Banner2";
import css from './Banner2.module.css'


function BannerPage({title, img}) {
  return (
    <div className={css.container}>
      <div className={css.container}>
        {
          data.map(Data=>{
              return <div><Banner2 Data={Data} title={title} img={img}/> </div>
          })
        }
      </div>
    </div>
  )
}

export default BannerPage
