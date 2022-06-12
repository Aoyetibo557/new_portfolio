import React from 'react';
import './Resume.css';
import { IoPerson } from 'react-icons/io5';
import { VscHistory } from 'react-icons/vsc';
import { FaGraduationCap, FaChartBar } from 'react-icons/fa';
import Footer from './Footer';
import LinearProgress from '@material-ui/core/LinearProgress';
import pdf from '../docs/Anuoluwapo-Technical Resume(2022).pdf';

function Resume() {
    return (
        <div className="resume">
            {/* <h4 className="resume__h4">Resume</h4> */}

            <div className="resume__top">
                <h5>Anuoluwapo Oyetibo</h5>
                <p>Front End Software Developer</p>
            </div>

            <section className="resume__section">
                <article className="resume__article">

                    <div className="article__div">
                        <h4 className="article__title"> <span> <IoPerson /> </span> Profile</h4>
                        <p>
                            Aspiring and Passionate Frontend & software developer, seeking a fulltime oppurtunity
                            in a creative and welcoming space.
                        </p>
                    </div>

                    <div className="article__div">
                        <h4 className="article__title"> <span> <VscHistory /> </span> Internships History </h4>
                        <div>
                            <h5>CUNY TECH PREP, Fullstack Developer, Remote </h5>
                            <p className="article__div-p">September 2021 - Present</p>

                            <ul className="article__ui">
                                <li>Learning from top tech industry proffessionals about web development and other do's and don'ts of web development.</li>
                                <li>Weekly projects/assignments were assigned to build and develop skills as a developer. </li>
                                <li>Collaborated as part of a team to develop final project for a showcase at term end.</li>
                            </ul>
                        </div>

                        <div>
                            <h5>Frontend Developer at Develop for Good, Remote</h5>
                            <p className="article__div-p">April 2021 - July 2021</p>

                            <ul className="article__ui">
                                <li>Collaborated with a team of developers and designers to  build a web application for a non-profit called Climate Donor, using NextJs as the main framework and Firebase as the backend.</li>
                                <li>Assigned bi-weekly tasks by the program manager, making sure each voluteer developer had a feasible task for the week.</li>
                                <li>Gained a comfortable knowledge of NextJs and Ant Design. </li>
                            </ul>
                        </div>

                        <div>
                            <h5>Software Engineering Intern, Brooklyn, NYC </h5>
                            <p className="article__div-p">June 2020 - September 2020</p>
                        </div>
                    </div>

                    <div className="article__div">
                        <h4 className="article__title"> <span> <FaGraduationCap /> </span> Education</h4>
                        <h5>Computer Science, CUNY-College of Staten Island, NYC</h5>
                        <p className="article__div-p">August 2017 - December 2021</p>

                        <ul className="article__ui" >
                            <li>Computer science degree with a focus on web developmentand design.</li>
                        </ul>
                    </div>

                    <div className="article__div">
                        <h4 className="article__title"> <span> <FaChartBar /> </span> Association & Intrests</h4>
                        <ul className="article__ui">
                            <li><span>Cuny Tech Incubator</span>, September 2019 - November 2020 </li>
                            <li><span>ColorStack</span>, January 2020 - Present </li>
                            <li><span>Interests:</span>, Photography, Music, Video games</li>
                        </ul>
                    </div>


                </article>

                <article className="article__right">
                    <div>
                        <h4>Details</h4>
                        <a href="mailto: aoyetibo@gmail.com">aoyetibo@gmail.com</a>
                    </div>

                    <div>
                        <h4>Links</h4>
                        <a href="https://www.github.com/aoyetibo557" target="_blank" rel="noreferrer" >Github</a>
                        <a href="https://www.linkedin.com/in/anuoluwapo-oyetibo" target="_blank" rel="noreferrer" >LinkedIn</a>
                    </div>

                    <div>
                        <h4>Skills</h4>
                        <p>
                            <span>HTML/CSS3/JavaScript</span>
                            <span>
                                <LinearProgress variant="determinate" value="88" />
                            </span>
                        </p>

                        <p>
                            <span>NodeJs</span>
                            <span>
                                <LinearProgress variant="determinate" value="78" />
                            </span>
                        </p>

                        <p>
                            <span>Java</span>
                            <span>
                                <LinearProgress variant="determinate" value="65" />
                            </span>
                        </p>

                        <p>
                            <span>C++</span>
                            <span>
                                <LinearProgress variant="determinate" value="80" />
                            </span>
                        </p>

                         <p>
                            <span>ReactJs</span>
                            <span>
                                <LinearProgress variant="determinate" value="75" />
                            </span>
                        </p>
                    </div>

                    <div>
                        <h4>Hobbies</h4>
                        <p>Photography</p>
                        <p>Video Games</p>
                        <p>Music</p>
                    </div>

                    <div>
                        <h4>Languages</h4>
                        <p>
                            <span>Yoruba</span>
                            <span>
                                <LinearProgress variant="determinate" value="95" />
                            </span>
                        </p>
                    </div>
                </article>
            </section>

            <div>
                <a href={pdf} target="_blank" rel="noreferrer" >Download PDF Version</a>
            </div>

            <Footer />
        </div>
    )
}

export default Resume
