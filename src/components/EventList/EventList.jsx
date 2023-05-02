import React from "react";
import styles from "./EventList.module.css"
// import product from "./EventListDb";


const EventList = ({ event }) => {
  return (
    <div className={styles.productContainer}>

      <div className={styles.productDetailsContainer}>
        <div className={styles.imageContainer}>
          <img
            style={{height: "350px", width: "300px"}}
            className={styles.productImage}
            src={event.photos}
            alt="Product Image"
          />
        </div>
        <div className={styles.productDetails}>
          <h2 className={styles.productName}>{event.title}</h2>

          <div className={styles.productPriceContainer}>
            <button className={styles.productPrice}>{event.offer}</button>
            <p className={styles.productOfferPrice}>{event.prices}/=<span> Offer price</span></p>

            <p className={styles.productDescription}>
              {event.description}
            </p>
          </div>
          <button className={styles.productButton}>View</button>
        </div>
      </div>
    </div>
  );
};

export default EventList;



