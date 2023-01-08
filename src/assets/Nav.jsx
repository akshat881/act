import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
export default function Nav(){
    const [ico,icon]=useState('');
    const [ic,io]=useState('');
    function reloadPage(hom){ 
        // console.log(home);
        // document.body.classList.remove('home');
        //  document.body.classList.add(home);
        // window.location.reload(); 
        var div = document.createElement('div');
        div.id = 'preloader';
        div.className = 'preloader';
        div.innerHTML = '<div class="black_wall"></div><div class="loader"></div>';
        document.body.insertBefore(div, document.body.firstChild);
          
         document.getElementById('preloader').classList.add('off');
          
        
        var Revealator = void 0 !== Revealator ? Revealator : {};
        $(function () {
            function a() {
                Revealator.busy ||
              ((Revealator.busy = !0),
              setTimeout(()=> {
                  (Revealator.busy = !1), Revealator.refresh();
              }, 150));
            }
            ((Revealator = $.extend(
                {},
                {
                    timer: null,
                    busy: !1,
                    scroll_padding: 0,
                    effects_padding: 0,
                    refresh: function () {},
                },
                void 0 !== Revealator ? Revealator : {}
            )).refresh = function () {
                var a = $(window),
                    e = $(document),
                    o = $(document.body),
                    t = Revealator.effects_padding,
                    l = a.height() - Revealator.effects_padding,
                    r = Revealator.scroll_padding,
                    s = e.height() - Revealator.scroll_padding;
                0 === a.scrollTop()
                    ? o.hasClass('at-top') ||
                o
                    .addClass('at-top')
                    .removeClass('at-bottom')
                    .removeClass('near-top')
                    .removeClass('near-bottom')
                    : a.scrollTop() + a.height() === e.height()
                        ? o.hasClass('at-bottom') ||
                o
                    .addClass('at-bottom')
                    .removeClass('at-top')
                    .removeClass('near-top')
                    .removeClass('near-bottom')
                        : a.scrollTop() <= r
                            ? o.hasClass('near-top') ||
                o
                    .addClass('near-top')
                    .removeClass('near-bottom')
                    .removeClass('at-top')
                    .removeClass('at-bottom')
                            : a.scrollTop() + a.height() >= s
                                ? o.hasClass('near-bottom') ||
                o
                    .addClass('near-bottom')
                    .removeClass('near-top')
                    .removeClass('at-top')
                    .removeClass('at-bottom')
                                : (o.hasClass('at-top') ||
                  o.hasClass('at-bottom') ||
                  o.hasClass('near-top') ||
                  o.hasClass('near-bottom')) &&
                o
                    .removeClass('at-top')
                    .removeClass('at-bottom')
                    .removeClass('near-top')
                    .removeClass('near-bottom'),
                $('*[class*="revealator"]').each(function () {
                    0;
                    var a = $(this),
                        e = this.getBoundingClientRect(),
                        o = void 0;
                    (o =
                  e.top > l && e.bottom > l
                      ? 'revealator-below'
                      : e.top < l && e.bottom > l
                          ? 'revealator-partially-below'
                          : e.top < t && e.bottom > t
                              ? 'revealator-partially-above'
                              : e.top < t && e.bottom < t
                                  ? 'revealator-above'
                                  : 'revealator-within'),
                    a.hasClass('revealator-load') &&
                    !a.hasClass('revealator-within') &&
                    (a.removeClass(
                        'revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above'
                    ),
                    a.addClass('revealator-within')),
                    a.hasClass(o) ||
                    a.hasClass('revealator-load') ||
                    (a.hasClass('revealator-once')
                        ? (a.hasClass('revealator-within') ||
                          (a.removeClass(
                              'revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above'
                          ),
                          a.addClass(o)),
                        (a.hasClass('revealator-partially-above') ||
                          a.hasClass('revealator-above')) &&
                          a.addClass('revealator-within'))
                        : (a.removeClass(
                            'revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above'
                        ),
                        a.addClass(o)));
                });
            }),
            $(window).on('scroll resize load', function () {
                a();
            }),
            $(document).ready(function () {
                a();
            });
        });
        
    
    }
    useEffect(()=>{
       
    //     document.body.classList.add('home');
        var Revealator=void 0!==Revealator?Revealator:{};$(function(){function a(){Revealator.busy||(Revealator.busy=!0,setTimeout(function(){Revealator.busy=!1,Revealator.refresh()},150))}(Revealator=$.extend({},{timer:null,busy:!1,scroll_padding:0,effects_padding:0,refresh:function(){}},void 0!==Revealator?Revealator:{})).refresh=function(){var a=$(window),e=$(document),o=$(document.body),t=Revealator.effects_padding,l=a.height()-Revealator.effects_padding,r=Revealator.scroll_padding,s=e.height()-Revealator.scroll_padding;0===a.scrollTop()?o.hasClass('at-top')||o.addClass('at-top').removeClass('at-bottom').removeClass('near-top').removeClass('near-bottom'):a.scrollTop()+a.height()===e.height()?o.hasClass('at-bottom')||o.addClass('at-bottom').removeClass('at-top').removeClass('near-top').removeClass('near-bottom'):a.scrollTop()<=r?o.hasClass('near-top')||o.addClass('near-top').removeClass('near-bottom').removeClass('at-top').removeClass('at-bottom'):a.scrollTop()+a.height()>=s?o.hasClass('near-bottom')||o.addClass('near-bottom').removeClass('near-top').removeClass('at-top').removeClass('at-bottom'):(o.hasClass('at-top')||o.hasClass('at-bottom')||o.hasClass('near-top')||o.hasClass('near-bottom'))&&o.removeClass('at-top').removeClass('at-bottom').removeClass('near-top').removeClass('near-bottom'),$('*[class*="revealator"]').each(function(){0;var a=$(this),e=this.getBoundingClientRect(),o=void 0;o=e.top>l&&e.bottom>l?'revealator-below':e.top<l&&e.bottom>l?'revealator-partially-below':e.top<t&&e.bottom>t?'revealator-partially-above':e.top<t&&e.bottom<t?'revealator-above':'revealator-within',a.hasClass('revealator-load')&&!a.hasClass('revealator-within')&&(a.removeClass('revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above'),a.addClass('revealator-within')),a.hasClass(o)||a.hasClass('revealator-load')||(a.hasClass('revealator-once')?(a.hasClass('revealator-within')||(a.removeClass('revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above'),a.addClass(o)),(a.hasClass('revealator-partially-above')||a.hasClass('revealator-above'))&&a.addClass('revealator-within')):(a.removeClass('revealator-below revealator-partially-below revealator-within revealator-partially-above revealator-above'),a.addClass(o)))})},$(window).on('scroll resize load',function(){a()}),$(document).ready(function(){a()})});
    },[])
    // const reloadPage=value=>console.log(value)
    return(
        
        <header className="header" id="navbar-collapse-toggle">

            <ul className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
                <li className='icon-box' onClick={()=>reloadPage()}>
                    <i className="fa fa-home"></i>
                    <Link to="/">
                        <h2>Home</h2>
                    </Link>
                </li>
                <li className={`icon-box ${ic}`} onClick={()=>reloadPage()}>
                    <i className="fa fa-user"></i>
                    <Link to="/about">
                        <h2>About</h2>
                    </Link>
                </li>
                <li className="icon-box" onClick={()=>reloadPage()}>
                    <i className="fa fa-briefcase"></i>
                    <Link to="/portfolio">
                        <h2>Portfolio</h2>
                    </Link>
                </li>
                <li className="icon-box" onClick={ reloadPage }>
                    <i className="fa fa-envelope-open"></i>
                    <Link to='/contact'>
                        <h2>Contact</h2>
                    </Link>
                </li>

            </ul>

            <nav role="navigation" className="d-block d-lg-none">
                <div id="menuToggle">
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="list-unstyled" id="menu">
                        <li className="active" onClick={()=>reloadPage()}><Link to="/"><i className="fa fa-home"></i><span>Home</span></Link></li>
                        <li onClick={()=>reloadPage()}><Link to="/about"><i className="fa fa-user"></i><span>About</span></Link></li>
                        <li onClick={()=>reloadPage()}><Link to="/portfolio"><i className="fa fa-folder-open"></i><span>Portfolio</span></Link></li>
                        <li onClick={ reloadPage }><Link to="/contact"><i className="fa fa-envelope-open"></i><span>Contact</span></Link></li>
               
                    </ul>
                </div>
            </nav>
  
        </header>
        
    )
}