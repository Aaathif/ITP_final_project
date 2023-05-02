import React from 'react'
import Footer from '../components/Footer/footer'
import Navbar from '../components/Navbar/Navbar'
import ProfileMain from '../components/Profile/ProfilePage' 
import UserDetails from '../components/Profile/UserDetails'


function ProfilePage() {
  return (
    <div>
      <Navbar />
      <ProfileMain />
      <UserDetails />
      <Footer />
    </div>
  )
}


export default ProfilePage
