import React from "react";
import Fialogo from '../images/fia_logo.png';

export default function navbar(props) {
    return (
        <div className="top-header-nav">
            <div className="topWhiteBar">
                <div className="container">
                    <div className="top-inner-White-Bar">
                        <div className="logo">
                            <a href="/" target="_blank">
                                <img src={Fialogo} alt="Federation Internationale de l'Automobile"/>
                            </a>
                        </div>
                        <div className="wrapper-global-nav">
                            <div className="global-actions clearfix">
                                <div className="sign-in logged-out display-upsell-link">
                                    <a href="#" className="login-link btn btn--alpha btn--icon-left" data-locationinpage="navigation" data-pathtype="internal"><span className="user-icon-text"><i className="icon icon-user"></i>Sign In </span></a>
                                    <a href="#" className="user-account-actions btn btn--default btn--icon-left btn--transparent" data-toggle="modal" data-target="#userLoggedInOverlay" data-locationinpage="navigation" data-pathtype="internal"><span className="user-icon-text"><i className="icon icon-user"></i><i className="icon icon-notification"></i><span className="loggedin-user"></span></span>
                                    </a>
                                    <a href="/" className="pitch-link upsell-link btn btn--default" data-locationinpage="navigation" data-pathtype="formula1.com">Subscribe</a>
                                    <a href="/" className="subscribe-link upsell-link btn btn--default d-none" data-locationinpage="navigation" data-pathtype="formula1.com">Subscribe</a>
                                    <a href="/" className="upgrade-link upsell-link btn btn--default d-none" data-locationinpage="navigation" data-pathtype="formula1.com">Upgrade</a>
                                </div>
                            </div>
                            <div className="global-links">
                                <ul>
                                    <li className="has-image">
                                        <a href="/" data-locationinpage="navigation" data-pathtype="external" target="“_blank”">
                                            <img src="/etc/designs/fom-website/images/f1-tv-logo.svg" alt="F1 TV Logo" width="72" height="12"/><span className="icon icon-chevron-right"></span>
                                        </a>
                                    </li>
                                    <li><a href="/" target="_blank" rel="noopener" data-locationinpage="navigation" data-pathtype="external">Authentics<span className="icon icon-chevron-right"></span></a></li>
                                    <li><a href="/" target="_blank" rel="noopener" data-locationinpage="navigation" data-pathtype="external">Store<span className="icon icon-chevron-right"></span></a></li>
                                    <li><a href="/" target="_blank" rel="noopener" data-locationinpage="navigation" data-pathtype="external">Tickets<span className="icon icon-chevron-right"></span></a></li>
                                    <li><a href="/" target="_blank" rel="noopener" data-locationinpage="navigation" data-pathtype="external">Hospitality<span className="icon icon-chevron-right"></span></a></li>
                                    <li><a href="/" target="_blank" rel="noopener" data-locationinpage="navigation" data-pathtype="external">Experiences<span className="icon icon-chevron-right"></span></a></li>
                                </ul>
                                <a href="/" data-locationinpage="navigation" data-pathtype="external" target="“_blank”">
                                    <img src="/etc/designs/fom-website/images/f1-tv-logo.svg" alt="F1 TV Logo" width="72" height="12"/>
                                </a>
                            </div>
                        </div>
                        <div className="f2-f3-nav">
                            <ul>
                                <li>
                                    <a href="/en.html" className="f2f3-black">
                                        <span>F1<sup>™</sup></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}