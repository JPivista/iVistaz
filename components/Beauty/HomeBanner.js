import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from '../PropsShared/BannerAllPage';

function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/Beauty_and_wellness_banner.jpg'
  };

  const bannerHeading = 'BEAUTY & WELLNESS'

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/beauty_and_wellness_mob_banner.jpg'
  };

  return (
    <>
      <Container className="w-80" >
        <Row className="d-flex flex-column justify-content-start align-items-lg-center">
          <BannerAllPage backgroundImage={backgroundImage} bannerHeading={bannerHeading} mobileBackgroundImage={mobileBackgroundImage} />
        </Row>
      </Container>

      <Container className="pt-4 w-80 pb-4 pt-4" >
        <p className="text-white para-text">The beauty and wellness market has been growing at a rapid pace in India. The market in India<Link href="https://bwwellbeingworld.businessworld.in/article/How-Beauty-Wellness-Sector-Emerge-As-A-Thriving-Sector-In-India/18-10-2021-408985/" target='_blank' className='text-decoration-none'> was valued at INR 901.07 Bn in 2018 and is forecasted to reach INR 2,463.49 Bn by the year 2024</Link>.</p>
        <p className="text-white para-text">What is notable is that the beauty and wellness market today straddles the affluent as well as the middle class, the female as well as the male sexes, the synthetic brands as well as the organic brands. The sheer number of new entrants, especially in the ‘natural’, ‘vegan’ ‘safe’ and ‘sustainable’ categories is testimony to the exponential growth of the industry.</p>

      </Container>
      <Container className="iv-bg w-80 banner p-5">
        <p className="fw-bold text-white fs-3">To help your brand to stand out in a highly crowded market, we will:</p>
        <ul>
          <li className='industry-bullet'>
            <p className="text-white para-text">Develop and implement robust<span className='fw-bold'> search strategies</span> to drive your primary target audience to your brand store and marketplaces.</p>
          </li>
          <li className='industry-bullet'>
            <p className="text-white para-text">Create a robust<span className='fw-bold'> performance-based e-commerce model</span> with a monthly/quarterly goal of improving and sustaining your revenues.</p>
          </li>
          <li className='industry-bullet'>
            <p className="text-white para-text">Create a robust e-commerce channel that will not only improve revenues on your e-store and marketplaces but<span className='fw-bold'>  also drive customers to your offline stores</span>.</p>
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
