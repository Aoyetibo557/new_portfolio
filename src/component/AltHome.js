import React, { useEffect } from 'react';
import "./AltHome.css";
import HomeImage from "../images/bg3.svg"
import Skills from './Skills';
import Footer from './Footer';
import AOS from "aos";
import "aos/dist/aos.css"
import Contact from './Contact';

function AltHome() {

    useEffect(()=>{
        AOS.init({
            easing: "ease-in",
            duration: "1000"
        })
    }, [])


  return (
    <div className='home'>

        <section className='home__container'>
            <div className='home__top'>
                <article data-aos="fade-right" data-aos-duration="1500"  className='home__intro'>
                    <div>
                       <p>Hello i am</p>
                        <h4> 👋🏽 Anuoluwapo</h4>
                        <p><span>"ha-nu-o-lu-wa-puh" </span> </p>
                   </div>

                    <div data-aos="fade-left" data-aos-duration="1900" className=''>
                        <p>{`{Fullstack Developer / Frontend Developer}`}</p>
                    </div>      
                </article>

               

                <img data-aos="fade-up-left" data-aos-duration="1500"  className='home__img' src={HomeImage}  alt="Home Img" />
            </div>

            <div className='home__skills'>
                <Skills />
            </div>

            <div className='home__contact'>
                <Contact />
            </div>
        </section>

        <section>
            <Footer />
        </section>
    </div>
  )
}

export default AltHome