import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
import EventMain from '../components/EventList/EventMain'
import BannerPage from '../components/Banner2/Banner2/BannerPage'

function EventPage() {

  const title = "#Our Blogs"
  const img = "https://c8.alamy.com/zooms/9/59d5e62a87e94e329423c3b1c9e3194e/t43hj6.jpg"

  return (
    <div>
        <Navbar />
        <BannerPage title={title} img={img}/>
        <EventMain />
        <Footer />
    </div>
  )
}

export default EventPage
