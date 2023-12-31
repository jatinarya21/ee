import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header_logo from '../assets/images/header_logo.png'
import vector from '../assets/images/hero_vector.png'
import cartoon_bg from '../assets/images/hero_cartoonbg.png'
import hero_cartoon from "../assets/images/hero_cartoon.png"
import hero_cartoon_sm from '../assets/images/hero_cartoon_sm.png'
import hero_vector_sm from '../assets/images/hero_bg_sm.png'
import menu_bar from '../assets/images/menu-icon.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import bluedots from '../assets/images/hero-dots.png'

function Hero_Section() {
    const [show, setShow] = useState(false);
    if (show === true) {
        document.body.classList.add("overflow-hidden");
    }
    else {
        document.body.classList.remove("overflow-hidden")
    };
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='overflow-hidden'>
            <section id='home' className='position-relative  mvh-100 hero_sm_bg '>
                <img className='position-absolute bluedots d-none d-lg-block' src={bluedots} alt="" />
                <img className='bg_vector_sm  w-100 d-lg-none' src={hero_vector_sm} alt="" />
                <img className='bg_vector d-none d-lg-block' src={vector} alt="" />
                <img className='bg_cartoon d-none d-lg-block' src={cartoon_bg} alt="" />
                <Container className='container_main' >
                    <nav className='d-flex  align-items-center justify-content-between position-relative z-3 pt-3 '>
                        <a href=""><img src={Header_logo} alt="" /></a>
                        <ul className={show ? "open" : ""}>
                            <li><a onClick={() => { setShow(!show); }} href="#ho" className='ff-raleway fs-16 fw-500 '>About</a></li>
                            <li><a onClick={() => { setShow(!show); }} href="#sectio" className='ff-raleway fs-16 fw-500 '>IBO Event</a></li>
                            <li><a onClick={() => { setShow(!show); }} href="#sectio" className='ff-raleway fs-16 fw-500 '>EEFI Tokenomics</a></li>
                            <li><a onClick={() => { setShow(!show); }} href="#sectio" className='ff-raleway fs-16 fw-500 '>Team</a></li>
                            <li><a onClick={() => { setShow(!show); }} href="secti8" className='ff-raleway fs-16 fw-500 '>Partners</a></li>
                            <li><a onClick={() => { setShow(!show); }} href="#secti9" className='ff-raleway fs-16 fw-500 '>Roadmap</a></li>
                            <li><select id="colorSelect"onClick={() => { setShow(!show); }} >
                                     <option value="red" className='ff-ralway clr-white fs-16 fw-500 nav-hover list-style'>More</option>
                                     <option value="blue" className='ff-ralway clr-white fs-16 fw-500 nav-hover list-style'>Partners</option>
                                     <option value="green" className='ff-ralway clr-white fs-16 fw-500 nav-hover list-style'>Roadmap</option>
                                     <option value="yellow" className='ff-ralway clr-white fs-16 fw-500 nav-hover list-style'>Team</option>
                                 </select></li>
                        </ul>
                        <div className=' ms-auto me-3 ms-lg-0 me-lg-0 openme'>
                            <button className=' d-block d-lg-none border-0 bg-transparent' onClick={() => { setShow(!show); }} >
                                <img src={menu_bar} alt="" />
                            </button>
                        </div>
                        <button className='nav-btn d-none d-lg-block openme ff-raleway fs-16 fw-400 fill-hover'>Enter App</button>
                    </nav>

                    <Row className='position-relative z-1 justify-content-md-center pt-xxl-5'>
                        <Col data-aos="fade-right" md={12} lg={6} className='hero_pt'>
                            <h1 className='text-white text-center text-lg-start text-uppercase ff-machinaregular pt-3  pt-md-5  fs-85'>Building elastic Protocol</h1>
                            <p className='ff-raleway text-center text-lg-start  text-white w-hero  fs-16 pt-2'>An ecosystem of unique yield strategies that help you earn yield, amplify, and stretch it across all market conditions</p>
                            <h2 className='ff-raleway text-center text-lg-start text-white fs-18 text-decoration-underline pt-2'>Audited by Omniscia</h2>
                        </Col>
                        <Col data-aos="fade-left" md={8} lg={6} className='d-flex justify-content-center'>
                            <img className='hero_cartoon d-none d-lg-block' src={hero_cartoon} alt="" />
                            <img className='w-100 hero_cartoon_sm d-lg-none' src={hero_cartoon_sm} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Hero_Section