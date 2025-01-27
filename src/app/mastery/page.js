"use client"
import React, { useState, useEffect } from 'react';
import Header1 from '../../../components/HeaderBlack'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import Footer from '../../../components/Footer';


function page() {
  return (
    <>
      <Container fluid className="bg-black d-flex flex-column justify-content-between" style={{ Height: '100vh' }}>
        <Header1 />
        <Container className="w-80">
          <h1 className="text-white fs-70 fw-bold">MASTERY</h1>
        </Container>

        <Container className="w-80">
          <Row className='d-flex flex-lg-row flex-column-reverse'>
            <Col className="section">
              <p className="mastery-text mastery-h">Years of Experience & Expertise</p>
              <p className="mastery-text mastery-h">Clients Served</p>
              <p className="mastery-text mastery-h">Online Revenue Generated</p>
              <p className="mastery-text mastery-h">Marketing Qualified Leads (MQLs) delivered</p>
              <p className="mastery-text mastery-h">Websites Designed and Developed</p>
            </Col>
            <Col className="d-flex justify-content-lg-end justify-content-start">
              <CountUp end={574}
                prefix="+"
                className="counter"
              />
            </Col>
          </Row>
        </Container>

        <Container className="w-80 mt-lg-0 mt-5">
          <div id="wrapper">
            <section id="content">
            </section>
          </div>
          <Row className='d-flex flex-lg-row flex-column-reverse'>
            <Col className="overflow d-flex flex-column justify-content-end align-items-center">
              <Image src="/images/mastery_image.svg" className=" img-fluid" width={300} height={200} alt='' />
            </Col>
            <Col className="">
              <p className="mastery-text">“Mastery demands all of a person.” – Albert Einstein</p>
              <p className="mastery-text">Years of being in the digital marketing landscape and working with over 300+ clients has given us insights on how to master every aspect of this dynamic industry. Want to know how we do it?</p>
              <Container className="mt-3 pb-5 margin-left d-flex flex-column justify-content-center">
                <div className='d-flex flex-lg-row flex-column gap-3 justify-content-start'>
                  <div className='text-start'>
                    <Link href="/mastery/about-us" className="btn btn-13 b-width">About Us</Link>
                  </div>
                  <div className='text-start'>
                    <Link href="/mastery/solutions" className="btn btn-13 b-width">Solutions</Link>
                  </div>
                </div>

                <Container className="mt-5 margin-left d-lg-flex d-none">
                  <Link href="/arts" className="text">ART</Link>
                  <Link href="/performance" className="text mx-lg-5 mx-4">PERFORMANCE</Link>
                </Container>
              </Container>
            </Col>
          </Row>

          <Container className="mt-5 margin-left d-flex d-lg-none pb-4 pb-lg-0">
            <Link href="/arts" className="text">ART</Link>
            <Link href="/performance" className="text mx-lg-5 mx-4">PERFORMANCE</Link>
          </Container>
        </Container>
      </Container>

      <Footer />
    </>
  )
}

export default page