"use client"
import React from 'react'
import Header1 from '../../../components/HeaderBlack'
import { Col, Container, Row, Image } from 'react-bootstrap'
import CountUp from 'react-countup';
import Link from 'next/link';
import Footer from '../../../components/Footer';
// import Image from 'next/image'
function page() {
  return (
    <>
      <Container fluid className="" style={{ minHeight: '100vh' }}>
        <Header1 />
        <Image src="/images/h-icon.svg" className="header-icon d-lg-flex d-none" alt='' />
        <Container className="w-80">
          <h1 className="fs-70 fw-bold">ART</h1>
        </Container>

        <Container className="w-80">
          <Row>
            <Col className="" lg={8}>
              <p className="art-text fw-semibold">“It’s not what you look that matters, it’s what you see.” – Henry David Thoreau</p>
              <p className="art-text"> A picture may speak a thousand words but an action speaks louder than them. Therefore, we create digital experiences that lead to meaningful conversations and convert to qualified leads.</p>
              <Container className="mt-5 pb-5 margin-left">
                <Link href="/arts/services" className="btn btn-11">Services</Link>
              </Container>
            </Col>

          </Row>
        </Container>

        <Container className="w-80">
          <Row className='d-flex flex-lg-row flex-column-reverse'>
            <Col className="d-flex justify-content-end flex-column py-4 py-lg-3">
              <Container className=" margin-left d-flex flex-lg-row flex-column">
                <Link href="/mastery" className="arts-text">MASTERY</Link>
                <Link href="/performance" className="arts-text mx-lg-5">PERFORMANCE</Link>
              </Container>
            </Col>
            <Col className="">
              <Image src="/images/arts.svg" className="arts-img" alt='' />
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default page