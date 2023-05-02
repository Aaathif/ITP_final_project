import React from 'react'
import css from './FeaturedService.module.css'

function FeaturedService() {
  return (
    <div className={css.container}>
      <div className={css.row}>
        <div className={css.col5}>
          <div className={css.features}>
            <img src='./images/features/f1.png' alt=''/>
            <button>free Shipping</button>
          </div>  
        </div>
        <div className={css.col5}>
          <div className={css.features}>
            <img src='./images/features/f2.png' alt=''/>
            <button>Save Money</button>
          </div>  
        </div>
        <div className={css.col5}>
          <div className={css.features}>
            <img src='./images/features/f3.png' alt=''/>
            <button>Promotions</button>
          </div>  
        </div>
        <div className={css.col5}>
          <div className={css.features}>
            <img src='./images/features/f4.png' alt=''/>
            <button>Happy Sell</button>
          </div>  
        </div>
        <div className={css.col5}>
          <div className={css.features}>
            <img src='./images/features/f5.png' alt=''/>
            <button>F24/7 Support</button>
          </div>  
        </div>

      </div>
    </div>
  )
}

export default FeaturedService
