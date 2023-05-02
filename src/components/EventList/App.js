import React from 'react';
import EventList from './EventList';


function App() {
  const product = {
    imageSrc: "/images/img1.jpg",
     name: "premium Iftar Meal Box",
    description: " Mutton Biryani | chiken Handi | Half Naan | Samosa | Fruit Chaat | Salad |Dates|Mint Raita | Gulab Jamun | Water or juice",
    offerPrice: "2000/= Offer price",
    offerPercentage: "20%"
  };

  const product2 = {
    imageSrc: "/images/img3.jpg",
     name: "IFTAR Snack pack",
    description: " Mutton Biryani | chiken Handi | Half Naan | Samosa | Fruit Chaat | Salad |Dates|Mint Raita | Gulab Jamun | Water or juice",
    offerPrice: "2500/= Offer price",
    offerPercentage: "10%"
  };
 

  return (
    <div className="app">
  
     <EventList product={product}/>
     <EventList product={product2}/>
      
    </div>
  );

  }
export default App;








