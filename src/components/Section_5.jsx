import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section_5() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='overflow-hidden' >
            <section className='section_5bg pt-5'>
                <Container className="section_5container">
                    <Row>
                        <h1 data-aos="fade-down" className='text-center ff-plus fs-52 fw-700 text-white pt-5 pb-2'>170k Total Starting Supply</h1>
                        <p data-aos="fade-down" className='text-center text-white pb-5 fs-16 ff-raleway fw-500'>Initial BONDing Offering (IBO)* Phases</p>

                        <div className='d-flex flex-column  gap-5'>
                            <div data-aos="fade-down" className='d-flex justify-content-between align-items-center pb-2 border-bottom'>
                                <p className='text-white ff-raleway fw-400 text-uppercase fs-18 numeric'>Round 1</p>
                                <p className='text-white ff-raleway fw-400 text-uppercase fs-20'>10,000 EEFI Bonds</p>
                                <p className='text-white ff-raleway fw-400 text-uppercase fs-18 numeric'>@ <span className='fs-36'>$12</span></p>
                            </div>
                            <p data-aos="fade-down" className='text-white text-end section_5text ff-plus fw-400 fs-16'>Vested (locked) for 1 Year</p>
                            <div data-aos="fade-down" className='d-flex justify-content-between align-items-center pb-2 border-bottom'>
                                <p className='text-white ff-raleway fw-400 text-uppercase fs-18 numeric '>Round 2</p>
                                <p className='text-white ff-raleway fw-400 text-uppercase fs-20'>12,777 EEFI Bonds</p>
                                <p className='text-white ff-raleway fw-400 text-uppercase fs-18 numeric'>@ <span className='fs-36'>$12</span></p>
                            </div>
                            <p data-aos="fade-down" className='text-white text-end  section_5text ff-plus fw-400 fs-16'>Vested (locked) for six months</p>
                            <div data-aos="fade-down" className='d-flex justify-content-between align-items-center pb-2 border-bottom'>
                                <p className='text-white ff-raleway fw-400 text-uppercase fs-18 numeric '>Round 3</p>
                                <p className='text-white ff-raleway fw-400 text-uppercase fs-20'>25,000 EEFI Bonds</p>
                                <p className='text-white ff-raleway fw-400 text-uppercase fs-18 numeric'>@ <span className='fs-36'>$12</span></p>
                            </div>
                            <p data-aos="fade-down" className='text-white text-end section_5text ff-plus fw-400 fs-16'>No vesting or lock up periods. Available at launch.</p>

                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <h2 data-aos="fade-down" className='text-white text-center ff-raleway text-decoration-underline fs-20 pt-5 mt-2 pb-3'>(47,777 or around <span className='fs-36 numeric mx-3'>28%</span> of total starting supply is up for IBO)</h2>
                            <p data-aos="fade-down" className='text-white text-center fs-14 ff-raleway fw-400 opacity-75 supply_footer'>Individuals who hold $EEFI will also receive an airdrop of the protocol's governance token $EFT ...learn more</p>
                        </div>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Section_5