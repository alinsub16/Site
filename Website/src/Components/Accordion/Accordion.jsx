import React from 'react'
import './Acordion.css'

const Accordion = () => {

    return (
        <>
            <div class="accordion col-10  accordion-flush" id="accordionFlushExample">
                <div class="accordion-item" >
                    <h2 class="accordion-header  bg-black">
                        <button class="accordion-button button-color collapsed border-2 border-top  border-black shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Technical skills
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ul>
                                - Programing languages(JavaScript ,Java, Python, Html, Css, ) <br />
                                - Frameworks and libraries(React Js , Basic in Node Js , Basic in Express Js  and Bootstrap ) <br />
                                - IDE(Visual Studio Code ,Py Charm , NetBeans)<br />
                                <br />
                                - Still learning: React Js , Node Js , Express Js and Mongo db
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header ">
                        <button class="accordion-button collapsed  button-color border-2 border-top border-black shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Personal skills
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            - Problem-solving <br />
                            - Strong attention to detail <br />
                            - Team collaboration <br />
                            - Adaptability and quick learner <br />
                            - Good communication skills
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button  button-color collapsed border-2 border-top border-bottom border-black shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Projects
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            - Visit my GitHub account <br/>
                            <a href="https://github.com/alinsub16" target='_blank'>https://github.com/alinsub16</a> <br/>
                            
                            - My first Website (Html,Css,Js) – Not updated <br/>
                            <a href="https://alinsub16.github.io/personalwebsite/index/me.html" target='_blank'>Website</a>
                            <br/>
                            - CRUD Operation (MERN Stack ,Axios and Bootstrap)-Just to perform Crud Operation no validation <br/>
                            <a href="https://github.com/alinsub16/CRUD-MERN.git" target='_blank'>CRUD APP</a>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed border-2 button-color border-bottom border-black shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                            Experience
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <h3>Internship</h3>
                            <li>Customer service_Chat support - 3 months</li>
                            <h3>Work Experience</h3>
                            <li>Customer Service Representative - 6 Months</li>

                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Accordion