import React from 'react'
import css from './Blog.module.css'
import { useParams } from 'react-router-dom'

import datas from '../../../blogSection/Sub/SubDB'
import useFetch from '../../../../hooks/useFetch'

export default function Blog() {
  const {id} = useParams()

  const { data, loading, error } = useFetch(`http://localhost:8000/api/blog/find/${id}`);
  console.log(data)

  // const d = data.find((data)=> data._id == id)

  return (
    <div>
      <div className={css.row1}>
        {/* <p>{id}</p> */}
        <img src={data.img} style={{
            // margin:`8%`,
            borderRadius:`0 40px 0 40px`, 
            height: `400px`,
            width: `600px` 
        }}/>
      </div>
      <div className={css.row1}>
        <h2>{data.TextH}</h2> 
        <p>{data.TextP}</p>
        <p>{data.textFull}</p>
      </div>
    </div>
  )
}
