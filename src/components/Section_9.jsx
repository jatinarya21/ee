import React , {useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import circle_1 from '../assets/images/roadmap-circle.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section_9() {
  useEffect(() => {
    AOS.init({duration:1000});
  }, [])

  return (
    <div className='overflow-hidden seection-line'>
      <section id='section9' className='roadmap_bg py-5'>
        <Container className='container_main py-5'>
          <Row>
                <h2 data-aos="fade-down" className='text-center py-5 text-white  ff-machina fs-46 fw-800'>Roadmap</h2>
            <div className='timeline mb-5  mt-5'>
            <div  className='timeline-box'>
                <div data-aos="fade-right" className='content-box'>
                    <h4 className='fs-20 fw-500 text-white ff-plusjakarta'>2022</h4>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset mb-1'>Ideation of Elastic Protocol </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 pb-1'>Elastic Protocol GitBook  </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>Full Code development of Elastic Vault Strategy </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4'>Audit </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset'>Complete Alpha Testing  </p>
                </div>
              </div>
              <div className='timeline-box end-box '>
                <div data-aos="fade-left" className='content-box2 '>
                    <h4 className='fs-20 fw-500 text-white ff-plusjakarta'>2023 Beginning</h4>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset mb-1'>Olympus Partnership Beginning </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>$25k Grant 2023  </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>$150k Total seeded Liquidity sough from Olympus DAO </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>Third Party Partner Intros </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset'>Elastic Vault Strategy Updates + Olympus $OHM Integrations  </p>
                </div>
              </div>
              <div className='timeline-box'>
                <div data-aos="fade-right" className='content-box'>
                    <h4 className='fs-20 fw-500 text-white ff-plusjakarta'>2022</h4>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset mb-1'>Ideation of Elastic Protocol </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 pb-1'>Elastic Protocol GitBook  </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>Full Code development of Elastic Vault Strategy </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4'>Audit </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset'>Complete Alpha Testing  </p>
                </div>
              </div>
              <div className='timeline-box end-box '>
                <div data-aos="fade-left" className='content-box2 '>
                    <h4 className='fs-20 fw-500 text-white ff-plusjakarta'>2023 Beginning</h4>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset mb-1'>Olympus Partnership Beginning </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>$25k Grant 2023  </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>$150k Total seeded Liquidity sough from Olympus DAO </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>Third Party Partner Intros </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset'>Elastic Vault Strategy Updates + Olympus $OHM Integrations  </p>
                </div>
              </div>
            <div className='timeline-box'>
                <div data-aos="fade-right" className='content-box'>
                    <h4 className='fs-20 fw-500 text-white ff-plusjakarta'>2022</h4>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset mb-1'>Ideation of Elastic Protocol </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 pb-1'>Elastic Protocol GitBook  </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>Full Code development of Elastic Vault Strategy </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4'>Audit </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset'>Complete Alpha Testing  </p>
                </div>
              </div>
              <div className='timeline-box end-box '>
                <div data-aos="fade-left" className='content-box2 '>
                    <h4 className='fs-20 fw-500 text-white ff-plusjakarta'>2023 Beginning</h4>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset mb-1'>Olympus Partnership Beginning </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>$25k Grant 2023  </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>$150k Total seeded Liquidity sough from Olympus DAO </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>Third Party Partner Intros </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset'>Elastic Vault Strategy Updates + Olympus $OHM Integrations  </p>
                </div>
              </div>
              <div className='timeline-box'>
                <div data-aos="fade-right" className='content-box'>
                    <h4 className='fs-20 fw-500 text-white ff-plusjakarta'>2022</h4>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset mb-1'>Ideation of Elastic Protocol </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 pb-1'>Elastic Protocol GitBook  </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>Full Code development of Elastic Vault Strategy </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4'>Audit </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset'>Complete Alpha Testing  </p>
                </div>
              </div>
              <div className='timeline-box end-box '>
                <div data-aos="fade-left" className='content-box2 '>
                    <h4 className='fs-20 fw-500 text-white ff-plusjakarta'>2023 Beginning</h4>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset mb-1'>Olympus Partnership Beginning </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>$25k Grant 2023  </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>$150k Total seeded Liquidity sough from Olympus DAO </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>Third Party Partner Intros </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset'>Elastic Vault Strategy Updates + Olympus $OHM Integrations  </p>
                </div>
              </div>
              <div className='timeline-box'>
                <div data-aos="fade-right" className='content-box'>
                    <h4 className='fs-20 fw-500 text-white ff-plusjakarta'>2022</h4>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset mb-1'>Ideation of Elastic Protocol </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 pb-1'>Elastic Protocol GitBook  </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>Full Code development of Elastic Vault Strategy </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4'>Audit </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset'>Complete Alpha Testing  </p>
                </div>
              </div>
              <div className='timeline-box end-box '>
                <div data-aos="fade-left" className='content-box2 '>
                    <h4 className='fs-20 fw-500 text-white ff-plusjakarta'>2023 Beginning</h4>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset mb-1'>Olympus Partnership Beginning </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>$25k Grant 2023  </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>$150k Total seeded Liquidity sough from Olympus DAO </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset px-4 mb-1'>Third Party Partner Intros </p>
                    <p className='ff-ralway fs-16 fw-400 text-white mb-unset'>Elastic Vault Strategy Updates + Olympus $OHM Integrations  </p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Section_9