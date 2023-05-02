import React from 'react'
import data from './Details'
import AdsFeed from './AdsFeed'
function AdsPage() {
  return (
    <div>
      <div>
        {data.map(Data =>{
            return <div><AdsFeed Data = {Data}/></div>

        })}
      </div>
    </div>
  )
}

export default AdsPage
