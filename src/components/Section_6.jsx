import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hover_img1 from '../assets/images/hover_card1.png'
import hover_img2 from '../assets/images/hover_card2.png'
import hover_img3 from '../assets/images/hover_card3.png'
import hover_img4 from '../assets/images/hover_card4.png'
import hover_img5 from '../assets/images/hover_card5.png'
import hover_img6 from '../assets/images/hover_card6.png'
import hover_img7 from '../assets/images/hover_card7.png'
import hover_img8 from '../assets/images/hover_card8.png'
import hover_img9 from '../assets/images/hover_card9.png'
import sm_hover from '../assets/images/sm_hoverimg.png'
import elipse_img from '../assets/images/img_pic.png'
import onhover_img1 from '../assets/images/onhover_img1.png'
import onhover_img2 from '../assets/images/onhover_img2.png'
import onhover_img3 from '../assets/images/onhover_img3.png'
import platform_1 from '../assets/images/platform_1.png'
import platform_2 from '../assets/images/platform_2.png'
import platform_3 from '../assets/images/platform_3.png'
import platform_4 from '../assets/images/platform_4.png'

function Section_6() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
      <div className='overflow-hidden' >
          <section className='py-5'>
              <Container className='container_main py-5'>
                  <div className='d-flex flex-column align-items-center'>
                      <h2 data-aos="fade-right" className='fs-46  pt-4 clr-blue  ff-machina fw-800'>Future Use Cases (Strategies)</h2>
                      <p data-aos="fade-right" className='ff-raleway fs-16 fw-400 section_6width text-center pt-2 pb-5'>Elastic Protocol will continue to pioneer an expanding ecosystem of yield strategies that will cater to DeFi users across a range of blockchains, communities, and interests. Each will help in generating sustainable yield and expanding the utility of the native utility token $EEFI. Here is some of what we are planning and looking into:</p>
                  </div>
                    <Row className='pb-3 justify-content-center'>
                      <Col data-aos="fade-down" md={6} lg={6} xl={4} className='pt-4 d-flex justify-content-center justify-content-md-end'>
                          <div className="hover_card position-relative">
                              <img className='w-100 hover_img' src={hover_img1} alt="" />
                              <div className='btn-nft position-absolute top-0 m-4'>
                                  <h2 className=' text-white'>NFT</h2>
                              </div>
                              <div className='sm-box'>
                                    <img className='sm-hoverimg' src={sm_hover} alt="" />
                              </div>
                              <div className='position-absolute bottom-0 m-4'>
                                  <p className='text-white'>NFT</p>
                                  <p className='text-white pb-2'>24 NFTs</p>
                                  <div className='img_pic d-flex align-items-center gap-2'>
                                      <img src={elipse_img} alt="" />
                                      <p className='text-white fs-16 ff-raleway fw-400 '>@NFTs</p>
                                  </div>
                              </div>
                              <div className='onhover_card p-3'>
                              <img className='' src={onhover_img1} alt="" />
                              <h2 className='text-white ff-machina fs-24 pt-3 pb-2 fw-700'>REAL YIELD</h2>
                              <p className='text-white opacity-75 ff-raleway fs-16 fw-400'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that</p>
                                  <p className='text-white opacity-75 ff-raleway fs-16 fw-400 pt-1'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                  <p className='text-white pt-3 fs-20 ff-machina fw-700'>Platforms: </p>
                                  <div className='d-flex gap-2 pt-2'>
                                      <img className='platform_img' src={platform_1} alt="" />
                                      <img className='platform_img' src={platform_2} alt="" />
                                      <img className='platform_img' src={platform_3} alt="" />
                                      <img className='platform_img' src={platform_4} alt="" />
                                  </div>
                          </div>
                          </div>
                            </Col>
                      <Col data-aos="fade-down" md={6} lg={6} xl={4} className='pt-4 d-flex  justify-content-center justify-content-md-start'>
                          <div className="hover_card position-relative">
                              <img className='w-100 hover_img' src={hover_img2} alt="" />
                              <div className='btn-nft position-absolute top-0 m-4'>
                                  <h2 className=' text-white'>NFT</h2>
                              </div>
                              <div className='sm-box'>
                                    <img className='sm-hoverimg' src={sm_hover} alt="" />
                              </div>
                              <div className='position-absolute bottom-0 m-4'>
                                  <p className='text-white'>NFT</p>
                                  <p className='text-white'>24 NFTs</p>
                                  <div className='img_pic d-flex align-items-center'>
                                      <img src={elipse_img} alt="" />
                                      <p className='text-white fs-16 ff-raleway fw-400'>@NFTs</p>
                                  </div>
                              </div>
                              <div className='onhover_card  p-3'>
                              <img className='w-100 onhover_img2' src={onhover_img2} alt="" />
                              <h2 className='text-white ff-machina fs-24 pt-3 pb-2 fw-700'>REAL YIELD</h2>
                              <p className='text-white opacity-75 ff-raleway fs-16 fw-400'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that</p>
                                  <p className='text-white opacity-75 ff-raleway fs-16 fw-400 pt-1'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                  <p className='text-white pt-3 fs-20 ff-machina fw-700'>Platforms: </p>
                                  <div className='d-flex gap-2 pt-2'>
                                      <img className='platform_img' src={platform_1} alt="" />
                                      <img className='platform_img' src={platform_2} alt="" />
                                      <img className='platform_img' src={platform_3} alt="" />
                                      <img className='platform_img' src={platform_4} alt="" />
                                  </div>
                          </div>
                          </div>
                            </Col>
                      <Col data-aos="fade-down" md={6} lg={6} xl={4} className='pt-4 d-flex justify-content-center justify-content-md-end'>
                          <div className="hover_card position-relative">
                              <img className='w-100 hover_img' src={hover_img3} alt="" />
                              <div className='btn-nft position-absolute top-0 m-4'>
                                  <h2 className=' text-white'>OPTIONS</h2>
                              </div>
                              <div className='sm-box'>
                                    <img className='sm-hoverimg' src={sm_hover} alt="" />
                              </div>
                              <div className='position-absolute bottom-0 m-4'>
                                  <p className='text-white'>NFT</p>
                                  <p className='text-white'>24 NFTs</p>
                                  <div className='img_pic d-flex align-items-center'>
                                      <img src={elipse_img} alt="" />
                                      <p className='text-white fs-16 ff-raleway fw-400'>@OPTIONS</p>
                                  </div>
                              </div>
                              <div className='onhover_card p-3'>
                              <img className='' src={onhover_img3} alt="" />
                              <h2 className='text-white ff-machina fs-24 pt-3 pb-2 fw-700'>REAL YIELD</h2>
                              <p className='text-white opacity-75 ff-raleway fs-16 fw-400'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that</p>
                                  <p className='text-white opacity-75 ff-raleway fs-16 fw-400 pt-1'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                  <p className='text-white pt-3 fs-20 ff-machina fw-700'>Platforms: </p>
                                  <div className='d-flex gap-2 pt-2'>
                                      <img className='platform_img' src={platform_1} alt="" />
                                      <img className='platform_img' src={platform_2} alt="" />
                                      <img className='platform_img' src={platform_3} alt="" />
                                      <img className='platform_img' src={platform_4} alt="" />
                                  </div>
                          </div>
                          </div>
                            </Col>
                      <Col data-aos="fade-down" md={6} lg={6} xl={4} className='pt-4  d-flex justify-content-center justify-content-md-start'>
                          <div className="hover_card position-relative">
                              <img className='w-100 hover_img' src={hover_img4} alt="" />
                              <div className='btn-nft position-absolute top-0 m-4'>
                                  <h2 className=' text-white'>NFT</h2>
                              </div>
                              <div className='sm-box'>
                                    <img className='sm-hoverimg' src={sm_hover} alt="" />
                              </div>
                              <div className='position-absolute bottom-0 m-4'>
                                  <p className='text-white'>NFT</p>
                                  <p className='text-white pb-2'>24 NFTs</p>
                                  <div className='img_pic d-flex align-items-center gap-2'>
                                      <img src={elipse_img} alt="" />
                                      <p className='text-white fs-16 ff-raleway fw-400'>@NFTs</p>
                                  </div>
                              </div>
                              <div className='onhover_card p-3'>
                              <img className='' src={onhover_img1} alt="" />
                              <h2 className='text-white ff-machina fs-24 pt-3 pb-2 fw-700'>REAL YIELD</h2>
                              <p className='text-white opacity-75 ff-raleway fs-16 fw-400'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that</p>
                                  <p className='text-white opacity-75 ff-raleway fs-16 fw-400 pt-1'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                  <p className='text-white pt-3 fs-20 ff-machina fw-700'>Platforms: </p>
                                  <div className='d-flex gap-2 pt-2'>
                                      <img className='platform_img' src={platform_1} alt="" />
                                      <img className='platform_img' src={platform_2} alt="" />
                                      <img className='platform_img' src={platform_3} alt="" />
                                      <img className='platform_img' src={platform_4} alt="" />
                                  </div>
                          </div>
                          </div>
                            </Col>
                      <Col data-aos="fade-down" md={6} lg={6} xl={4} className='pt-4 d-flex justify-content-center justify-content-md-end'>
                          <div className="hover_card position-relative">
                              <img className='w-100 hover_img' src={hover_img5} alt="" />
                              <div className='btn-nft position-absolute top-0 m-4'>
                                  <h2 className=' text-white'>NFT</h2>
                              </div>
                              <div className='sm-box'>
                                    <img className='sm-hoverimg' src={sm_hover} alt="" />
                              </div>
                              <div className='position-absolute bottom-0 m-4'>
                                  <p className='text-white'>NFT</p>
                                  <p className='text-white pb-2'>24 NFTs</p>
                                  <div className='img_pic d-flex align-items-center gap-2'>
                                      <img src={elipse_img} alt="" />
                                      <p className='text-white fs-16 ff-raleway fw-400'>@NFTs</p>
                                  </div>
                              </div>
                              <div className='onhover_card p-3'>
                              <img className='' src={onhover_img1} alt="" />
                              <h2 className='text-white ff-machina fs-24 pt-3 pb-2 fw-700'>REAL YIELD</h2>
                              <p className='text-white opacity-75 ff-raleway fs-16 fw-400'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that</p>
                                  <p className='text-white opacity-75 ff-raleway fs-16 fw-400 pt-1'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                  <p className='text-white pt-3 fs-20 ff-machina fw-700'>Platforms: </p>
                                  <div className='d-flex gap-2 pt-2'>
                                      <img className='platform_img' src={platform_1} alt="" />
                                      <img className='platform_img' src={platform_2} alt="" />
                                      <img className='platform_img' src={platform_3} alt="" />
                                      <img className='platform_img' src={platform_4} alt="" />
                                  </div>
                          </div>
                          </div>
                            </Col>
                      <Col data-aos="fade-down" md={6} lg={6} xl={4} className='pt-4  d-flex justify-content-center justify-content-md-start'>
                          <div className="hover_card position-relative">
                              <img className='w-100 hover_img' src={hover_img6} alt="" />
                              <div className='btn-nft position-absolute top-0 m-4'>
                                  <h2 className=' text-white'>NFT</h2>
                              </div>
                              <div className='sm-box'>
                                    <img className='sm-hoverimg' src={sm_hover} alt="" />
                              </div>
                              <div className='position-absolute bottom-0 m-4'>
                                  <p className='text-white'>NFT</p>
                                  <p className='text-white pb-2'>24 NFTs</p>
                                  <div className='img_pic d-flex align-items-center gap-2'>
                                      <img src={elipse_img} alt="" />
                                      <p className='text-white fs-16 ff-raleway fw-400'>@NFTs</p>
                                  </div>
                              </div>
                              <div className='onhover_card p-3'>
                              <img className='' src={onhover_img1} alt="" />
                              <h2 className='text-white ff-machina fs-24 pt-3 pb-2 fw-700'>REAL YIELD</h2>
                              <p className='text-white opacity-75 ff-raleway fs-16 fw-400'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that</p>
                                  <p className='text-white opacity-75 ff-raleway fs-16 fw-400 pt-1'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                  <p className='text-white pt-3 fs-20 ff-machina fw-700'>Platforms: </p>
                                  <div className='d-flex gap-2 pt-2'>
                                      <img className='platform_img' src={platform_1} alt="" />
                                      <img className='platform_img' src={platform_2} alt="" />
                                      <img className='platform_img' src={platform_3} alt="" />
                                      <img className='platform_img' src={platform_4} alt="" />
                                  </div>
                          </div>
                          </div>
                            </Col>
                      <Col data-aos="fade-down" md={6} lg={6} xl={4} className='pt-4 d-flex justify-content-center justify-content-md-end'>
                          <div className="hover_card position-relative">
                              <img className='w-100 hover_img' src={hover_img7} alt="" />
                              <div className='btn-nft position-absolute top-0 m-4'>
                                  <h2 className=' text-white'>NFT</h2>
                              </div>
                              <div className='sm-box'>
                                    <img className='sm-hoverimg' src={sm_hover} alt="" />
                              </div>
                              <div className='position-absolute bottom-0 m-4'>
                                  <p className='text-white'>NFT</p>
                                  <p className='text-white pb-2'>24 NFTs</p>
                                  <div className='img_pic d-flex align-items-center gap-2'>
                                      <img src={elipse_img} alt="" />
                                      <p className='text-white fs-16 ff-raleway fw-400'>@NFTs</p>
                                  </div>
                              </div>
                              <div className='onhover_card p-3'>
                              <img className='' src={onhover_img1} alt="" />
                              <h2 className='text-white ff-machina fs-24 pt-3 pb-2 fw-700'>REAL YIELD</h2>
                              <p className='text-white opacity-75 ff-raleway fs-16 fw-400'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that</p>
                                  <p className='text-white opacity-75 ff-raleway fs-16 fw-400 pt-1'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                  <p className='text-white pt-3 fs-20 ff-machina fw-700'>Platforms: </p>
                                  <div className='d-flex gap-2 pt-2'>
                                      <img className='platform_img' src={platform_1} alt="" />
                                      <img className='platform_img' src={platform_2} alt="" />
                                      <img className='platform_img' src={platform_3} alt="" />
                                      <img className='platform_img' src={platform_4} alt="" />
                                  </div>
                          </div>
                          </div>
                            </Col>
                      <Col data-aos="fade-down" md={6} lg={6} xl={4} className='pt-4  d-flex justify-content-center justify-content-md-start'>
                          <div className="hover_card position-relative">
                              <img className='w-100 hover_img' src={hover_img8} alt="" />
                              <div className='btn-nft position-absolute top-0 m-4'>
                                  <h2 className=' text-white'>NFT</h2>
                              </div>
                              <div className='sm-box'>
                                    <img className='sm-hoverimg' src={sm_hover} alt="" />
                              </div>
                              <div className='position-absolute bottom-0 m-4'>
                                  <p className='text-white'>NFT</p>
                                  <p className='text-white pb-2'>24 NFTs</p>
                                  <div className='img_pic d-flex align-items-center gap-2'>
                                      <img src={elipse_img} alt="" />
                                      <p className='text-white fs-16 ff-raleway fw-400'>@NFTs</p>
                                  </div>
                              </div>
                              <div className='onhover_card p-3'>
                              <img className='' src={onhover_img1} alt="" />
                              <h2 className='text-white ff-machina fs-24 pt-3 pb-2 fw-700'>REAL YIELD</h2>
                              <p className='text-white opacity-75 ff-raleway fs-16 fw-400'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that</p>
                                  <p className='text-white opacity-75 ff-raleway fs-16 fw-400 pt-1'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                  <p className='text-white pt-3 fs-20 ff-machina fw-700'>Platforms: </p>
                                  <div className='d-flex gap-2 pt-2'>
                                      <img className='platform_img' src={platform_1} alt="" />
                                      <img className='platform_img' src={platform_2} alt="" />
                                      <img className='platform_img' src={platform_3} alt="" />
                                      <img className='platform_img' src={platform_4} alt="" />
                                  </div>
                          </div>
                          </div>
                            </Col>
                      <Col data-aos="fade-down" md={6} lg={6} xl={4} className='pt-4 d-flex justify-content-center'>
                          <div className="hover_card position-relative">
                              <img className='w-100 hover_img' src={hover_img9} alt="" />
                              <div className='btn-nft position-absolute top-0 m-4'>
                                  <h2 className=' text-white'>NFT</h2>
                              </div>
                              <div className='sm-box'>
                                    <img className='sm-hoverimg' src={sm_hover} alt="" />
                              </div>
                              <div className='position-absolute bottom-0 m-4'>
                                  <p className='text-white'>NFT</p>
                                  <p className='text-white pb-2'>24 NFTs</p>
                                  <div className='img_pic d-flex align-items-center gap-2'>
                                      <img src={elipse_img} alt="" />
                                      <p className='text-white fs-16 ff-raleway fw-400'>@NFTs</p>
                                  </div>
                              </div>
                              <div className='onhover_card p-3'>
                              <img className='' src={onhover_img1} alt="" />
                              <h2 className='text-white ff-machina fs-24 pt-3 pb-2 fw-700'>REAL YIELD</h2>
                              <p className='text-white opacity-75 ff-raleway fs-16 fw-400'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that</p>
                                  <p className='text-white opacity-75 ff-raleway fs-16 fw-400 pt-1'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                  <p className='text-white pt-3 fs-20 ff-machina fw-700'>Platforms: </p>
                                  <div className='d-flex gap-2 pt-2'>
                                      <img className='platform_img' src={platform_1} alt="" />
                                      <img className='platform_img' src={platform_2} alt="" />
                                      <img className='platform_img' src={platform_3} alt="" />
                                      <img className='platform_img' src={platform_4} alt="" />
                                  </div>
                          </div>
                          </div>
                            </Col>
                    </Row>  
              </Container>
          </section>
    </div>
  )
}

export default Section_6