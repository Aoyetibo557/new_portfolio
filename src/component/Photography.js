import React, {useEffect} from 'react';
import './Photography.css';
import ImageOne from '../images/ImageOne.JPG';
import ImageTwo from '../images/ImageTwo.JPG';
import ImageThree from '../images/ImageThree.JPG';
import ImageFour from '../images/ImageFour.jpg';
import imageFive from '../images/ImageFive.jpg';
import ImageSix from '../images/ImageSix.jpg';
import ImageSeven from '../images/ImageSeven.JPG';
import ImageEight from '../images/ImageEight.JPG'
import ImageNine from '../images/ImageNine.JPG';
import ImageTen from '../images/ImageTen.jpg';
import ImageEleven from '../images/ImageEleven.JPG';

import Footer from './Footer';
import Aos from 'aos'
import 'aos/dist/aos.css';


function Photography() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease'
        })
    }, [])
    return (
        <div className="photography">
           <div className="photography__container">
                <img data-aos ="zoom-in-left" data-aos-duration="1500" className="photography__img" src={ImageOne} alt="" />
                <img data-aos ="zoom-in-right" data-aos-duration="2000" className="photography__img" src={ImageFour} alt="" />
                <img data-aos ="zoom-in-left" data-aos-duration="2500" className="photography__img" src={imageFive} alt="" />
                <img data-aos ="zoom-in-right" data-aos-duration="3000" className="photography__img" src={ImageTwo} alt="" />
                <img data-aos ="zoom-out" data-aos-duration="3500" className="photography__img" src={ImageThree} alt="" />
                <img data-aos ="zoom-in-up" data-aos-duration="4000" className="photography__img" src={ImageSix} alt="" />
                <img data-aos ="zoom-in-down" data-aos-duration="4500" className="photography__img" src={ImageSeven} alt="" />
                <img data-aos ="flip-right" data-aos-duration="5000" className="photography__img" src={ImageEight} alt="" />
                <img data-aos ="flip-left" data-aos-duration="5500" className="photography__img" src={ImageNine} alt="" />
                <img data-aos ="fade-down-right" data-aos-duration="1500" className="photography__img" src={ImageTen} alt="" />
                <img data-aos ="fade-left" data-aos-duration="1500" className="photography__img" src={ImageEleven} alt="" />

           </div>

            <Footer />

        </div>
    )
}

export default Photography
