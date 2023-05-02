import React from 'react'
import Signup from './Reg2'
import data from './RegData'

function RegMain() {
  return (
    <div>
         <div>
            {data.map(Data => { 
                return <div><Signup Data ={Data}/></div>

            })}
        </div>
    </div>
  )
}

export default RegMain