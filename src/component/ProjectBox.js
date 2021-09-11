import React, { useEffect } from 'react';
import './ProjectBox.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectBox({src, title, link, srcCode, descp}) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in'
        })
    },[])
    return (
        <div data-aos="zoom-in" data-aos-duration="1500" className="projectbox">
            <img className="projectbox__image" src={src} alt={title} />
            <div className="projectbox__info">
                <p className="projectbox__title" >{title}</p>
                <p className="projectbox__description">{descp}</p>
                <div className="projectbox__links">
                    {srcCode === "" ? '' : <p><a className="projectbox__link" href={srcCode} rel="noreferrer" target="_blank" >Source Code</a></p>}
                    {link === "" ? '' : <p><a className="projectbox__link" href={link} rel="noreferrer" target="_blank" >View Live</a></p>}

                </div>
            </div>
        </div>
    )
}

export default ProjectBox
