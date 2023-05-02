import React from 'react'
import AdsFeed from '../components/AdsFeed/AdsFeed'
import AdsPage from '../components/AdsFeed/AdsPage'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/footer'
import Hero from '../components/Hero/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import ProductList from '../components/ProductList/ProductList'
import Services from '../components/Service/Services'
import Email from '../components/EmailFeed/EmailFeed/Email'
import FeaturedService from '../components/FeaturedService/FeaturedService'
import SearchBar from '../components/SearchBar/SearchBar'


function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar />
      {/* <FeaturedService /> */}
      <Services />
      <ProductList />
      <AdsPage />
      <Email />
      <Footer />
    </div>
  )
}

export default HomePage
