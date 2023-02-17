import React, { useEffect } from 'react';
import "./Skills.css";
import SkillsBox from './SkillsBox'
import HtmlImage from "../images/html.png";
import MongoDb from '../images/MongoDB_LogoStacked_FullColorBlack_RGB.png';
import ReactImage from '../images/ReactJs.png';
import JavaImage from '../images/Java.png';
import Figma from '../images/figma-1-logo-png-transparent.png';
import CssImage from "../images/css3.png";
import VscImage from "../images/visualstudio.png";
import AOS from "aos";
import "aos/dist/aos.css"


function Skills() {

    useEffect(()=>{
      AOS.init({
          easing: "ease-in",
          duration: "1000"
      })
    }, [])


  return (
    <div className='skills'>
        <h4>Skills & Experience</h4>
        <section className='skills__container'>
            <div className='skills__div'>
                <SkillsBox imagesrc={HtmlImage} name="HTML" />
                <SkillsBox imagesrc={CssImage} name="CSS" />
                <SkillsBox imagesrc={`https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582153410007-OKX754MU644R58U4G9UD/js-icon.png?`} name="JAVASCRIPT" />
                <SkillsBox imagesrc={`https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582153409488-A6O96S3MIIH32XY286UY/git-icon.png?`} name="GIT" />
                <SkillsBox imagesrc={ReactImage} name="REACTJS" />
                <SkillsBox imagesrc={ReactImage} name="REACT NATIVE" />
                <SkillsBox imagesrc={`https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582153514864-GB5SLDKBLCMU1VDPUWQT/firebase.png?`} name="FIREBASE" />
                <SkillsBox imagesrc={MongoDb} name="MONGO DB" />
                <SkillsBox imagesrc={`https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582158112231-RFM98HSU5CROP7ON2GNC/55263234-8b903300-522d-11e9-9926-44e4b3c17e0a.png?`} name="NPM" />
                <SkillsBox imagesrc={`https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582158118669-Q3NKUJ85U95E8KF69Z21/node.png?`} name="NODEJS" />
                <SkillsBox imagesrc={`https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582153491403-TQQQKOWFQXA98EW9B9EN/material-design-logo.png?`} name="MATERIAL UI" />
                <SkillsBox imagesrc={Figma} name="FIGMA" />
                <SkillsBox imagesrc={`https://images.squarespace-cdn.com/content/v1/5c34264ac258b4ad37d3fd65/1582158011361-RP18N68DQ255HLMXR3BS/c%2B%2B.png?`} name="C++" />
                <SkillsBox imagesrc={JavaImage} name="JAVA" />
                <SkillsBox imagesrc={VscImage} name="VSC" />

            </div>

            <div className='experience__div'>
                <div data-aos="flip-down" data-aos-duration="1000" className='skills__experience'>
                    <h5>NOV 2022 - FEB 2023</h5>
                    <div>
                        <h4>CertiK FULL STACK DEVELOPER ASSOCIATE/INTERN</h4>
                        <p>[ CertiK, Matrix Team ]</p>
                    </div>
                </div>

                <div data-aos="flip-down" data-aos-duration="1100" className='skills__experience'>
                    <h5>SEP 2021 - MAY 2022</h5>
                    <div>
                        <h4>CUNY TECH PREP FULLSTACK DEVELOPMENT PROGRAM, Fullstack Developer</h4>
                        <p> <a href='https://cunytechprep.nyc/' target="_blank" rel='noreferrer'>[ Cuny Tech Prep ]</a> </p>
                    </div>
                </div>


                <div data-aos="flip-down" data-aos-duration="1200" className='skills__experience'>
                    <h5>APRIL 2021 - JULY 2021</h5>
                    <div>
                        <h4>DEVELOP FOR GOOD, Climate Donor (Remote), Frontend Developer</h4>
                        <p> <a href='https://developforgood.org/' target="_blank" rel='noreferrer'>[ Develop for Good ]</a> </p>
                    </div>
                </div>

                <div data-aos="flip-down" data-aos-duration="1300" className='skills__experience'>
                    <h5>JULY 2020 - SEP 2020</h5>
                    <div>
                        <h4>NYC BLOCKCHAIN CENTER, Software Engineering Internship</h4>
                        <p> [ NYC Blockchain Center ] </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Skills