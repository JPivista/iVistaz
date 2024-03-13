'use client'
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from '../PropsShared/BannerAllPage';

function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/Beauty_and_wellness_banner.jpg'
  };

  const bannerHeading = 'FASHION & ACCESSORIES'

  return (
    <>
      <Container className="w-80" >
        <Row className="d-flex align-items-center">
          <BannerAllPage backgroundImage={backgroundImage} bannerHeading={bannerHeading} />
        </Row>
      </Container>

      <Container className="pt-4 w-80 pb-4 pt-4" >
        <p className="text-white para-text">
          According to an article by the Times of India, the fashion industry<Link href="https://timesofindia.indiatimes.com/blogs/voices/indian-apparel-and-fashion-market-in-next-five-years-industry-growth-challenges-and-opportunities/" target='_blank' className='text-decoration-none'> is poised to grow into a $106 billion industry by 2026</Link>, bringing up the Indian fashion market on maps. We will help you to capitalize on this market opportunity with robust digital solutions that include:</p>

      </Container>
      <Container className="iv-bg w-80 banner p-5">
        <ul>
          <li className='industry-bullet'>
            <p className="text-white para-text">Bridging the gap between online visitors and sales (in-store and online) both on your e-store, as well as on marketplaces and<span className='fw-bold'> increasing online conversions</span></p>
          </li>
          <li className='industry-bullet'>
            <p className="text-white para-text">
              Creating<span className='fw-bold'> strong curated online experiences</span> for your customers to strengthen brand loyalty
            </p>
          </li>
          <li className='industry-bullet'>
            <p className="text-white para-text">
              Ensuring a<span className='fw-bold'> consistent social media engagement</span> with your customers.
            </p>
          </li>
        </ul>
        <Container className="text-center">
          <Col className='d-flex flex-column align-items-center'>
            <Link className="btn-14" href="/contact-us">Contact us</Link>
          </Col>
        </Container>
      </Container>
      <Container className="mt-5 mb-5 w-80">
        <p className="fs-2 text-white">Here’s how we helped beauty and wellness brands secure a winning edge:</p>
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
