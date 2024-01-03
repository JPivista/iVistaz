"use client"
import React, { useState, useEffect } from 'react';
import Header1 from '../../../components/HeaderBlack'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';


function page() {

  return (
    <>

<Container fluid className="bg-black ">
              <Header1 />
              <Container className="w-80">
            <h1 className="text-white fs-70 fw-bold">MASTERY</h1>                   
              </Container>

              <Container className="w-80">
                  <Row>
                      <Col className="section">
                          <p className="mastery-text mastery-h">Years of Experience & Expertise</p>
                          <p className="mastery-text mastery-h">Clients Served</p>
                          <p className="mastery-text mastery-h">Online Revenue Generated</p>
                          <p className="mastery-text mastery-h">Marketing Qualified Leads (MQLs) delivered</p>
                          <p className="mastery-text mastery-h">Websites Designed and Developed</p>
                      </Col>
                      <Col className="d-flex justify-content-end">
                          <CountUp end={574}
                              prefix="+"
                              className="counter"
                          />
                      </Col>
              </Row>
              </Container> 
              
        <Container className="w-80">
        <div id="wrapper">
	<section id="content">
	</section>
</div>
                  <Row>
                      <Col className="overflow">
                      <Image src="/images/mastery.svg" className="master-img" width={600} height={700} />
                      </Col>
                      <Col className="">
                      <p className="mastery-text">“Mastery demands all of a person.” – Albert Einstein</p>
                        <p className="mastery-text">Years of being in the digital marketing landscape and working with over 300+ clients has given us insights on how to master every aspect of this dynamic industry. Want to know how we do it?</p>
                        <Container className="mt-3 pb-5 margin-left d-flex">
                          <Link href="/mastery/about-us" className="btn btn-13 b-width">About Us</Link>
                          <Link href="/mastery/solutions" className="btn btn-15 mx-5">Solutions</Link>
                          </Container>              
                          <Container className="mt-5 margin-left">
                          <Link href="/arts" className="text">ART</Link>
                          <Link href="/performance" className="text mx-5">PERFORMANCE</Link>    
                          </Container>
                      </Col>
              </Row>
              </Container> 

</Container>
    </>
  )
}

export default page