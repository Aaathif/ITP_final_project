import React, { useState } from 'react';
import styles from './DeliveryPage.module.css';

function DeliveryPage2(props) {
    const {
        address,
        phoneNumber,
        paymentMethod,
        cost,
        deliveryCharge,
        totalCost
       } = props;

    return (
        <div className={styles.bgr} style={{backgroundImage:`url(https://previews.123rf.com/images/rhoeo/rhoeo2003/rhoeo200300003/141240710-food-delivery-vector-illustration-courier-man-on-scooter-with-yellow-parcel-box-on-the-back-route.jpg)`}}>
        <form className={styles.container}>
        <div className={styles.section} style={{textIndent:`10px`}}>
        <h2 className={styles.sectionTitle} style={{textAlign:`center`, fontSize:`40px`, margin:`50px`,color:`#C52722`}}>Order Summary</h2>
        <p>Delivery Address: {address}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Payment Method : {paymentMethod}</p>
        <hr />
        <p>Cost : {cost}</p>
        <p>Delivery Charge : {deliveryCharge}</p>
        <p>Total Cost: {totalCost}</p>
        </div>
        <button type="submit" className={styles.button0} style={{width:`200px`}}>Confirm</button>
        </form>  
        </div>
      );
}

export default DeliveryPage2
