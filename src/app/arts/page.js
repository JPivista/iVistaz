"use client"
import React from 'react'
import Header1 from '../../../components/HeaderBlack'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import Link from 'next/link';
import Image from 'next/image'
function page() {
  return (
<>
<Container fluid className="">
        <Header1 />
        <img src="/images/h-icon.svg" className="header-icon"/>
              <Container className="w-80">
            <h1 className="fs-70 fw-bold">ART</h1>                   
              </Container>

              <Container className="w-80">
                  <Row>
            <Col className="" lg={8}>
                      <p className="art-text fw-semibold">“It’s not what you look that matters, it’s what you see.” – Henry Albert Thoreau</p>
                      <p className="art-text"> A picture may speak a thousand words but an action speaks louder than them. Therefore, we create digital experiences that lead to meaningful conversations and convert to qualified leads.</p>
                      <Container className="mt-5 pb-5 margin-left">
                          <Link href="/arts/services" className="btn btn-11">Services</Link>    
                          </Container>
                      </Col>
                      
              </Row>
              </Container> 
              
              <Container className="w-80">
                  <Row>
                     
                      <Col className="d-flex justify-content-end flex-column">
                          <Container className=" margin-left">
                          <Link href="/mastery" className="arts-text">MASTERY</Link>
                          <Link href="/performance" className="arts-text mx-5">PERFORMANCE</Link>    
                          </Container>
            </Col>
            <Col className="arts">
                    <img src="/images/arts.svg" className="arts-img"/>
                      </Col>
              </Row>
              </Container> 

</Container>
    </>
  )
}

export default page