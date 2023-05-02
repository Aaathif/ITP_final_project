import React from "react";
import css from './Service.module.css';



function Service(props) {
  return (
    <div className={css.service}>
      <div className={css.imageContainer}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={css.textContainer}>
        <i className={props.icon}></i>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Service;
