import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faAngular } from "@fortawesome/free-brands-svg-icons"
import { faIonic } from "@fortawesome/free-brands-svg-icons"
import { faStrava } from "@fortawesome/free-brands-svg-icons"
import { faGalacticRepublic } from "@fortawesome/free-brands-svg-icons"
import { faCamera } from "@fortawesome/free-brands-svg-icons"

import GlobalImg from "../images/global.jpg"



const IndexPage = () => (
  <div>
   
<h1>Build awesome Apps using the latest technology powered by Google and Facebook</h1>

<img src={GlobalImg} alt="Helmar Bachle" 
style={{ border: "2px solid rebeccapurple", borderRadius: 5, height: 550 }} />

    <p>WordPress is the easiest and most powerful blogging and website content management system (CMS) in existence today.</p>
    <p>Frameworks like Angular, React and Ionic will continue to grow in 2020</p>
    <FontAwesomeIcon icon={faReact} />
    <FontAwesomeIcon icon={faIonic} />
    <FontAwesomeIcon icon={faAngular} />
    <button>learn more</button>
    <p>Build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>
    <p>Create a progressive Web App with Ionic and deploy it on all platforms</p>
    <p>With Firebase you can deploy a single-page web app, a mobile app landing page, or a progressive web app without all the hassle.</p>
    <p>Get started building a mobile-first site that is responsive on all devices.</p>
    <button>learn more</button>
    <FontAwesomeIcon icon={faFacebook} />
    <FontAwesomeIcon icon={faStrava} />
    <FontAwesomeIcon icon={faGalacticRepublic} />
    <FontAwesomeIcon icon={faCamera} />


    <i class="fas fa-camera fa-3x"></i>
    
    

  </div>



)

export default IndexPage
