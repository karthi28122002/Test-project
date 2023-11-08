import React from "react";
import "../components css/footer.css";
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; 
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import androidApp from "../images/app_ios.png";
import iphoneApp from "../images/app_ios.png";


library.add(faFacebookF,faTwitter,faYoutube,faLinkedinIn,faRss,faGlobe )

function Footer() {
    return (
      <>
        <footer>
            <section className="Footer-links-1">
                <Grid className="inside-footer-1" container spacing={2}>
                    <Grid className="box-container" xs={12} sm={12} md={4} lg={4} xl={4}>
                        <h4>Follow Us</h4>
                        <p>We make consolidating, marketing and tracking your social media website easy.</p>
                        <div className="social-links">
                           <a href="#" className="social-FB"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a>
                           <a href="#" className="social-Twitter"><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                           <a href="#" className="social-YT"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                           <a href="#" className="social-LI"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
                           <a href="#" className="social-Rss"><FontAwesomeIcon icon="fa-solid fa-rss" /></a>
                           <a href="#" className="social-Globe"><FontAwesomeIcon icon="fa-solid fa-globe" /></a>
                        </div>
                    </Grid>
                    <Grid className="box-container" xs={12} sm={12} md={4} lg={4} xl={4}>
                        <h4>Sign Up to Newletter</h4>
                        <p>Join 60.000+ subscribers and get a new discount coupon on every Saturday.</p>

                        <div className="search-feild">
                            <input className="email-feild" type="email" placeholder="Enter your Email here..."/>
                            <button>SUBSCRIBE</button>
                        </div>
                    </Grid>
                    <Grid className="box-container" xs={12} sm={12} md={4} lg={4}xl={4}>
                        <h4>Download App</h4>
                        <p>DukaMarket App is now available on App Store & Google Play. Get it now.</p>
                        <div className="download-app">
                            <a href="#"><img src={androidApp}/></a>
                            <a href="#"><img src={iphoneApp}/></a>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </footer>
      </>
    )
};

export default Footer;