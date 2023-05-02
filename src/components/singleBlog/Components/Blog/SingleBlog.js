import React from 'react'
import data from './BlogData'
import Blog from './Blog'

export default function SingleBlog() {
  return (
    <div>
      <div>
        {data.map(Data =>{
            return <div><Blog Data = {Data}/></div>

        })}
      </div>
    </div>
  )
}
