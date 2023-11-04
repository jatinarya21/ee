import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import partner_1 from '../assets/images/partner_img1.png'
import partner_2 from '../assets/images/partner_img2.png'
import partner_3 from '../assets/images/partner_img3.png'
import partner_4 from '../assets/images/partner_img4.png'
import partner_5 from '../assets/images/partner_img5.png'
import partner_6 from '../assets/images/partner_img6.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section_8() {
      useEffect(() => {
            AOS.init();
      }, [])

      return (
            <div className='pt-5 overflow-hidden'>
                  <section id='section8' className='pt-5 mt-5'>
                        <Container className="container_main py-5 px-lg-5">
                              <Row className='py-5'>
                                    <h2 data-aos="fade-down" className='pb-3 text-center ff-machina fs-46 fw-800 clr-blue'>Ecosystem Partners</h2>
                                    <Col data-aos="fade-right" sm={6} xl={4} className='d-flex justify-content-center  justify-content-md-end  justify-content-xl-center '>
                                          <div className='blue-box mt-5 cursor grayscale_hover shine_hover'>
                                                <img src={partner_1} alt="" className='w-100' />
                                          </div>
                                    </Col>
                                    <Col data-aos="fade-right" sm={6} xl={4} className='d-flex justify-content-center  justify-content-md-start justify-content-xl-center '>
                                          <div className='blue-box mt-5 cursor grayscale_hover shine_hover'>
                                                <img src={partner_2} alt="" className='w-100' />
                                          </div>
                                    </Col>
                                    <Col data-aos="fade-right" sm={6} xl={4} className='d-flex justify-content-center  justify-content-md-end justify-content-xl-center '>
                                          <div className='blue-box mt-5 cursor grayscale_hover shine_hover'>
                                                <img  src={partner_3} alt="" className='w-100 platform_img3' />
                                          </div>
                                    </Col>
                                    <Col data-aos="fade-right" sm={6} xl={4} className='d-flex justify-content-center  justify-content-md-start justify-content-xl-center '>
                                          <div className='blue-box mt-5 cursor grayscale_hover shine_hover'>
                                                <img src={partner_4} alt="" className='w-100' />
                                          </div>
                                    </Col>
                                    <Col data-aos="fade-right" sm={6} xl={4} className='d-flex justify-content-center  justify-content-md-end  justify-content-xl-center '>
                                          <div className='blue-box mt-5 cursor grayscale_hover shine_hover'>
                                                <img src={partner_5} alt="" className='w-100' />
                                          </div>
                                    </Col>
                                    <Col data-aos="fade-right" sm={6} xl={4} className='d-flex justify-content-center  justify-content-md-start justify-content-xl-center '>
                                          <div className='blue-box mt-5 cursor grayscale_hover shine_hover'>
                                                <img src={partner_6} alt="" className='w-100' />
                                          </div>
                                    </Col>


                                    <span className='text-center py-5'>
                                          <h2 className='section8-btn fill-hover d-inline-block clr-blue  fs-16 ff-raleway fw-600 cursor'>More To Be Announced</h2>
                                    </span>
                              </Row>
                        </Container>
                  </section>
            </div>
      )
}

export default Section_8