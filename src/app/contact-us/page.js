"use client"
import React from 'react';
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import { Row, Col, Button } from 'react-bootstrap'
import Header1 from '../../../components/HeaderBlack';

function page() {
  return (
    <>
      <Container className="bg-black pb-5" fluid>
        <Header1 />
        <Container className="w-80">
          <Row>
            <Col lg={6}>
              <h1 className="fs-21 text-white fw-bold">CONTACT US</h1>
              <p className="text-white para-text">“The secret to getting ahead is getting started.” - Mark Twain Begin your journey towards performance now.</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <form class="row g-3 pt-4 mt-3">
                <div class="mb-3">
                  <label for="formFile" class="form-label">Your Name</label>
                  <input class="form-control" type="text" id="formFile" />
                </div>
                <div class="mb-3">
                  <label for="formFile" class="form-label">Title</label>
                  <input class="form-control" type="text" id="formFile" />
                </div>
                <div class="mb-3">
                  <label for="formFile" class="form-label">Company</label>
                  <input class="form-control" type="text" id="formFile" />
                </div>
                <div class="mb-3">
                  <label for="formFile" class="form-label">Email</label>
                  <input class="form-control" type="text" id="formFile" />
                </div>
                <div class="mb-3">
                  <label for="formFile" class="form-label">Phone</label>
                  <input class="form-control" type="text" id="formFile" />
                </div>
                <div class="mb-3">
                  <label for="formFile" class="form-label">Location</label>
                  <input class="form-control" type="text" id="formFile" />
                </div>
                <div class="mb-3">
                  <label for="formFile" class="form-label">Message</label>
                  <textarea class="form-control" id="formFile" />
                </div>
                <div class="mb-3 text-center">
                  <button type="button" class="btn btn-15">Submit</button>
                </div>
              </form>
            </Col>
            <Col lg={6} className="d-flex justify-content-center align-items-center">
              <Container className="iv-bg contact">
                <h1 className="contact-head pb-4">iVistaz Ecom Services Pvt Ltd</h1>
                <p className="contact-text text-center">RELIAABLE PHOENIX TOWERS</p>
                <p className="contact-text text-center">4th Floor, 16 & 16/1,</p>
                <p className="contact-text text-center">Museum Road</p>
                <p className="contact-text text-center">BENGALURU, KA 560025</p>
                <Container className="text-center pt-5">
                  <Row className="g-0">
                    <Col className="d-flex align-items-center justify-content-end">
                      <p className="footer-text">Follow Us:</p>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-start">
                      <Image src="/images/facebook.svg" width={40} height={40} className="social" alt='' />
                      <Image src="/images/linkedin.svg" width={43} height={43} className="social" alt='' />
                      <Image src="/images/instagram.svg" width={44} height={44} className="social" alt='' />
                      <Image src="/images/twitter.svg" width={44} height={44} className="social" alt='' />
                    </Col>
                  </Row>
                </Container>
              </Container>

            </Col>
          </Row>
        </Container>

      </Container>
    </>
  )
}

export default page
