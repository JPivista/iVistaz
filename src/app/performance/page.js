"use client"
import React from 'react'
import Header1 from '../../../components/HeaderBlack'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '../../../components/Footer';
function performance() {
  return (
    <>
      <Container fluid className="iv-bg min-vh-100 border-bottom">
        <Header1 />
        <Container className="w-80 mb-5">
          <h1 className="text-white fs-70 fw-bold mb-5 text-start">PERFORMANCE</h1>
        </Container>

        <Container className="w-80 mt-5">
          <Row className='d-flex flex-lg-row flex-column'>
            <Col className="d-flex flex-column justify-content-between p-0">
              <Container className='text-start'>
                <p className="mastery-text">“Behind every brilliant performance there were countless hours of practice and preparation.” – Eric Butterworth</p>
                <p className="mastery-text">We work in collaboration with our clients to design digital journeys that create experiences which people will never forget. And for that, we intend to deliver performance beyond expectations.</p>
                <Container className="mt-3 pb-5 margin-left d-flex flex-column justify-content-center">
                  <div className='d-flex flex-lg-row flex-column gap-3'>
                    <div className='text-start'>
                      <Link href="/industries" className="btn btn-13 b-width">Industries</Link>
                    </div>
                    <div className='text-start'>
                      <Link href="/case-studies" className="btn btn-13 b-width">Case Studies</Link>
                    </div>
                  </div>
                </Container>
              </Container>

              <Container className="margin-left d-lg-flex d-none mb-4">
                <Col className=''>
                  <Link href="/arts" className="perform-text">ARTS</Link>
                  <Link href="/mastery" className="perform-text mx-5">MASTERY</Link>
                </Col>
              </Container>
            </Col>

            <Col className="arts">
              <Image src="/images/performance_image.svg" className="performance-img img-fluid" width={700} height={490} alt='' />
            </Col>
          </Row>

          <Container className="margin-left d-lg-none d-flex mb-4">
            <Col className=''>
              <Link href="/arts" className="perform-text">ARTS</Link>
              <Link href="/mastery" className="perform-text mx-5">MASTERY</Link>
            </Col>
          </Container>
        </Container>
      </Container>
      <Footer />

    </>
  )
}

export default performance