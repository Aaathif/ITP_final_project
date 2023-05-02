import React, { useState } from 'react'
import css from './ListProduct.module.css'
import { Link } from 'react-router-dom';
// import P1 from '../Figma Pic/p1.png'

function ProductSingle({productList}) {

    
        
    const [size, setSize] = useState("S")

    // const newSize = productList.prices.map(item => {
    //     return { size: item.size};
    // })

    const newPrice = productList.prices.map(item => {
        return { size: item.size, price: item.price };
    })

    const price = newPrice.map((s,index) => {
        if(s.size === size){
           return s.price
        }
    })

  return (
        // <div className={css.row}>
                <div className={css.col3}>
                    <div className={css.colContainer}>
                        <img src={productList.photos} alt="" className='img-fluid' style={{ height: "150px", width: "150px" }} />
                        <h3>{productList.title}</h3>
                        {/* <h2>Price Rs.{newPrice.map((s,index) => {
                            if(s.size === size){
                               return <span>{s.price}</span>
                            }
                        })}</h2> */}
                        <h1>{price}</h1>
                        <div className={css.Cartbtn}>
                            <select className={css.rangeBtn} value={size} onChange={(e)=>{setSize(e.target.value)}}>
                                {productList.size.map(size => {
                                    return <option value={size}>{size}</option>
                                })}
                            </select>
                            <Link to={{pathname:`/singleProduct/${productList._id}`}} state={{size, price}}>
                                <div className={css.addToBtn}>Add</div>
                            </Link>
                        </div>
                    </div>
                </div>
                
        // </div>
  )
}

export default ProductSingle
