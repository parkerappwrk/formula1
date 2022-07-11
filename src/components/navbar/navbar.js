import React from "react";
import Fialogo from '../../images/fia_logo.png';
import Navbarcss from "./navbar.module.css";

export default function Navbar() {
    return (
        <div className={Navbarcss.topHeaderNav}>
            <div className={Navbarcss.topWhiteBar}>
                <div className={Navbarcss.container}>
                    <div className={Navbarcss.topInnerWhiteBar}>
                        <div className={Navbarcss.logo}>
                            <a href="/" target="_blank">
                                <img src={Fialogo} alt="Federation Internationale de l'Automobile"/>
                            </a>
                        </div>
                        <div className={Navbarcss.wrapperGlobalNav}>
                            <div className={`${Navbarcss.globalActions} ${Navbarcss.clearfix}`}>
                                <div className={`${Navbarcss.signIn} ${Navbarcss.loggedOut} ${Navbarcss.displayUpsellLink}`}>
                                    <a href="#" className={Navbarcss.loginLink} data-locationinpage="navigation" data-pathtype="internal"><span className={Navbarcss.userIconText}><i className={Navbarcss.iconUser}></i>Sign In </span></a>
                                    <a href="#" className={Navbarcss.userAccountActions} data-toggle="modal" data-target="#userLoggedInOverlay" data-locationinpage="navigation" data-pathtype="internal"><span className={Navbarcss.userIconText}><i className={Navbarcss.iconUser}></i><i className={Navbarcss.iconNotification}></i><span className={Navbarcss.loggedinUser}></span></span>
                                    </a>
                                    <a href="/" className={Navbarcss.pitchLink} data-locationinpage="navigation" data-pathtype="formula1.com">Subscribe</a>
                                </div>
                            </div>
                            <div className={Navbarcss.globalLinks}>
                                <ul>
                                    <li className={Navbarcss.hasImage}>
                                        <a href="/" data-locationinpage="navigation" data-pathtype="external" target="_blank">
                                            <img src="/etc/designs/fom-website/images/f1-tv-logo.svg" alt="F1 TV Logo" width="72" height="12"/><span className={Navbarcss.iconChevronRight}></span>
                                        </a>
                                    </li>
                                    <li><a href="/" target="_blank" rel="noopener" data-locationinpage="navigation" data-pathtype="external">Authentics<span className={Navbarcss.iconChevronRight}></span></a></li>
                                    <li><a href="/" target="_blank" rel="noopener" data-locationinpage="navigation" data-pathtype="external">Store<span className={Navbarcss.iconChevronRight}></span></a></li>
                                    <li><a href="/" target="_blank" rel="noopener" data-locationinpage="navigation" data-pathtype="external">Tickets<span className={Navbarcss.iconChevronRight}></span></a></li>
                                    <li><a href="/" target="_blank" rel="noopener" data-locationinpage="navigation" data-pathtype="external">Hospitality<span className={Navbarcss.iconChevronRight}></span></a></li>
                                    <li><a href="/" target="_blank" rel="noopener" data-locationinpage="navigation" data-pathtype="external">Experiences<span className={Navbarcss.iconChevronRight}></span></a></li>
                                </ul>
                                <a href="/" data-locationinpage="navigation" data-pathtype="external" target="_blank">
                                    <img src="/etc/designs/fom-website/images/f1-tv-logo.svg" alt="F1 TV Logo" width="72" height="12"/>
                                </a>
                            </div>
                        </div>
                        <div className={Navbarcss.nav}>
                            <ul>
                                <li>
                                    <a href="/en.html" className={Navbarcss.f2f3black}>
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