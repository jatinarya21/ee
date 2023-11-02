import React, {useEffect} from 'react'
import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import card_img from '../assets/images/card_img.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section_3() {
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // dotsClass:button_bar,
    };
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='overflow-hidden' >
            <section id='home' className='section_3bg pt-4'>
                <Container className='pt-5 container_main'>
                    <h2   data-aos="fade-down" className='text-white ff-machina fs-46 fw-900 pb-2 mt-4 text-center pt-5'>Core Strategies</h2>
                    <p  data-aos="fade-down"  className='text-white section_3para fs-16 ff-raleway text-center pb-5'>Our initial strategies use powerful burgeoning trends like Real Yield, Rebase, and others to generate cutting-edged yield innovations. These yield strategies stretch beyond the drought in stable coins and set the value for our native protocol token $EEFI. Check them out!'</p>
                    <Slider {...settings}>
                        <Row data-aos="fade-down" className='d-flex align-items-center '>
                            <h1 className='card_bgtext'>$AMPL</h1>
                            <Col md={12} lg={7} xl={7} className='d-flex justify-content-center z-1' >
                                <div className="card_main position-relative overflow-hidden">
                                    <div className="card_elipse1"></div>
                                    <div className="card_elipse2"></div>
                                    <h2 className='card_innovation'>Innovation</h2>
                                    <img className='mx-auto' src={card_img} alt="" />
                                    <div className='d-flex  justify-content-between'>
                                        <p className='text-white opacity-75 fs-16 fw-400'>Projected Yield (APY)</p>
                                        <p className='clr-blue fs-16 fw-700 ff-inter'>7,777,777%</p>
                                    </div>
                                    <div className='d-flex  justify-content-between pt-2'>
                                        <p className='text-white opacity-50 fs-16 ff-raleway'>Current Deposits</p>
                                        <p className='text-white fs-16 ff-inter fw-500'>0.00 AMPL</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} lg={5} xl={5} className='d-flex flex-column justify-content-end pt-md-5'>
                                <h2 className=' text-white fs-38 fw-400  ff-machina pt-3 pb-3'>Elastic Vault</h2>
                                <p className=' text-white fs-22 fw-500 ff-raleway pb-2'>Deposit Token</p>
                                <p className=' text-white opacity-50 fs-16 fw-400 ff-raleway pb-2'> $AMPL</p>
                                <h2 className=' text-white  fs-22 fw-500 ff-raleway pb-2'>Flagship Hedging Strategy</h2>
                                <p className=' text-white opacity-50 fs-16 fw-400 ff-raleway pb-2'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className=' fs-16 text-white opacity-50 fw-400 ff-raleway pb-2'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                <p className='text-white ff-rlaeway  fs-16 fw-400  opacity-50 pb-2 d-lg-none'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                                <ul>
                                    <p className='text-white ff-raleway  fs-16 fw-400 opacity-50 pb-2 d-lg-none'>1. Initially utilizes both OG rebase tokens $AMPL and $OHM.</p>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 list-inside pb-1 d-lg-none'>Deposit $AMPL and receive $EEFI and $OHM rewards; </li>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 list-inside pb-1 d-lg-none'>Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, $EEFI is automatically purchased and burned daily; when AMPL supply is stable or contracting, $EEFI is minted (learn more).</li>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 pb-2 d-lg-none'>2. Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</li>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 d-lg-none'>3. Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</li>
                                </ul>

                            </Col>
                        </Row>
                        <Row className='d-flex align-items-center '>
                            <h1 className='card_bgtext'>$AMPL</h1>
                            <Col md={12} lg={7} xl={7} className='d-flex justify-content-center z-1' >
                                <div className="card_main position-relative overflow-hidden">
                                    <div className="card_elipse1"></div>
                                    <div className="card_elipse2"></div>
                                    <h2 className='card_innovation'>Innovation</h2>
                                    <img className='mx-auto' src={card_img} alt="" />
                                    <div className='d-flex  justify-content-between'>
                                        <p className='text-white opacity-75 fs-16 fw-400'>Projected Yield (APY)</p>
                                        <p className='clr-blue fs-16 fw-700 ff-inter'>7,777,777%</p>
                                    </div>
                                    <div className='d-flex  justify-content-between pt-2'>
                                        <p className='text-white opacity-50 fs-16 ff-raleway'>Current Deposits</p>
                                        <p className='text-white fs-16 ff-inter fw-500'>0.00 AMPL</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} lg={5} xl={5} className='d-flex flex-column justify-content-end pt-md-5'>
                                <h2 className=' text-white fs-38 fw-400  ff-machina pb-3'>Elastic Vault</h2>
                                <p className=' text-white fs-22 fw-500 ff-raleway pb-2'>Deposit Token</p>
                                <p className=' text-white opacity-50 fs-16 fw-400 ff-raleway pb-2'> $AMPL</p>
                                <h2 className=' text-white  fs-22 fw-500 ff-raleway pb-2'>Flagship Hedging Strategy</h2>
                                <p className=' text-white opacity-50 fs-16 fw-400 ff-raleway pb-2'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className=' fs-16 text-white opacity-50 fw-400 ff-raleway pb-2'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                <p className='text-white ff-rlaeway  fs-16 fw-400  opacity-50 pb-2 d-lg-none'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                                <ul>
                                    <p className='text-white ff-raleway  fs-16 fw-400 opacity-50 pb-2 d-lg-none'>1. Initially utilizes both OG rebase tokens $AMPL and $OHM.</p>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 list-inside pb-1 d-lg-none'>Deposit $AMPL and receive $EEFI and $OHM rewards; </li>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 list-inside pb-1 d-lg-none'>Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, $EEFI is automatically purchased and burned daily; when AMPL supply is stable or contracting, $EEFI is minted (learn more).</li>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 pb-2 d-lg-none'>2. Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</li>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 d-lg-none'>3. Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</li>
                                </ul>

                            </Col>
                        </Row>
                        <Row className='d-flex align-items-center '>
                            <h1 className='card_bgtext'>$AMPL</h1>
                            <Col md={12} lg={7} xl={7} className='d-flex justify-content-center z-1' >
                                <div className="card_main position-relative overflow-hidden">
                                    <div className="card_elipse1"></div>
                                    <div className="card_elipse2"></div>
                                    <h2 className='card_innovation'>Innovation</h2>
                                    <img className='mx-auto' src={card_img} alt="" />
                                    <div className='d-flex  justify-content-between'>
                                        <p className='text-white opacity-75 fs-16 fw-400'>Projected Yield (APY)</p>
                                        <p className='clr-blue fs-16 fw-700 ff-inter'>7,777,777%</p>
                                    </div>
                                    <div className='d-flex  justify-content-between pt-2'>
                                        <p className='text-white opacity-50 fs-16 ff-raleway'>Current Deposits</p>
                                        <p className='text-white fs-16 ff-inter fw-500'>0.00 AMPL</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} lg={5} xl={5} className='d-flex flex-column justify-content-end pt-md-5'>
                                <h2 className=' text-white fs-38 fw-400  ff-machina pb-3'>Elastic Vault</h2>
                                <p className=' text-white fs-22 fw-500 ff-raleway pb-2'>Deposit Token</p>
                                <p className=' text-white opacity-50 fs-16 fw-400 ff-raleway pb-2'> $AMPL</p>
                                <h2 className=' text-white  fs-22 fw-500 ff-raleway pb-2'>Flagship Hedging Strategy</h2>
                                <p className=' text-white opacity-50 fs-16 fw-400 ff-raleway pb-2'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className=' fs-16 text-white opacity-50 fw-400 ff-raleway pb-2'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                <p className='text-white ff-rlaeway  fs-16 fw-400  opacity-50 pb-2 d-lg-none'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                                <ul>
                                    <p className='text-white ff-raleway  fs-16 fw-400 opacity-50 pb-2 d-lg-none'>1. Initially utilizes both OG rebase tokens $AMPL and $OHM.</p>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 list-inside pb-1 d-lg-none'>Deposit $AMPL and receive $EEFI and $OHM rewards; </li>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 list-inside pb-1 d-lg-none'>Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, $EEFI is automatically purchased and burned daily; when AMPL supply is stable or contracting, $EEFI is minted (learn more).</li>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 pb-2 d-lg-none'>2. Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</li>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 d-lg-none'>3. Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</li>
                                </ul>

                            </Col>
                        </Row>
                        <Row className='d-flex align-items-center '>
                            <h1 className='card_bgtext'>$AMPL</h1>
                            <Col md={12} lg={7} xl={7} className='d-flex justify-content-center z-1' >
                                <div className="card_main position-relative overflow-hidden">
                                    <div className="card_elipse1"></div>
                                    <div className="card_elipse2"></div>
                                    <h2 className='card_innovation'>Innovation</h2>
                                    <img className='mx-auto' src={card_img} alt="" />
                                    <div className='d-flex  justify-content-between'>
                                        <p className='text-white opacity-75 fs-16 fw-400'>Projected Yield (APY)</p>
                                        <p className='clr-blue fs-16 fw-700 ff-inter'>7,777,777%</p>
                                    </div>
                                    <div className='d-flex  justify-content-between pt-2'>
                                        <p className='text-white opacity-50 fs-16 ff-raleway'>Current Deposits</p>
                                        <p className='text-white fs-16 ff-inter fw-500'>0.00 AMPL</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} lg={5} xl={5} className='d-flex flex-column justify-content-end pt-md-5'>
                                <h2 className=' text-white fs-38 fw-400  ff-machina pb-3'>Elastic Vault</h2>
                                <p className=' text-white fs-22 fw-500 ff-raleway pb-2'>Deposit Token</p>
                                <p className=' text-white opacity-50 fs-16 fw-400 ff-raleway pb-2'> $AMPL</p>
                                <h2 className=' text-white  fs-22 fw-500 ff-raleway pb-2'>Flagship Hedging Strategy</h2>
                                <p className=' text-white opacity-50 fs-16 fw-400 ff-raleway pb-2'>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className=' fs-16 text-white opacity-50 fw-400 ff-raleway pb-2'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                                <p className='text-white ff-rlaeway  fs-16 fw-400  opacity-50 pb-2 d-lg-none'>Those who choose to hedge with the Vault or participate in its economic cycles are the ones greatly rewarded when markets return to optimal conditions</p>
                                <ul>
                                    <p className='text-white ff-raleway  fs-16 fw-400 opacity-50 pb-2 d-lg-none'>1. Initially utilizes both OG rebase tokens $AMPL and $OHM.</p>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 list-inside pb-1 d-lg-none'>Deposit $AMPL and receive $EEFI and $OHM rewards; </li>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 list-inside pb-1 d-lg-none'>Vault activities are determined by $AMPL’s rebase status; when AMPL supply is expanding, $EEFI is automatically purchased and burned daily; when AMPL supply is stable or contracting, $EEFI is minted (learn more).</li>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 pb-2 d-lg-none'>2. Potentially any token can be rebase-enabled and added to this strategy (subject to governance)</li>
                                    <li className='text-white ff-raleway fs-16 fw-400 opacity-50 d-lg-none'>3. Sub vaults can be created to add extra “yield” utility dimensions to $EEFI (and take advantage of sub-trends and viral movements within crypto)</li>
                                </ul>

                            </Col>
                        </Row>
                        
                    </Slider>
                </Container>
            </section>
        </div>
    )
}

export default Section_3