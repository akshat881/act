import React from 'react';
import { Blurhash,BlurhashCanvas } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
 import close from '../img/projects/navigation/close-button.png'
 import left from '../img/projects/navigation/left-arrow.png'
 import rigth from '../img/projects/navigation/right-arrow.png'
 import im from '../img/images';
 import lozad from 'lozad';
export default function Port(){
    const observer = lozad(); 
observer.observe();
    return(
        <div className='portfolio at-top'>
 <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
    <h1>my <span>portfolio</span></h1>
    <span className="title-bg">works</span>
</section>

<section className="main-content text-center revealator-slideup revealator-once revealator-delay1">
    <div id="grid-gallery" className="container grid-gallery">

        <section className="grid-wrap">
            <ul className="row grid">
           
                <li>
                    <figure>
    
                    <img className="lozad" src={im[0].port1} data-placeholder-background="red" alt="Portolio Image" />
                    
                        <div><span>Poster Project</span></div>
                    </figure>
                </li>
                
                <li>
                    <figure>
                        <img class="lozad" src={im[1].port2} alt="Portolio Image" />
                        <div><span>Youtube Project</span></div>
                    </figure>
                </li>
           
                <li>
                    <figure>
                        <img src={im.port3} alt="Portolio Image" />
                        <div><span>Slider Project</span></div>
                    </figure>
                </li>
              
                <li>
                    <figure>
                        <img src={im.port4} alt="Portolio Image" />
                        <div><span>Local Video Project</span></div>
                    </figure>
                </li>
        
                <li>
                    <figure>
                        <img src={im.port5} alt="Portolio Image" />
                        <div><span>Poster Project</span></div>
                    </figure>
                </li>
             
                <li>
                    <figure>
                        <img src={im.port6} alt="Portolio Image" />
                        <div><span>Poster Project</span></div>
                    </figure>
                </li>
           
                <li>
                    <figure>
                        <img src={im.port7} alt="Portolio Image" />
                        <div><span>CodeFest Project</span></div>
                    </figure>
                </li>
           
                <li>
                    <figure>
                        <img src={im.port8} alt="Portolio Image" />
                        <div><span>UX/UI</span></div>
                    </figure>
                </li>
               
                <li>
                    <figure>
                        <img src={im.port9}alt="Portolio Image" />
                        <div><span>Logo Project</span></div>
                    </figure>
                </li>
             
            </ul>
        </section>

        <section className="slideshow">
            <ul>
                
                <li>
                    <figure>
                      
                        <figcaption>
                            <h3>Poster Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Poster</span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Aurora</span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Tool </span>: <span className="ft-wt-600 uppercase">Photoshop</span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="https://www.instagram.com/p/CSgeeMopqDW/?utm_source=ig_web_copy_link" target="_blank">@auroralpu</a></span>
                                </div>
                            </div>
                        </figcaption>
                    
                        <img src={im.port10} alt="Portolio Image" />
                  
                    </figure>
                </li>
          
                <li>
                    <figure>
                    
                        <figcaption>
                            <h3>Youtube Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Video</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Kito</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Tool </span>: <span className="ft-wt-600 uppercase">Adobe After Effects</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="https://youtu.be/WJXcKlitouk" target="_blank">https://youtu.be/WJXcKlitouk</a></span>
                                </div>
                            </div>
                        </figcaption>
                 
                        <div className="videocontainer">
                            <iframe className="youtube-video" src="https://www.youtube.com/embed/WJXcKlitouk?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer" allowfullscreen></iframe>
                        </div>
                  
                    </figure>
                </li>
      
                <li>
                    <figure>
            
                        <figcaption>
                            <h3>Slider Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">post</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">CodeFest</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Tool </span>: <span className="ft-wt-600 uppercase">Photoshop</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="https://www.instagram.com/p/CVsr-wjvDF_/?utm_source=ig_web_copy_link" target="_blank">@auroralpu</a></span>
                                </div>
                            </div>
                        </figcaption>
                      
                        <div id="slider" className="carousel slide portfolio-slider" data-ride="carousel" data-interval="false">
                            <ol className="carousel-indicators">
                                <li data-target="#slider" data-slide-to="0" className="active"></li>
                                <li data-target="#slider" data-slide-to="1"></li>
                                <li data-target="#slider" data-slide-to="2"></li>
                            </ol>
                        
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={im.port11} alt="slide 1"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={im.port12} alt="slide 2"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={im.port13} alt="slide 3"/>
                                </div>
                            </div>
                        </div>
                      
                    </figure>
                </li>
   
                <li>
                    <figure>
           
                        <figcaption>
                            <h3>Local Video Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Video</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Aurora CodeFest</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Tool </span>: <span className="ft-wt-600 uppercase">Adobe After Effect</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="https://youtu.be/6_I95VLpa7I" target="_blank">https://youtu.be/6_I95VLpa7I</a></span>
                                </div>
                            </div>
                        </figcaption>
                   
                        <video id="video" className="responsive-video" controls poster="im.port14">
                            <source src={im.port15} type="video/mp4"/>
                        </video>
                 
                    </figure>
                </li>
              
                <li>
                    <figure>
                 
                        <figcaption>
                            <h3>Poster Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">POSTER</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">GRAVITY</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Tool </span>: <span className="ft-wt-600 uppercase">Photoshop</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">@gravitylpu</a></span>
                                </div>
                            </div>
                        </figcaption>
          
                        <img src={im.port16} alt="Portolio Image" />
               
                    </figure>
                </li>

                <li>
                    <figure>
       
                        <figcaption>
                            <h3>Poster Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Poster</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Sachin Sidhra</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Tool </span>: <span className="ft-wt-600 uppercase">Photoshop</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="https://www.instagram.com/sachinsidhra/" target="_blank">@sachinsidhra</a></span>
                                </div>
                            </div>
                        </figcaption>
       
                        <img src={im.port17} alt="Portolio Image" />
          
                    </figure>
                </li>
           
                <li>
                    <figure>
                   
                        <figcaption>
                            <h3>CodeFest Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Poster</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Aurora Codefest</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">tool </span>: <span className="ft-wt-600 uppercase">Photoshop</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="https://codefest.auroralpu.in/" target="_blank">codefest.auroralpu.in</a></span>
                                </div>
                            </div>
                        </figcaption>
                 
                        <img src={im.port18} alt="Portolio Image" />
            
                    </figure>
                </li>
          
                <li>
                    <figure>
                    
                        <figcaption>
                            <h3>UX/UI</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">UI DESING</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">KITO</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Tool </span>: <span className="ft-wt-600 uppercase">Adobe XD</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="#" target="_blank">akshat.games</a></span>
                                </div>
                            </div>
                        </figcaption>
             
                        <img src={im.port19} alt="Portolio Image" />
                
                    </figure>
                </li>
               
                <li>
                    <figure>
                     
                        <figcaption>
                            <h3>Logo Project</h3>
                            <div className="row open-sans-font">
                                <div className="col-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i><span className="project-label">Project </span>: <span className="ft-wt-600 uppercase">Logo</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i><span className="project-label">Client </span>: <span className="ft-wt-600 uppercase">Aurora</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-code pr-2"></i><span className="project-label">Tool </span>: <span className="ft-wt-600 uppercase">Photoshop</span>
                                </div>
                                <div className="col-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i><span className="project-label">Preview </span>: <span className="ft-wt-600 uppercase"><a href="https://www.instagram.com/auroralpu/" target="_blank">@auroralpu</a></span>
                                </div>
                            </div>
                        </figcaption>
                       
                        <img src={im.port20} alt="Portolio Image" />
                      
                    </figure>
                </li>
           
            </ul>
            
            <nav>
                <span className="icon nav-prev"><img src={left} alt="previous"/></span>
                <span className="icon nav-next"><img src={rigth} alt="next"/></span>
                <span className="nav-close"><img src={close} alt="close"/> </span>
            </nav>
      
        </section>
    </div>
</section>
</div>
    )
}