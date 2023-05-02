import React from 'react'
import data from './KnowDB'
import Knowusdes from './Knowusdes'

function KnowPage() {
  return (
    <div>
      {
        data.map(Data=>{
            return <div><Knowusdes Data={Data} /></div>
            
        })
      }
      
    </div>
    
  )
}

export default KnowPage
