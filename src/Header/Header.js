import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterestP, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'



export default function Header() {
    return (
        <div className="header">
            <div className="top-bar">
                <div className="social">
                    <a href="/" alt=""><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="/" alt=""><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="/" alt=""><FontAwesomeIcon icon={faPinterestP} /></a>
                </div>
                <div className="logo">
                    <img src="/imgs/SvgjsPath1007.png" alt="" /> 
                </div>
                <div className="lang">
                    <a href="/" alt="">УКР</a>
                    <a href="/" alt="">РУС</a>
                    <a href="/" alt="">ENG</a>
                </div>
            </div>
            <div className="nav-bar">
                <a href="/" alt="">О СТУДИИ</a>
                <h6>•</h6>
                <a href="/" alt="">ПОРТФОЛИО</a>
                <h6>•</h6>
                <a href="/" alt="">ЭТАПЫ РАБОТЫ</a>
                <h6>•</h6>
                <a href="/" alt="">СТОИМОСТЬ</a>
                <h6>•</h6>
                <a href="/" alt="">ЭКО-МАТЕРИАЛЫ</a>
                <h6>•</h6>
                <a href="/" alt="">КОНТАКТЫ</a>
            </div>
        </div>
    );
}

