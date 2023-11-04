import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cloud_img from '../assets/images/Cloud_bottom.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section_2() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className=''>
      <div className='bg-black sec_2height'>
        <section id='section2' className='section_2bg position-relative'>
          <h1  data-aos="fade-up" className=' fs-52 fw-800 text-center text-white ff-plus pt-2 mt-lg-2  pt-lg-3 '>Amplify and STRECH GAINS</h1>
          <Container className='container_main d-flex align-items-center justify-content-center section_2height'>
            <div className='d-flex align-items-center justify-content-center'>
              <p  data-aos="fade-up" className='text-light sec_2width sec_2pt text-center fs-14 ff-raleway'>We take a different balanced approach to finding and creating yield opportunities in the everchanging crypto market. Our yield strategies help users stay protected and hedged during bear markets and amplify yield during bull markets without resorting to leverage or other dangerous techniques.</p>
            </div>
          </Container>
          <img className='cloud_img' src={cloud_img} alt="" />
        </section>
      </div>
    </div>
  )
}

export default Section_2