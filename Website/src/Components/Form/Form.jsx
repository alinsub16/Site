import React from 'react'
import './Form.css'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = () => {
    useEffect(()=>{
        AOS.init({duration:1000})
      },[])
    const Submit = () =>{
        alert('Opps!!! This feature is not avilable, please messages me in my accounts. Thank you!')
       
    }
    return (
        <>
            <div className="form-container">
                <form className="form" onSubmit={Submit}>
                    <div className="form-group">
                        <label for="email" data-aos="zoom-in">Company Email</label>
                        <input required="" name="email" id="email"  type="text"/>
                    </div>
                    <div className="form-group">
                        <label for="textarea" data-aos="zoom-in">How Can I Help You?</label>
                        <textarea required="" cols="50" rows="10" id="textarea"  name="textarea"> </textarea>
                    </div>
                    <button type="submit"  className="form-submit-btn">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form