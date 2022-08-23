import React, {useState} from 'react';
import './Project.css';
import ProjectImage from '../images/bg5.svg'
import ProjectBox from './ProjectBox';
import SpotifyClone from '../images/spotifyClone.JPG';
import AmazonImage from '../images/amazonClone.JPG';
import TodoImage from '../images/todoApp.JPG';
import NetflixImage from '../images/netflixClone.JPG';
import VintageCar from '../images/vintage-car.JPG';
import SlackClone from '../images/slackClone.JPG';
import HuluClone from '../images/HuluClone.JPG';
import RockPaperSissorsImage from '../images/rps.png';
import BookmartImage from '../images/bkR.PNG';
import FoodyImage from "../images/Foody.JPG";
import AdviceGenImage from "../images/myDesign.JPG";
import PetlandImage from "../images/Petland.JPG";
import AirBnBImage from "../images/airbnbClone.JPG";
import CryptoioImage from "../images/cryptoio.JPG";
import Footer from './Footer';



function Project() {
    return (
        <div className="project">
            <div className='project__img__div'>
                <img className="project__img" src={ProjectImage} alt="" />
            </div>
            <div className=" project__container">

                <ProjectBox 
                    src = {CryptoioImage}
                    title="CryptoIO"
                    descp="Full Stack Web Application. That consumes an API to display the current price of Some crypto currencies."
                    srcCode="https://github.com/Aoyetibo557/cryptoio"
                    link="https://cryptoio.vercel.app/"
                    tag1="ReactJs, CSS, JS"
                    tag2= "Mobile Responsive"
                    tag3 = "Fullstack App, API"
                />

                <ProjectBox 
                    src = {AirBnBImage}
                    title="AirBnB Landing Page Clone"
                    descp="Airbnb landing page simple clone."
                    srcCode="https://github.com/Aoyetibo557/Airbnb-landingpage-clone"
                    link="https://airbnb-landingpage-clone.vercel.app/"
                    tag1="ReactJs"
                    tag2= "Responsive"
                    tag3 = "Clone App"
                />
               <ProjectBox 
                    src = {AdviceGenImage}
                    title="Advice Generator"
                    descp="Mini web application that uses advice.com api to generate random advice. Frontend Mentor Challenge"
                    srcCode="https://github.com/Aoyetibo557/Advice-Generator-FrontendMentor-"
                    link="https://advice-gen-jezw2njji-aoyetibo557.vercel.app/"
                    tag1="ReactJs"
                    tag2= "Adive.com API"
                    tag3 = "CSS"
                />

                <ProjectBox 
                    src = {PetlandImage}
                    title="Petland"
                    descp="Pet adoption agency websiteand portal. If you want to adopt a pet you answer a series of questions to find the best possible match."
                    srcCode="https://github.com/Aoyetibo557/petland"
                    link=""
                    tag1="ReactJs"
                    tag2= "Fierbase"
                    tag3 = "JSON"
                />

                <ProjectBox 
                    src = {HuluClone}
                    title="Hulu Clone App"
                    description="Responsive Web Clone app of the Hulu Streaming Service, using ReactJs, TMDB API and Firebase google authentication and hosting."
                    srcCode="https://github.com/Aoyetibo557/Hulu_Clone"
                    link="https://hulu-clone-304e7.web.app/"
                    tag1="Firebase AUTH"
                    tag2= "ReactJs"
                    tag3 = "TMDB API"
                /> 

                <ProjectBox 
                    src = {FoodyImage}
                    title="African Market"
                    descp="Responsive web store for an african market/shop. With a administration portal"
                    srcCode="https://github.com/Aoyetibo557/foody-web-app"
                    link=""
                    tag1="ReactJs"
                    tag2= "Firebase Auth"
                    tag3 = "CSS"
                />

               <ProjectBox 
                    src = {AmazonImage}
                    title="Amazon Clone"
                    descp="Responsive Amazon clone built with ReactJs and firebase. Used Firebase Authentication for user login and signup."
                    srcCode="https://github.com/Aoyetibo557/React-Amazon-Clone"
                    link="https://clone-9fd28.web.app/"
                    tag1="ReactJs"
                    tag2= "Firebase Auth"
                    tag3 = "CSS"
                /> 
               
               <ProjectBox 
                    src = {SpotifyClone}
                    title="Spotify Clone"
                    descp="Spotify clone built with ReactJs and firebase."
                    srcCode="https://github.com/Aoyetibo557/React-spotify-clone"
                    link="https://spotify-clone-142dc.web.app/"
                    tag1="ReactJs"
                    tag2= "Firebase"
                    tag3 = "API"
                /> 

                <ProjectBox 
                    src = {NetflixImage}
                    title="Netflix Clone"
                    descp="Netflix Clone built with ReactJs using MovielistDb API, and hosted on firebase."
                    srcCode="https://github.com/Aoyetibo557/Netflix-Clone"
                    link="https://netflix-clone-ad612.web.app/"
                    tag1="Javascript"
                    tag2= "ReactJs"
                    tag3 = "Netflix API"
                />

                

                <ProjectBox 
                    src = {TodoImage}
                    title="Todo App"
                    descp="CRUD App built with react js, and hosted on heroku."
                    srcCode="https://github.com/Aoyetibo557/React-Todo-App"
                    link="https://reactbuildpack-todo-app.herokuapp.com/"
                    tag1="ReactJs"
                    tag2= "HTML"
                    tag3 = "CSS"
                /> 

                <ProjectBox 
                    src = {VintageCar}
                    title="Vintage Car Website"
                    description="Dynamic and Responsive website, built with HTML, CSS and JS. "
                    srcCode="https://github.com/Aoyetibo557/creative-page"
                    link="https://vintage-car.herokuapp.com/index.html"
                    tag1="HTML"
                    tag2= "CSS"
                    tag3 = "JavaScript"
                />

                <ProjectBox 
                    src = {SlackClone}
                    title="Slack Clone"
                    description="Slack clone app built with reactJs and hosted on firebase, with google authentication."
                    srcCode="https://github.com/Aoyetibo557/Slack_Clone"
                    link="https://slack-clone-c0e20.web.app/"
                    tag1="ReactJs"
                    tag2= "Firebase"
                    tag3 = "Javascript"
                />


                <ProjectBox 
                    src = {RockPaperSissorsImage}
                    title="Rock Paper Scissors Web Game"
                    descp="Mini web game of the popular game, rock paper and scissors, built with HTML, CSS and JS. Hosted on heroku."
                    srcCode="https://github.com/Aoyetibo557/Rock-Paper-Scissors"
                    link="https://rps-gameapp.herokuapp.com/"
                    tag1="HTML"
                    tag2= "Javascript"
                    tag3 = "CSS"
                /> 

                <ProjectBox 
                    src = {BookmartImage}
                    title="Bookmart Website"
                    descp="Mini web store where students can purchase books at a discounted price. CSC 226 Final Project, built with HTML, CSS and JS."
                    srcCode="https://github.com/Aoyetibo557/Csc-226-Final-Project-BookMart-"
                    link=""
                    tag1="HTML"
                    tag2= "Javascript"
                    tag3 = "CSS"
                />
                   
            </div>

            <Footer />
        </div>
    )
}

export default Project
