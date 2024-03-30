import React, { useEffect } from 'react'
import './About.css'
import img2 from '../../assets/topher.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <>
      <section className='About_Container'>
        <div className='Picture_container' data-aos='zoom-in-right'>
          <img src={img2} alt="Error" />
        </div>
        <div className='Aboutme_container '>
          <div className='Aboutme_container_header '>
            <h4 data-aos="fade-down">About Me</h4>
          </div>
          <div>
            <p data-aos="zoom-in">
              Hello, I'm Christopher Alinsub, I took Bachelor of Science in Computer Engineering, where I gained a knowledge in some programming languages.
              As a self-motivated individual, I pursued web development through self-study and hands-on projects.
              My core skills lie in web development either Front end or Back end, but I excel in creating visually appealing interfaces.
              Through personal projects, I have built responsive personal websites, Crud Operation using MERN and many more just to showcasing my ability . Beyond my passion for web development,
              I enjoy staying active and exploring the great outdoors. Whether it's playing some sports and dancing, I find that these activities refresh my creativity and focus.

            </p>

          </div>
        </div>
      </section>
    </>
  )
}

export default About