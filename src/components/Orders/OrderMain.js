import React from 'react'
import orderdata from './OrdersDB'
import Orderdes from './Orderdes'

function OrderMain() {
  return (
    <div>
        {
            orderdata.map(Orderdata=>{
                return<div><Orderdes Orderdata={Orderdata}/></div>
            })
        }
      
    </div>
  )
}

export default OrderMain
