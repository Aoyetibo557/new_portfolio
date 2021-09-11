import React from 'react';
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
import Footer from './Footer';



function Project() {
    return (
        <div className="project">
            <img className="project__img" src={ProjectImage} alt="" />
            <div className=" project__container">
               <ProjectBox 
                    src = {SpotifyClone}
                    title="Spotify Clone"
                    descp="Spotify clone built with ReactJs and firebase."
                    srcCode="https://github.com/Aoyetibo557/React-spotify-clone"
                    link="https://spotify-clone-142dc.web.app/"
                /> 

                <ProjectBox 
                    src = {AmazonImage}
                    title="Amazon Clone"
                    descp="Responsive Amazon clone built with ReactJs and firebase. Used Firebase Authentication for user login and signup."
                    srcCode="https://github.com/Aoyetibo557/React-Amazon-Clone"
                    link="https://clone-9fd28.web.app/"
                /> 

                <ProjectBox 
                    src = {TodoImage}
                    title="Todo App"
                    descp="CRUD App built with react js, and hosted on heroku."
                    srcCode="https://github.com/Aoyetibo557/React-Todo-App"
                    link="https://reactbuildpack-todo-app.herokuapp.com/"
                /> 

                <ProjectBox 
                    src = {NetflixImage}
                    title="Netflix Clone"
                    descp="Netflix Clone built with ReactJs using MovielistDb API, and hosted on firebase."
                    srcCode="https://github.com/Aoyetibo557/Netflix-Clone"
                    link="https://netflix-clone-ad612.web.app/"
                />

                <ProjectBox 
                    src = {VintageCar}
                    title="Vintage Car Website"
                    description="Dynamic and Responsive website, built with HTML, CSS and JS. "
                    srcCode="https://github.com/Aoyetibo557/creative-page"
                    link="https://vintage-car.herokuapp.com/index.html"
                />

                <ProjectBox 
                    src = {SlackClone}
                    title="Slack Clone"
                    description="Slack clone app built with reactJs and hosted on firebase, with google authentication."
                    srcCode="https://github.com/Aoyetibo557/Slack_Clone"
                    link="https://slack-clone-c0e20.web.app/"
                />

                <ProjectBox 
                    src = {HuluClone}
                    title="Hulu Clone App"
                    description="Responsive Web Clone app of the Hulu Streaming Service, using ReactJs, TMDB API and Firebase google authentication and hosting."
                    srcCode="https://github.com/Aoyetibo557/Hulu_Clone"
                    link="https://hulu-clone-304e7.web.app/"
                /> 

                <ProjectBox 
                    src = {RockPaperSissorsImage}
                    title="Rock Paper Scissors Web Game"
                    descp="Mini web game of the popular game, rock paper and scissors, built with HTML, CSS and JS. Hosted on heroku."
                    srcCode="https://github.com/Aoyetibo557/Rock-Paper-Scissors"
                    link="https://rps-gameapp.herokuapp.com/"
                /> 

                <ProjectBox 
                    src = {BookmartImage}
                    title="Bookmart Website"
                    descp="Mini web store where students can purchase books at a discounted price. CSC 226 Final Project, built with HTML, CSS and JS."
                    srcCode="https://github.com/Aoyetibo557/Csc-226-Final-Project-BookMart-"
                    link=""
                />
            </div>

            <Footer />
        </div>
    )
}

export default Project
