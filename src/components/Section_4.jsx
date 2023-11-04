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
                <Row className='align-items-center '>
                    <Col data-aos="fade-right" xl={6} className='padding_section4 pt-5 pb-5 '>
                        <div className='sec_4padding'>
                        <h1 className='ff-machinaregular fw-700 fs-46'>EEFI Tokenomics</h1>
                        <p className='pb-3 fs-16 text-black ff-raleway fw-500 text-center sec_4width pt-2 pb-4'>EEFI is the special rewards token of the protocol that is minted and distributed in a decentralized fashion. It produces amplified yield during uptrends and protects from downside action during downtrends.</p>
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
                   </div>
                    </Col>
                    <Col data-aos="fade-left" className='position-relative ' xl={6}>
                        <img className='linear_bg w-100' src={linear} alt="" />
                        <div className='position-absolute div_linear pt-5 '>
                            <div className='d-flex align-items-center'>
                                <img className='' src={icon1} alt="" />
                                <span>
                                    <h2 className='text-white ff-machina fw-600 fs-24'>Decentralized Yield</h2>
                                    <p className='text-white fs-16 ff-raleway fw-400 opacity-75'>Protocol’s native utility | rewards token</p>
                                </span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img className='' src={icon2} alt="" />
                                <span>
                                    <h2 className='text-white ff-machina fs-24 fw-600'>Extra Value</h2>
                                    <p className='text-white fs-16 ff-raleway fw-400 opacity-75'>Can be highly deflationary during market uptrends</p>
                                </span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img className='' src={icon3} alt="" />
                                <span>
                                    <h2 className='text-white ff-machina fs-24 fw-600'>Smart Index</h2>
                                    <p className='text-white fs-16 ff-raleway fw-400 opacity-75 pe-5 '>Token can be viewed as an index of all strategy performance on the protocol</p>
                                </span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img className='' src={icon1} alt="" />
                                <span>
                                    <h2 className='text-white ff-machina fs-24 fw-600'>Social Coordination (E,E)</h2>
                                    <p className='text-white fs-16 ff-raleway fw-400 opacity-75 sec_4social'>Promotes hyper social coordination around all strategies on the protocol (E,E) (makes hedging fun and working together produces more benefits to all vault users)</p>
                                </span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <img className='' src={icon4} alt="" />
                                <span>
                                    <h2 className='text-white ff-machina fs-24 fw-600'>Expansive Utility Dimensions</h2>
                                    <p className='text-white fs-16 ff-raleway fw-400 opacity-75 sec_4expansive'>EEFI’s utility will expand as more strategies are added to the protocol.</p>
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