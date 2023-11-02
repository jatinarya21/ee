import React , {useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import team_img1 from '../assets/images/team_card1.png'
import team_img2 from '../assets/images/team_card2.png'
import team_img3 from '../assets/images/team_card3.png'
import x_icon from '../assets/images/x_icon.png'
import discord_icon from '../assets/images/discord_icon.png'
import line from '../assets/images/icon-line.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Section_7() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='' >
            <section id='section7' className='section_7bg sm_mb_s7 '>
                <Container className='container_main pt-5'>
                    <h2 className='text-white  fs-46 ff-machina fw-800 text-center py-5'>Our Team</h2>
                    <Row className=''>
                        <Col md={4}>
                            <div data-aos="fade-right" className="team_card">
                                <img className='w-100' src={team_img1} alt="" />
                                <div className='d-flex flex-column  justify-content-center align-items-center'>
                                    <h2 className=' fs-24 ff-raleway fw-500 '>Davoice</h2>
                                    <p className=' fs-16 ff-raleway fw-400 '>co-founder</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-center gap-3'>
                                        <a href=""><img src={x_icon} alt="" /></a>
                                        <img src={line} alt="" />
                                        <a href=""><img src={discord_icon} alt="" /></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div data-aos="fade-down" className="team_card">
                                <img className='w-100' src={team_img2} alt="" />
                                <div className='d-flex flex-column  justify-content-center align-items-center'>
                                    <h2 className=' fs-24 ff-raleway fw-500 '>Solomon Adekale</h2>
                                    <p className=' fs-16 ff-raleway fw-400 '>co-founder</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-center gap-3'>
                                        <a href=""><img src={x_icon} alt="" /></a>
                                        <img src={line} alt="" />
                                        <a href=""><img src={discord_icon} alt="" /></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div data-aos="fade-left" className="team_card">
                                <img className='w-100' src={team_img3} alt="" />
                                <div className='d-flex flex-column  justify-content-center align-items-center'>
                                    <h2 className=' fs-24 ff-raleway fw-500 '>Anton</h2>
                                    <p className=' fs-16 ff-raleway fw-400 '>Co-Founder | Lead Developer</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-center gap-3'>
                                        <a href=""><img src={x_icon} alt="" /></a>
                                        <img src={line} alt="" />
                                        <a href=""><img src={discord_icon} alt="" /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    )
}

export default Section_7