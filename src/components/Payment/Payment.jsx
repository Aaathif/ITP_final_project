import React, { useState } from 'react';
import styles from './Payment.module.css';
import axios from "axios";

function Payment() {
  const [paymentMethod, setPaymentMethod] = React.useState('visa');
  const [cardNumber, setCardNumber] = React.useState('');
  const [cardName, setCardName] = React.useState('');
  const [expiryMonth, setExpiryMonth] = React.useState('');
  const [expiryYear, setExpiryYear] = React.useState('');
  const [cvv, setCvv] = React.useState('');

  //to input to data base 
  const [info, setInfo] = useState({})

  const handleChange = (e) => {
    setInfo((prev) => ({...prev, [e.target.id]: e.target.value}))
  } 

  const handleClick = async (e) => {
    alert("Hello submitted")
    e.preventDefault();
    const data = new FormData();
    data.append("upload_preset", "upload");
    try {
      const newPayment = {
        ...info,
      };
      await axios.post("http://localhost:8000/api/payment", newPayment)
    } catch (err) {
      console.log(err);
    }
  } 


  //----------------------------------------------------------------------------------

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle payment submission here
  };

  return (
    <div className={styles.paymentPage}>
      <h1>Make a Payment</h1>

      <div className={styles.paymentOptions}>
        <h2>Choose a Payment Method:</h2>

        <div className={styles.paymentOption}>
        <span>Credit/Debit Card</span>
        
  
          
        </div>

        <div className={styles.cash}>
          
          <span> Cash On Delivery</span>
          
        </div>
      </div>

      <form className={styles.paymentForm} onSubmit={handleSubmit}>
        <h2>Enter Payment Details:</h2>

        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNo"
          name="cardNumber"
          onChange={handleChange}
        />

        <label htmlFor="cardName">Cardholder Name:</label>
        <input
          type="text"
          id="cardholderName"
          name="cardName"
          onChange={handleChange}
        />

        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <label htmlFor="expiryMonth">Expiration Month:</label>
            <input
              type="text"
              id="expMonth"
              name="expiryMonth"
              onChange={handleChange}
            />
          </div>

          <div className={styles.formCol}>
            <label htmlFor="expiryYear">Expiration Year:</label>
            <input
              type="text"
              id="expYear"
              name="expiryYear"
              onChange={handleChange}
            />
          </div>

          <div className={styles.formCol}>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" onClick={handleClick}>Submit Payment</button>
      </form>
    </div>
  );
}

export default Payment;
