import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
import BannerPage from '../components/Banner2/Banner2/BannerPage'
import SingleBlog from '../components/singleBlog/Components/Blog/SingleBlog'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
// import datas from '../components/blogSection/Sub/SubDB'


function SingleBlogPage() {

  const {id} = useParams()

  const { data, loading, error } = useFetch(`http://localhost:8000/api/blog/find/${id}`);
  console.log(data)

    

    // const data = datas.find((data)=> data.id == id)

    const title = data.TextH
    const img = "https://www.thefoodmarketingexperts.co.uk/wp-content/uploads/2021/05/TFME_Food-Photography_12189.jpg"

  return (
    <div>
      <Navbar />
      <BannerPage title={title} img={img}/>
      <SingleBlog/>
      <Footer />
    </div>
  )
}

export default SingleBlogPage
