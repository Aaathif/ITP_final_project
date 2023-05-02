import React, { useState } from 'react'
import Profile from './ProfilePage.module.css'
// import Img1 from './images/IMGprofile/profile.png'

function ProfileMain() {
  // const [profilePicture, setProfilePicture] = useState(Img1)

  // const handleProfilePictureChange = () => {
  //   const newProfilePicture = "new-profile-picture-jpg"
  //   setProfilePicture(newProfilePicture)
  // }

  return (
    <div>
      <div className={Profile.row}>
        <div className={Profile.col}>
             <img className={Profile.img1} src="./images/IMGprofile/profile.png" alt='Profile Picture' width={200} height={200}/>
            <div className={Profile.buttonContainer}>
             <button className={Profile.buttons} >Change Profile Picture</button>
             <button className={Profile.buttons}>Edit Profile</button>
             <button className={Profile.buttonDelete}>Delete Account</button>
            </div>
        </div>

        <div className={Profile.col1}>
          <div className={Profile.details}>
             <p>First-Name:     Example</p>
             <p>Last-Name:      Example</p>
             <p>Username:       example125</p>
             <p>Contact-NO:     xxx-xxx-xxxx</p>
             <p>Address: xxx,   Example Rd, Example</p>
             <p>Date-of-Birth:  xx-xx-xxxx</p>
             <p>Email:          example125@gmail.com</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ProfileMain
