import React from 'react'
import Footer from '../components/Footer/footer'
import BannerPage from '../components/Banner2/Banner2/BannerPage'
import Navbar from '../components/Navbar/Navbar'
import KnowPage from '../components/Knowus/KnowPage'
import FeaturedService from '../components/FeaturedService/FeaturedService'

function AboutUsPage() {

    const title = "#Let's_Contact_Us"
    const img = "https://img.freepik.com/free-photo/indian-condiments-with-copy-space-view_23-2148723492.jpg?size=626&ext=jpg&ga=GA1.2.853001735.1675535150&semt=sph"

  return (
    <div>
      <Navbar/>
      <BannerPage title={title} img={img}/>
      <KnowPage />
      <FeaturedService />
      <Footer/>
      
    </div>
  )
}

export default AboutUsPage
