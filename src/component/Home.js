import React, {useState, useEffect } from 'react';
import './Home.css';
import HomeImg from '../images/bg3.svg';
import FrontendImg from '../images/codeImage.svg';
import MongoDb from '../images/MongoDB_LogoStacked_FullColorBlack_RGB.png';
import Figma from '../images/figma-1-logo-png-transparent.png';
import JavaImage from '../images/Java.png';
import ReactImage from '../images/ReactJs.png';
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {

    useEffect(() => {
        Aos.init({
            duration:1000,
            easing: 'ease'
        })
    },[])
    return (
        <div className="home">
            <div data-aos="fade-right" data-aos-duration="1500" className="home__banner">
                <img src={HomeImg} className="home__img" alt="home" />
                <div>
                    <h5 className="home__h5">Hi There</h5>
                    <p>
                        Little About Me. My name is Anuoluwapo Oyetibo and I am a developer based in New York. I was born and raised in Nigeria. I moved to America at the age of 15 with my family for a better education.
                        My passion for developing software started somewhere around my second year in college, I always had an intrest in computers and tech, but it never fully dawned on me until I took a web development class. 
                        Ever since, I have fully immersed myself in an ocean of technology. By enrolling in multiple development classes and taking on some development projects. I have gained much knowledge in the disclipline of software development and web development. While there is still room to expand my knowledge I am eager to practicalize what I have learned thus far and build real world applications.
                    </p>
                    <p>
                        Computer Science Student at the City University of New York, College of Staten Island. Enthusiastic about technology, developing and creative.
                    </p>
                </div>
            </div>

            <section className="home__section">
                <article data-aos="fade-left" data-aos-duration="2000">
                    <h4 className="article__h4">Frontend Developer Experience</h4>
                    <p>Frontend developer @Develop For Good</p>

                    <p className="article__p">
                        <span>
                            Worked with a team of talented developers for a non-profit organization, under the banner of develop for good.
                        </span>

                        <san>
                            We built a technology used to accept donations for specific projects regarding climate issues and solutions. The application was also designed to allow users create a project within the given scopes.
                        </san>
                        <span>
                            Collaborated with UX/UI team to redesign and build company main technology and set organization wide standards for software usability and user experience.
                        </span>

                        <span>
                            Built company application using HTML5, Javascript, and CSS3; with NextJs framework and Ant Design.
                        </span>
                    </p>
                </article>
                <img className="home__section-img" src={FrontendImg} alt="" />

            </section>

            <section data-aos="zoom-in-right" data-aos-duration="1500" className="mid__section">
                <h4>Programming, Frameworks & Software Tools</h4>

                <div>
                    <p>
                        <img className="img__icon" src="https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582153514864-GB5SLDKBLCMU1VDPUWQT/firebase.png?" alt="" />
                        <span>Google Firebase</span>
                    </p>

                    <p>
                        <img className="img__icon" src = {MongoDb} alt="mongodb" />
                        <span>Mongo DB</span>
                    </p>
                    
                    <p>
                        <img className="img__icon" src="https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582153409488-A6O96S3MIIH32XY286UY/git-icon.png?" alt="" />
                        <span>Git</span>
                    </p>

                    <p>
                        <img className="img__icon" src="https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582153410007-OKX754MU644R58U4G9UD/js-icon.png?" alt="" />
                        <span>Javascript</span>
                    </p>

                    <p>
                        <img className="img__icon" src="https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582158011361-RP18N68DQ255HLMXR3BS/c%2B%2B.png?" alt="" />
                        <span>C++</span>
                    </p>

                    <p>
                        <img className="img__icon" src= {ReactImage} alt="react" />
                        <span>ReactJs</span>
                    </p>

                    <p>
                        <img className="img__icon" src="https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582153491403-TQQQKOWFQXA98EW9B9EN/material-design-logo.png?" alt="" />
                        <span>Material Design</span>
                    </p>

                    <p>
                        <img className="img__icon-plus" src="https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582158060294-RTV62GZPJ3EKIFIOY6VB/css.png?" alt="" />
                        <span>CSS3</span>
                    </p>

                    <p>
                        <img className="img__icon-plus" src="https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582158112231-RFM98HSU5CROP7ON2GNC/55263234-8b903300-522d-11e9-9926-44e4b3c17e0a.png?" alt="" />
                        <span>NPM</span>
                    </p>

                    <p>
                        <img className="img__icon-plus" src="https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582158118669-Q3NKUJ85U95E8KF69Z21/node.png?" alt="" />
                        <span>NodeJs</span>
                    </p>

                    <p>
                        <img className="img__icon" src={JavaImage} alt="java" />
                        {/* <span>Java</span> */}
                    </p>

                    <p>
                        <img className="img__icon" src={Figma} alt="figma" />
                        {/* <img className="img__icon-plus" src="https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582158238678-EMBWQ4FFUGJ5SBA1X4DX/figma.png?" alt="" /> */}
                        <span>Figma</span>
                    </p>
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </div>
    )
}

export default Home
