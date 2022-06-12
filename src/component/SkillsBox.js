import React, {useEffect} from 'react';
import "./SkillsBox.css";
import AOS from "aos";
import "aos/dist/aos.css"



function SkillsBox({name, imagesrc}) {
    useEffect(()=>{
      AOS.init({
          easing: "ease-in",
          duration: "1000"
      })
    }, [])

  return (
    <div className='skillbox'>
        <div data-aos="zoom-in" data-aos-duration="1300" className='skillbox__img__div'>
            <img className='skillbox__img' src={imagesrc} alt={name} />
        </div>
        <p>{name}</p>
    </div>
  )
}

export default SkillsBox