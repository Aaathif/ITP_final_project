import React, {useState} from 'react'
import css from './Email.module.css'

function Email() {


    const[Email , setEmail]= useState('');

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();

        console.log(`Submitting email ${Email}`);
        // Here you would typically send the email to your server or API
    }
  return (
    <div className={css.container}>
      {/* style={{backgroundImage: `linear-gradient(rgba(66, 62, 43, 0.6),rgba(0,0,0,0.8)),url(${backImage})`}} */}
    <div className={css.row} >
        <div className={css.col1}>
            <h1>To connect with us</h1>
            <h1>Enter your <span>Email</span> here</h1>
        </div>
        <div className={css.col1} /* style={{ 
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }} */>
            <form onSubmit={handleSubmit} style={{display: 'flex' , alignItems: 'center'}}>
            {/* <form style={{display: 'flex' , alignItems: 'center'}}> */}
            
            <div>
                <input type="Email" value={Email} onChange={handleEmailChange} placeholder="foodtrain@gmail.com "  
                style={{ color: '#D9D9D9A1', backgroundColor:' rgb(246, 199, 154)', padding: '16px', border: '1px solid black', borderRadius: '10px 0px 0px 10px', fontSize: '16px', width: '300px', maxWidth: '100%'}} />
                {/* <input type="Email" value={Email} placeholder="foodtrain@gmail.com "  
                style={{ color: '#D9D9D9A1', backgroundColor:' rgb(246, 199, 154)', padding: '16px', border: '1px solid black', borderRadius: '10px 0px 0px 10px', fontSize: '16px', width: '300px', maxWidth: '100%'}} /> */}
               
            

            <button type="submit" 
            style={{ padding: '16px 24px', backgroundColor: '#C52726', color: '##C52726', border: '1px solid black', borderRadius: '0px 10px 10px 0px', 
            fontSize: '16px', cursor: 'pointer'}}>Submit
            </button>
            </div>
            </form>
        </div>
    </div>
    </div>
  );
}

export default Email
