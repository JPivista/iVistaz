import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from '../PropsShared/BannerAllPage';

function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/jewelry_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/jewelry_mob_banner.jpg'
  }

  const bannerHeading = 'JEWELRY'

  return (
    <>
      <Container className="w-80" >
        <Row className="d-flex align-items-center">
          <BannerAllPage backgroundImage={backgroundImage} bannerHeading={bannerHeading} mobileBackgroundImage={mobileBackgroundImage} />
        </Row>
      </Container>

      <Container className="pt-4 w-80 pb-4 pt-4" >
        <p className="text-white para-text">The Indian jewellery industry is a celebrated sector that exhibits a remarkable ability to adapt to evolving trends in response to the ever-changing needs and preferences of its customers. We will help your business keep up with this dynamic industry.</p>
      </Container>
      <Container className="iv-bg w-80 banner p-5">
        <p className="text-white para-text">Creating and improving the connection between online visitors and sales, through end-to-end services, in order to boost online conversions and sales both in-store and online.</p>
        <p className="text-white para-text">Develop compelling and personalized online experiences that will strengthen customers’ loyalty to your brand, thus creating a more curated online experience.</p>
        <p className="text-white para-text">Curate keywords that will ensure a lower cost of acquisition.</p>
        <Container className="text-center">
          <Col className='d-flex flex-column align-items-center'>
            <Link className="btn-14" href="/contact-us">Contact us</Link>
          </Col>
        </Container>
      </Container>
      <Container className="mt-5 mb-5 w-80">
        <p className="fs-2 text-white">Here’s how we have helped appliance brands to win in the e-commerce channel:</p>
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
