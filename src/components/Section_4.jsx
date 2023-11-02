import React , {useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';
import linear from '../assets/images/section_4linear.png'
import icon1 from '../assets/images/linear_icon1.png'
import icon2 from '../assets/images/linear_icon2.png'
import icon3 from '../assets/images/linear_icon3.png'
import icon4 from '../assets/images/linear_icon4.png'

function Section_4() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='overflow-hidden seection-line' >
            <section id='section4' className='overflow-hidden section_4graph position-relative'>
                <Row className='align-items-center'>
                    <Col data-aos="fade-right" lg={6} className='padding_section4'>
                        <h1 className='ff-machina fs-46 fw-900'>EEFI Tokenomics</h1>
                        <p className='pb-3 fs-16 ff-raleway eefi_padding pt-2 pb-4'>EEFI is the special rewards token of the protocol that is minted and distributed in a decentralized fashion. It produces amplified yield during uptrends and protects from downside action during downtrends.</p>
                        <button className='btn_section4 shine_hover'>View Contract Address</button>
                        <h2 className='pt-5 pb-3 fs-24 ff-machina fw-800'>IBO TOKENOMICS</h2>
                        <p className='fs-18 ff-raleway fw-700'>IBO Round 1 Price</p>
                        <p className='clr-blue ff-raleway fs-16 fw-600 py-2'>1 EEFI = $12</p>
                        <p className='fs-18 ff-raleway fw-700'>IBO Round 2 Price</p>
                        <p className='clr-blue ff-raleway fs-16 fw-600 py-2'>1 EEFI = $18</p>
                        <p className='fs-18 ff-raleway fw-700'>IBO Round 3 Price</p>
                        <p className='clr-blue ff-raleway fs-16 fw-600 py-2'>1 EEFI = $26</p>
                        <p className='fs-18 ff-raleway fw-700'>TOTAL SUPPLY</p>
                        <p className='fs-16 ff-raleway fw-600'>170,000</p>
                    </Col>
                    <Col data-aos="fade-left" className='position-relative ' lg={6}>
                        <img className='linear_bg w-100' src={linear} alt="" />
                        <div className='position-absolute div_linear'>
                            <div className='d-flex align-items-center'>
                                <img className='' src={icon1} alt="" />
                                <span>
                                    <h2 className='text-white'>Decentralized Yield</h2>
                                    <p className='text-white fs-16 ff-raleway fw-400 opacity-75'>Protocol’s native utility | rewards token</p>
                                </span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img className='' src={icon2} alt="" />
                                <span>
                                    <h2 className='text-white'>Decentralized Yield</h2>
                                    <p className='text-white fs-16 ff-raleway fw-400 opacity-75'>Protocol’s native utility | rewards token</p>
                                </span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img className='' src={icon3} alt="" />
                                <span>
                                    <h2 className='text-white'>Decentralized Yield</h2>
                                    <p className='text-white fs-16 ff-raleway fw-400 opacity-75'>Protocol’s native utility | rewards token</p>
                                </span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img className='' src={icon1} alt="" />
                                <span>
                                    <h2 className='text-white'>Decentralized Yield</h2>
                                    <p className='text-white fs-16 ff-raleway fw-400 opacity-75'>Protocol’s native utility | rewards token</p>
                                </span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img className='' src={icon4} alt="" />
                                <span>
                                    <h2 className='text-white'>Decentralized Yield</h2>
                                    <p className='text-white fs-16 ff-raleway fw-400 opacity-75'>Protocol’s native utility | rewards token</p>
                                </span>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </section>
        </div>
    )
}

export default Section_4