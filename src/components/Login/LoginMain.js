import React from 'react'
import data from './LoginData'
import Login2 from './Login2'
function LoginMain() {
  return (
    <div>
        <div>
            {data.map(Data => { 
                return <div><Login2 Data ={Data}/></div>


            })}
        </div>
    </div>
  )
}

export default LoginMain