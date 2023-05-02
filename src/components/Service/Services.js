import React from 'react';
import Service from './Service';
//import Service from './Services';
//import './service.css';
import css from './Service.module.css';



const servicesList = [
    {
      title: 'Easy to order',
      description: 'Only need few steps for food ordering',
      icon: 'fas fa-hamburger',
      image:'./images/s1.png',
    },
    {
      title: 'Faster Delivery',
      description: 'Only need a few steps for ordering',
      icon: 'fas fa-french-fries',
      image: './images/s2.png',
    },
    {
      title: 'Quality Product',
      description: 'Only need a few steps for food ordering.',
      icon: 'fas fa-coffee',
      image: './images/s3.png',
    }
  ];
  
  function Services() {
    return (
      <div className={css.services}>
        <div className={css.h7}>
          <h7>Food Tran</h7>
        </div>
        <div className={css.hed}> 
          <h2>Our Extreme Services</h2> 
        </div>
        <div className={css.mar}>
          <h5>on time Quality Product with fast delivery</h5>
        </div>
        <div className={css.servicesList}>
          {servicesList.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </div>
    );
  }






export default Services;