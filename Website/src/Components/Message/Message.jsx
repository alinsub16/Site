import React ,{ useEffect }from 'react'
import './Message.css'
import Form from '../Form/Form'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Message = () => {
  useEffect(()=>{
    AOS.init({duration:1000,offset: 50})
  },[])
  return (
    <>
      <section className='Message_Container'>
        <div className='form_container'>
          <Form />
        </div>
        <div className='Accounts_container'>
            <h3 data-aos="zoom-in">Message me in my accounts</h3>
            <ul>
              <li data-aos="zoom-in"><a href="https://www.facebook.com/christopher.alinsub" target="_blank">Facebook</a></li>
              <li data-aos="zoom-in"><a href="https://www.linkedin.com/in/christopher-alinsub-08959927b/" target="_blank">Link in</a></li>
              <li data-aos="zoom-in">Gmail: alinsubtopher16@gmail.com</li>
              <li data-aos="zoom-in">Mobile Number: 09652831972</li>
            </ul>
        </div>

      </section>
    </>
  )
}

export default Message