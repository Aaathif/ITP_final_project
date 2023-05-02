import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import ListProduct from '../components/ListProduct/ListProduct'
import Footer from '../components/Footer/footer'
import Email from '../components/EmailFeed/EmailFeed/Email'
import MenuList from '../components/MenuList/MenuList'
import BannerPage from '../components/Banner2/Banner2/BannerPage'
import SubPage from '../components/blogSection/Sub/SubPage'
import FeaturedService from '../components/FeaturedService/FeaturedService'
import SearchBar from '../components/SearchBar/SearchBar'
import { useLocation } from 'react-router-dom'


function ProductPage() {

  // const location = useLocation();
  // const [type, setType] = useState(location.state.type);

  const title = "#Let's_order"
  const img = "https://www.so-sofitel-huahin.com/wp-content/uploads/sites/73/2022/02/Indian-food-Cover.jpg"
  

  return (
    <div>
      {/* {type} */}
      <Navbar/>
      <BannerPage title={title} img={img}/>
      <MenuList />
      {/* <div>                                                                                                                                                                                                                                                                                    
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63372.80796646913!2d79.87723281402847!3d6.914440579402157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1681205491378!5m2!1sen!2slk" style={{width:"600px", height: "600px", border: "0", borderRadius:"2rem"}}></iframe>
      </div> */}
      {/* <SearchBar /> */}
      <ListProduct/>
      <Email />
      {/* <SubPage /> */}
      {/* <FeaturedService /> */}
      <Footer />
    </div>
  )
}

export default ProductPage
