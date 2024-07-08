import React from 'react'
import './aboutus.css'

function Aboutus() {
    return (
        <>
            <section className='section-white'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-md-12 text-center'>
                            <h2 className='section-title'>
                                The Team behind Eve
                            </h2>
                        </div>

                        <div className='col-sm-6 col-md-3 wrap'>
                            <img src="./anshu.jpg" />
                            <div class="text">
                                <h3>Anshita Kushwaha</h3>
                                <p>Developer</p>
                                <p>Skilled in developing scalable web appilcation and implementing innovative solutions to complex problems.</p>
                                <a href="https://www.linkedin.com/in/shreyaagnihotri29" target="_blank">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-3 wrap'>
                            <img src="./shreyas.jpg" />
                            <div class="text">
                                <h3>Shreya Agnihotri</h3>
                                <p>Founder</p>
                                <p>Visionary founder committed to crafting exceptional websites that captivate audiences, merging creativity with strategic insight to deliver unforgettable user experiences.</p>
                                <a href="https://www.linkedin.com/in/shreyaagnihotri29" target="_blank">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>

                        <div className='col-sm-6 col-md-3 wrap'>
                            <img src="./mahicas.jpg" />
                            <div class="text">
                                <h3>Mahendra Dabi</h3>
                                <p>Designer</p>
                                <p>Skilled designer adept at crafting visually stunning websites with a keen eye for detail and a passion for intuitive user experiences.</p>
                                <a href="https://www.linkedin.com/in/shreyaagnihotri29" target="_blank">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>


                    </div>

                </div>

            </section>
        </>
    )
}

export default Aboutus