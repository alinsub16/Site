import React, {useEffect} from "react";
import "./Skills.css";
import Accordion from "../../Components/Accordion/Accordion";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <>
      <section className="Skills_container d-flex justify-content-center align-items-center ">
         
        <div className="col-11 d-flex justify-content-center align-items-center skills mt-3" data-aos="zoom-in">
          <Accordion />
        </div>
      </section>
    </>
  );
};

export default Skills;
