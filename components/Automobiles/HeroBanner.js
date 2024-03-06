import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from '../PropsShared/BannerAllPage';

function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/automobile_banner.jpg'
  };

  const bannerHeading = 'AUTOMOBILES'

  return (
    <>
      <Container className=" w-80" >
        <Row className="d-flex align-items-center">
          <BannerAllPage backgroundImage={backgroundImage} bannerHeading={bannerHeading} />
        </Row>
      </Container>
      <Container className="pt-4 w-80 pb-4 pt-4" >
        <p className="text-white para-text"><Link href='/pdf/e6b37619-1d69-4cad-b1ed-49d31f8e3719.pdf' target='_blank' className='text-decoration-none cursor-pointer'>According to the Ministry of Heavy Industries</Link>, Government of India, the automotive industry is likely to see significant transformations at a global level in the next ten years. Among the notable changes will be the shift of growth in demand for automobiles from developed nations to developing nations (mainly BRICS).</p>
        <p className="text-white para-text">India aims to double its auto industry size to Rs. 15 lakh crores by end of the year 2024 (Source: Ministry of Heavy Industries).</p>

      </Container>
      <Container className="iv-bg w-80 banner p-5">
        <p className="fw-bold text-white fs-3">
          Your focus would be on strengthening your market share in India by growing your sales and dealer network. iVistaz can support you in this journey and help
        </p>
        <ul>
          <li className='industry-bullet'>
            <p className="text-white para-text">
              Your brand to<span className='fw-bold'> increase online enquiries, bookings and sales conversion ratios</span>.
            </p>
          </li>
          <li className='industry-bullet'>
            <p className="text-white para-text"> To increase your<span className='fw-bold'>  qualified leads and sales</span> conversion ratios for you directly and for your dealers.
            </p>
          </li>
        </ul>
        <Container className="">
          <Col className='d-flex flex-column align-items-center'>
            <Link className="btn-14" href="/contact-us">Contact us</Link>
          </Col>
        </Container>
      </Container>
      <Container className="mt-5 mb-5 w-80">
        <p className="fs-2 text-white">Here’s how we have helped brands win over the dynamic and highly competitive industry:</p>
      </Container>
      <Container className="w-80">
        <Row>
          <Col>
            <div class="iv-cards">
              <Image src="/images/1.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
              <div class="card-body">
                <h5 class="card-title">DIGITAL MARKETING ROUNDUP JANUARY 2022</h5>
                <p class="card-text">In the January version of Digital Marketing Roundup, we provide the latest news and updates from the Digital marketing indust…</p>
                <a href="#" class="iv-link">Read more <FaArrowRight className="icons" /></a>
              </div>
            </div>
          </Col>
          <Col>
            <div class="iv-cards">
              <Image src="/images/2.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
              <div class="card-body">
                <h5 class="card-title">DIGITAL MARKETING ROUNDUP DECEMBER 2021</h5>
                <p class="card-text">In the December version of Digital Marketing Roundup, we provide the latest news and updates from the Digital marketing indus…</p>
                <a href="#" class="iv-link">Read more <FaArrowRight className="icons" /></a>
              </div>
            </div>
          </Col>
          <Col>
            <div class="iv-cards">
              <Image src="/images/3.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
              <div class="card-body">
                <h5 class="card-title">CROWDS VERSUS COMMUNITIES: A QUICK GUIDE FOR THE PERPLEXED</h5>
                <p class="card-text">The wisdom of the crowd is one of the tenets of Web 2.0. It’s the belief that the aggregated opinions of a large group of people will be as g…</p>
                <a href="#" class="iv-link">Read more <FaArrowRight className="icons" /></a>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
      <Container className="w-80 mt-5 d-flex justify-content-center">
        <Link href="/case-studies" className="btn-13">View Case Studies</Link>
      </Container>
    </>
  )
}

export default HeroBanner
