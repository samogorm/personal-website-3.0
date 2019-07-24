import React from 'react'

import './Footer.css'
import {SocialMediaContent} from './../../static-content/SocialMediaContent';

export const Footer = (props) => {
    return (
        <footer className="site-footer">
            <div className="social-media-layer">
               <div className="social-media-icons">
                   {SocialMediaContent.map((socialPlatform, index) => {
                       return(
                            <div key={index} className="social-media-icon">
                                <a href={socialPlatform.url}>
                                    <i className={socialPlatform.icon}></i>
                                </a>
                            </div>
                       )
                   })}
               </div>
            </div>
            <div className="footer-layer">
                <p>Designed and developed by Samantha O'Gorman</p>
            </div>
        </footer>
    )
}