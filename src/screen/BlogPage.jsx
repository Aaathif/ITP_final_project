import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
import BannerPage from '../components/Banner2/Banner2/BannerPage'
import SubPage from '../components/blogSection/Sub/SubPage'

function BlogPage() {

  const title = "#Our Blogs"
  const img = "https://thumbs.dreamstime.com/b/colourful-various-herbs-spices-cooking-dark-background-herbs-spices-cooking-dark-background-113655482.jpg"

  return (
    <div>
      <Navbar/>
      <BannerPage title={title} img={img}/>
      <SubPage />
      <Footer />
    </div>
  )
}

export default BlogPage
