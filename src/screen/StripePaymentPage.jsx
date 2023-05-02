import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/footer'
import Pay from '../components/StripePayment/Pay'

function StripePaymentPage() {
  return (
    <div>
      <Navbar />
      <Pay />
      <Footer />
    </div>
  )
}

export default StripePaymentPage
