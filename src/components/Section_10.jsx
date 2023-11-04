import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Section_10() {
    return (
        <div className='overflow-hidden'>
            <section className='section10_bg pt-2'>
                <Container className='container_main py-5 '>
                    <h2 className='text-center text-white ff-machina fs-46 fw-800'> Contact Us</h2>
                    <p className='text-center text-white ff-raleway fs-16 fw-400 opacity-75'>Have a question or want to contribute? Reach out to us.</p>

                    <Row className='d-flex justify-content-center'>
                        <Col lg={12} className=''>
                            <form action="form">
                                <div className='pt-5'>
                                    <div className='d-flex gap-5 pb-5'>
                                        <input required type="text" placeholder='First Name'className='contact_name pb-3' />
                                        <input required type="text" placeholder='Last Name'className='contact_name pb-3' />
                                    </div>
                                    <div className='d-flex gap-5 pb-5'>
                                        <input required type="text" placeholder='Email'className='contact_name pb-3' />
                                        <input required type="number" placeholder='Phone Number'className='contact_name pb-3' />
                                    </div>
                                    <textarea required name="" placeholder='Message' id="" cols="143" rows="5"></textarea>
                                <span className='d-flex justify-content-center pt-5 mt-2'><button className='contact-btn text-white  fs-20 ff-raleway text-center shine_hover'>SUBMIT'</button></span>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Section_10