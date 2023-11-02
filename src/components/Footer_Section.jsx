import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import footer_logo from '../assets/images/footer_logo.png'
import icon1 from '../assets/images/yt-icon.png'
import icon2 from '../assets/images/icon-2.png'
import icon3 from '../assets/images/icon-3.png'
import icon4 from '../assets/images/icon-4.png'
import icon5 from '../assets/images/icon-5.png'
import icon6 from '../assets/images/icon-6.png'
import icon7 from '../assets/images/icon-7.png'
import icon8 from '../assets/images/icon-8.png'
import icon9 from '../assets/images/icon-9.png'

function Footer_Section() {
    return (
        <div className='overflow-hidden'>
            <section className='py-4'>
                <Container className='py-5'>
                    <div className='d-flex  justify-content-center pb-2'>
                        <img className='cursor' src={footer_logo} alt="" />
                    </div>
                
                        <h2  className='text-center clr-blue fs-16 ff-raleway fw-500 cursor '>Join Our Community</h2>
                    <ul className='d-flex gap-3 justify-content-center pt-3 list-unstyled flex-wrap'>
                        <li><a className='text-dark ff-raleway fs-16 fw-500 bold_hover text-decoration-none opacity-75' href="">About</a></li>
                        <li><a className='text-dark ff-raleway fs-16 fw-500 bold_hover text-decoration-none opacity-75' href="">IBO Event</a></li>
                        <li><a className='text-dark ff-raleway fs-16 fw-500 bold_hover text-decoration-none opacity-75' href="">EEFI Tokenomics</a></li>
                        <li><a className='text-dark ff-raleway fs-16 fw-500 bold_hover text-decoration-none opacity-75' href="">Team</a></li>
                        <li><a className='text-dark ff-raleway fs-16 fw-500 bold_hover text-decoration-none opacity-75' href="">Roadmap</a></li>
                        <li><a className='text-dark ff-raleway fs-16 fw-500 bold_hover text-decoration-none opacity-75' href="">Partners</a></li>
                        <li><a className='text-dark ff-raleway fs-16 fw-500 bold_hover text-decoration-none opacity-75' href="">Contact Us</a></li>
                    </ul>
                    <ul className='d-flex flex-wrap justify-content-center gap-3 pt-3 list-unstyled'>
                        <a href="">
                            <li><img className='scale_hover' src={icon1} alt="" /></li>
                        </a>
                        <a href="">
                            <li><img className='scale_hover' src={icon2} alt="" /></li>
                        </a>
                        <a href="">
                            <li><img className='scale_hover' src={icon3} alt="" /></li>
                        </a>
                        <a href="">
                            <li><img className='scale_hover' src={icon4} alt="" /></li>
                        </a>
                        <a href="">
                            <li><img className='scale_hover' src={icon5} alt="" /></li>
                        </a>
                        <a href="">
                            <li><img className='scale_hover' src={icon6} alt="" /></li>
                        </a>
                        <a href="">
                            <li><img className='scale_hover' src={icon7} alt="" /></li>
                        </a>
                        <a href="">
                            <li><img className='scale_hover' src={icon8} alt="" /></li>
                        </a>
                        <a href="">
                            <li><img className='scale_hover' src={icon9} alt="" /></li>
                        </a>
                    </ul>
                </Container>
            </section>
            <section className='last_footer py-3'>
                <Container className=''>
                    <h2 className='ff-raleway fs-14 opacity-75'>@Copyright 2023</h2>
                </Container>
            </section>
        </div>
    )
}

export default Footer_Section