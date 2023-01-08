import React from 'react';
import image from '../img/img-mobile.jpg'
export default function About(){
    return(
 <div className='about'>
    <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
    <h1>ABOUT <span>ME</span></h1>
    <span className="title-bg">Resume</span>
</section>

<section className="main-content revealator-slideup revealator-once revealator-delay1">
    <div className="container">
        <div className="row">
         
            <div className="col-12 col-lg-5 col-xl-6">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-uppercase custom-title mb-0 ft-wt-600">personal infos</h3>
                    </div>
                    <div className="col-12 d-block d-sm-none">
                        <img src={image} className="img-fluid main-img-mobile" alt="my picture" />
                    </div>
                    <div className="col-6">
                        <ul className="about-list list-unstyled open-sans-font">
                            <li> <span className="title">first name :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Akshat</span> </li>
                            <li> <span className="title">Age :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">21 Years</span> </li>
                            <li> <span className="title">Nationality :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Indian</span> </li>
                            <li> <span className="title">Freelance :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Available</span> </li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="about-list list-unstyled open-sans-font">
                            <li> <span className="title">Address :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Gujarat,Jamnager</span> </li>
                            <li> <span className="title">phone :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">+91 8980245284</span> </li>
                            <li> <span className="title">Email :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">akshatranjan881@mail.com</span> </li>
                            <li> <span className="title">Instagram :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">@_akshat_ranjan_</span> </li>
                            <li> <span className="title">langages :</span> <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">Hindi, English, Gujarati</span> </li>
                        </ul>
                    </div>
                    <div className="col-12 mt-3">
                        <a href="resume.pdf" className="btn btn-download">Download CV</a>
                    </div>
                </div>
            </div>
       
            <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
                <div className="row">
                    <div className="col-6">
                        <div className="box-stats with-margin">
                            <h3 className="poppins-font position-relative">3</h3>
                            <p className="open-sans-font m-0 position-relative text-uppercase">years of <span className="d-block">experience</span></p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box-stats with-margin">
                            <h3 className="poppins-font position-relative">10</h3>
                            <p className="open-sans-font m-0 position-relative text-uppercase">completed <span className="d-block">projects</span></p>
                        </div>
                    </div>


                </div>
            </div>
       
        </div>
        <hr className="separator"/>
 
        <div className="row">
            <div className="col-12">
                <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">My Skills</h3>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                <div className="c100 p25">
                    <span>25%</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">html</h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                <div className="c100 p89">
                    <span>89%</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">javascript</h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                <div className="c100 p70">
                    <span>70%</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">css</h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                <div className="c100 p66">
                    <span>66%</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">php</h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                <div className="c100 p95">
                    <span>95%</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">photoshop</h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                <div className="c100 p50">
                    <span>50%</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">after effect</h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                <div className="c100 p65">
                    <span>65%</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">java</h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
                <div className="c100 p45">
                    <span>45%</span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                </div>
                <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">react</h6>
            </div>
        </div>
    
        <hr className="separator mt-1"/>
      
        <div className="row">
            <div className="col-12">
                <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Experience <span>&</span> Education</h3>
            </div>
            <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                    <ul>
						 <li>
                            <div className="icon">
                                <i className="fa fa-briefcase"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">2022 - Present</span>
                            <h5 className="poppins-font text-uppercase">Founder, CEO <span className="place open-sans-font">CODING BLOCKS LPU</span></h5>
                            <p className="open-sans-font">As the Founder and CEO of CodingBlocks LPU, I saw it as my responsibility to assist students who are struggling with coding so that they can excel in their careers. I did everything I could to help others who are struggling to get started, from organising workshops and webinars and educating students about different domains in programming to creating a coding culture where they can practise coding alongside others.
                            </p>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="fa fa-briefcase"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">2022</span>
                            <h5 className="poppins-font text-uppercase">Founder, Head Graphic Designer  <span className="place open-sans-font">AURORA</span></h5>
                            <p className="open-sans-font">As the Founder of a Student Organisation, my responsibilities included managing all the people and guiding them about the work that had to be done. Facing the problem of deficiency of Graphic Designers, I conducted a crash course on Graphic Designing and taught 20+ students. I was also the organizer of a national-level coding festival that had 900+ participants.
                            </p>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="fa fa-briefcase"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">2021</span>
                            <h5 className="poppins-font text-uppercase"> Graphic Designer<span className="place open-sans-font">Gravity</span></h5>
                            <p className="open-sans-font">Contributed to a national-level Technical event named Gravithon 2021, which lasted for 15 days. I designed posters and covered all requirements on a daily basis. </p>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="fa fa-briefcase"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">2021</span>
                            <h5 className="poppins-font text-uppercase">Senior Graphic Designerer <span className="place open-sans-font">Sapphire</span></h5>
                            <p className="open-sans-font">Organized various events and worked as a Graphic designer, Video Editor.  Lead and trained the Graphic designer team. Held the responsibility of supervising and training them to improve their skills</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                    <ul>
                        <li>
                            <div className="icon">
                                <i className="fa fa-graduation-cap"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">2023</span>
                            <h5 className="poppins-font text-uppercase">Engineering Degree <span className="place open-sans-font">Lovely Professional University, Punjab</span></h5>
                            <p className="open-sans-font"></p>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="fa fa-graduation-cap"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">2019</span>
                            <h5 className="poppins-font text-uppercase">12th Schooling Details<span className="place open-sans-font">Prime science school</span></h5>
                            <p className="open-sans-font"></p>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="fa fa-graduation-cap"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">2016</span>
                            <h5 className="poppins-font text-uppercase">10th Schooling Details<span className="place open-sans-font">Kendriya Vidyalaya no 3 AF 2</span></h5>
                            <p className="open-sans-font"></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  
    </div>
</section>
 </div>
    )
}