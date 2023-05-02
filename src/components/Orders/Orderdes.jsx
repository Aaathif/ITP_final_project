import React from 'react'
import css from './Orders.module.css'
import DeleteIcon from '@mui/icons-material/Delete';


function Orderdes({Orderdata}) {
  return (
    <div className={css.container}>
        <div className={css.row}> 

      <div className={css.colum}>
        <h3>{Orderdata.remove}</h3>
      </div>
      
      <div className={css.colum}>
      <h3 >{Orderdata.image}</h3>

      </div>

      <div className={css.colum}>
        <h3 >{Orderdata.product}</h3>
       
      </div>

      <div className={css.colum}>
        <h3 >{Orderdata.price}</h3>
        
      </div>

      <div className={css.colum}>
        <h3 >{Orderdata.quantity}</h3>
       
      </div>

      <div className={css.colum}>
      <h3 >{Orderdata.quantity}</h3>
      
      </div>
      
      </div>
      <hr />


      <div className={css.row}> 
         <div className={css.colum}>
         {/* <img src={Orderdata.closebtn} style={{ height: '10px', width: '10px' }} alt="cxsvcxs"  /> */}
         <DeleteIcon style={{color: "red", fontSize: "30px"}}/>
         
        </div>

        <div className={css.colum}>
        <img src={Orderdata.imggg} style={{ height: '80px', width: '80px', borderRadius:"20px" }} alt="" />
        </div>

        <div className={css.colum}>
        <p>{Orderdata.pname}</p>
        </div>

        <div className={css.colum}>
        <p>{Orderdata.pprice}</p>
        </div>

        <div className={css.colum}>
        <p>{Orderdata.pquantity}</p>
        </div>

        <div className={css.colum}>
        <p>{Orderdata.psubtotal}</p>
        </div>

      </div>
      <hr />

      <div className={css.row}>
        <div className={css.colum2}>

        <h3 className={css.textcenter}>{Orderdata.couppn}</h3>
        <br />
        <span>
        <textarea className={css.textarea}> </textarea>
        <button className={css.btn}>{Orderdata.add}</button>
        </span>
        </div>


        <div className={css.colum2}>
          <div className={css.element}>
            <div className={css.element1}>
              <p className={css.text}>{Orderdata.cart}</p>

                <div className={css.colum3}>
                  
                  <p className={css.text1}>{Orderdata.Ovalue}</p>
                  <br />
                  
                  <p className={css.text2}>{Orderdata.ship}</p>
                  <br/>
                  <p className={css.text3}>{Orderdata.total}</p>
                  <button className={css.btn2}>{Orderdata.checkout}</button>

                </div>
            </div>


          </div>
        </div>

      </div>
    </div>
   

  )
}

export default Orderdes
