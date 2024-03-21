"use client"
import React from 'react'
import Header1 from '../../../components/HeaderBlack'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import Link from 'next/link';
import Image from 'next/image'
function performance() {
  return (
    <>
      <Container fluid className="iv-bg min-vh-100">
        <Header1 />
        <Container className="w-80 mb-5">
          <h1 className="text-white fs-70 fw-bold mb-5 text-lg-start text-center">PERFORMANCE</h1>
        </Container>

        <Container className="w-80 mt-5">
          <Row className='d-flex flex-lg-row flex-column'>
            <Col className="d-flex flex-column justify-content-between">
              <Container className='text-lg-start text-center'>
                <p className="mastery-text">“Behind every brilliant performance there were countless hours of practice and preparation.” – Eric Butterworth</p>
                <p className="mastery-text">We work in collaboration with our clients to design digital journeys that create experiences which people will never forget. And for that, we intend to deliver performance beyond expectations.</p>
                <Container className="mt-3 pb-5 margin-left d-flex flex-column justify-content-center">
                  <div className='d-flex flex-lg-row flex-column gap-3 justify-content-center'>
                    <div className='text-lg-start text-center'>
                      <Link href="/industries" className="btn btn-13 b-width">Industries</Link>
                    </div>
                    <div className='text-lg-start text-center'>
                      <Link href="/case-studies" className="btn btn-14 mx-5">Case Studies</Link>
                    </div>
                  </div>
                </Container>
              </Container>

              <Container className="margin-left">
                <Col className=''>
                  <Link href="/arts" className="perform-text">ARTS</Link>
                  <Link href="/mastery" className="perform-text mx-5">MASTERY</Link>
                </Col>
              </Container>
            </Col>

            <Col className="arts">
              <Image src="/images/performance.svg" className="performance-img img-fluid" width={700} height={490} alt='' />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default performance