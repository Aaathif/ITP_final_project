import React from "react";
import './footer.css';
// import fb from "../assets/fbimg.png";
// import twiiter from "../assets/twitterimg.png";
// import linkedin from "../assets/linkedinimg.png";
// import instagram from "../assets/instagramimg.png";

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer=()=>{
    return(
        <div classNam="footer">
            <div className="section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>Businees</h4>
                        <a href="/admin">
                            <p>Admin</p>
                        </a>
                        <a href="/login">
                            <p>Login</p>
                        </a>
                        <a href="/register">
                            <p>Register</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                    <h4>Resources</h4>
                        <a href="/resource">
                            <p>Inventory</p>
                        </a>
                        <a href="/feedback">
                            <p>Feedback</p>
                        </a>
                        <a href="/event">
                            <p>Events</p>
                        </a>
                    </div>
                    
                    <div className="sb__footer-links-div">
                    <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                    <h4>Coming Soon</h4>
                        <div className="socialmedia">
                            
                            <p><FacebookIcon style={{ fontSize: 40 }}/></p>
                            <p><WhatsAppIcon style={{ fontSize: 40 }}/></p>
                            <p><LinkedInIcon style={{ fontSize: 40 }}/></p>
                            <p><InstagramIcon style={{ fontSize: 40 }}/></p>
                            {/* <p><TwitterIcon style={{ fontSize: 40 }}/></p> */}
                    </div>
                    </div>
                </div>
                <hr />

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear} FoodTrain. All Rights Reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/secuirty"><div><p>Secuirty</p></div></a>
                        <a href="/cookie"><div><p>Cookie</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;