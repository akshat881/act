import React from 'react';
import image from '../img/img-mobile.jpg'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
export default function Hom(){
    function reloadPage(){ 
        window.location.reload(); 
    }
    return(
<div className='home'>
        <section className="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1">
    <div className="color-block d-none d-lg-block"></div>
    <div className="row home-details-container align-items-center">
        <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
            <div>
                <img src={image} className="img-fluid main-img-mobile d-none d-sm-block d-lg-none" alt="my picture" />
                <h6 className="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">hi there !</h6>
                <h1 className="text-uppercase poppins-font"><span>I'm</span> akshat</h1>
                <p className="open-sans-font" >I am a CSE undergrad looking to make a career in the IT field. I am also a part-time content creator on YouTube and the founder of Aurora LPU, a student organization. I have expertise in graphic design, Web development, motion design, 3-D modeling, and technical sales. I am looking for a great job opportunity that will enhance my career and help me grow. With an optimistic approach, I'm looking forward to a great work experience..</p>
                <Link to="/about" className="btn btn-about">more about me</Link>
            </div>
        </div>
    </div>
</section>
</div>
    )
}