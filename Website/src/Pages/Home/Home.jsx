import React from 'react'

import './Home.css';
import img1 from '../../assets/top.png'
import { FaFacebookSquare, FaLinkedin, FaFileDownload, } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";


const Home = () => {

  return (
    <>
      <div className='Container Home'>
        <div class="custom-shape-divider-bottom-1706004118">
         
        </div>
        <div className='Inner_Conatoiner'>
          <div className='Name_Container'>
            <h2>Hi I'm <MdWavingHand className='shake-lr' color='yellow' /> </h2>
            <h1 className='Name'>
              <span>C</span>
              <span>H</span>
              <span>R</span>
              <span>I</span>
              <span>S</span>
              <span>T</span>
              <span>O</span>
              <span>P</span>
              <span>H</span>
              <span>E</span>
              <span>R</span>
              <span>&nbsp;</span>
              <span>A</span>
              <span>L</span>
              <span>I</span>
              <span>N</span>
              <span>S</span>
              <span>U</span>
              <span>B</span>
          
            </h1>
            <p className='Aspiring'>Aspiring Web <span className='flicker-1 '>developer</span></p>
            <div className='sub_container'>
              <div className='icon_container' >
                <div>
                <a href="https://www.facebook.com/christopher.alinsub" target='_blank'><FaFacebookSquare size='1.5rem' color='darkblue' hover='green' className='icon' /></a>
                </div>
                <div>
                <a href="https://www.linkedin.com/in/christopher-alinsub-08959927b/" target='_blank'><FaLinkedin size='1.5rem' color='darkblue' className='icon' /></a>
                </div>
              </div>
              <div className='resume_container'>
                <h6>CV <a href="" download={'../../assets/Latest-Resume1.docx'}><FaFileDownload size='1rem' color='beige' /></a></h6>
              </div>
            </div>
          </div>
          <div className='Imgame_container'>
            <img src={img1} alt="Error" />

          </div>
        </div>
      </div>
    </>
  )
}

export default Home