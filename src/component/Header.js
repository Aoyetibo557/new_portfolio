import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in'   
        })
    }, [])


    return (
        <div className="header">
            <Link className="header__logo" to="/">
                Anuoluwapo Oyetibo
            </Link>
            <p className="header__tagline" >ASPIRING FRONT END DEVELOPER/SOFTWARE DEVELOPER + PHOTOGRAPHER</p>

            <nav className="header__nav">
                <Link className="header__link" to="/" >Home</Link>
                <Link className="header__link" to="/resume" >Resume</Link>
                <Link className="header__link" to="/projects" >Projects</Link>
                <Link className="header__link" to="/potraits" >Photography</Link>
            </nav>
        </div>
    )
}

export default Header
