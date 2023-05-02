import React, { useEffect, useState } from 'react'
import css from './SingleProduct.module.css'
import { useLocation, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';

function SingleProduct() {

    const {id} = useParams()
    

    const [qty, setQty] = useState(1)

    const location = useLocation()
    const size = location.state.size
    const price = location.state.price
    const priceQty = parseInt(price) * qty
    console.log(size+"hello")

    

    console.log(location)
    const ids = location.pathname.split("/")[2]

    // const { data, loading, error } = useFetch(`http://localhost:8000/api/product/find/${id}`);
    const { data, loading, error } = useFetch(`/product/find/${ids}`);
        console.log(data)
        

        // const [product, setProduct] = useState({});

        // useEffect(() => {
        //     fetch(`http://localhost:8000/api/product/${id}`)
        //       .then((res) => res.json())
        //       .then((data) => setProduct(data))
        //       .catch((err) => console.log(err));
        //   }, [id]);

    

    // const Data = data.find((d)=> d._id === id)
    // console.log(Data.title)

  return (
    <div className={css.container}>
        <div className={css.row}>
            <div className={css.col2}>
                <img src={data.photos} style={{width: "400px"}}/>
            </div>
            <div className={css.col2}>
                <h6>{data.type}</h6>
                <h3>{data.title}</h3>
                <h4>Size: {size}</h4>
                <h3 style={{color: "gray"}}>Price: {price}</h3>
                <h3>Totol Amount: {priceQty}</h3>
                <input type="number" name="" id="" min={1} value={qty} onChange={(e)=>{setQty(e.target.value)}} />
                <button>Add to cart</button>
                <h4>{data.description}</h4>
                <span>{data.description}!. Get the best Results for Resume Writers Denver. Find what you are looking for! 99% Match on Resume Writers Denver. Find Here - Free, Private and Secure. The Best Resources. Always Facts. Unlimited Access. Results & Answers. Privacy Friendly. Grammarly Helps You Eliminate Errors And Find The Perfect Words To Express Yourself. Find and Add Sources Fast. Fix Punctuation Errors. AI Writing Assistant. Eliminate Grammar Errors. Improve Word Choice. Easily Improve Any Text. </span>
            </div>
        </div>
      
    </div>
  )
}

export default SingleProduct
