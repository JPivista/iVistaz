import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'
import BannerAllPage from '../PropsShared/BannerAllPage';

function HeroBanner() {

  const backgroundImage = {
    url: '/industrie/tech_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/tech_mob_banner.jpg'
  }

  const bannerHeading = 'TECH/IT'

  return (
    <>
      <Container className="w-80" >
        <Row className="d-flex align-items-center">
          <BannerAllPage backgroundImage={backgroundImage} bannerHeading={bannerHeading} mobileBackgroundImage={mobileBackgroundImage} />
        </Row>
      </Container>

      <Container className="pt-4 w-80 pb-4 pt-4" >
        <p className="text-white para-text">The evolving digital trends and technologies are causing a tectonic shift in digital marketing. In this scenario, iVistaz will help you keep pace and have a firm grasp on the evolving digital ecosystem to give you measurable ROI for your digital spending. Our services include:</p>


      </Container>
      <Container className="iv-bg w-80 banner p-5">
        <ul>
          <li className='industry-bullet'>
            <p className="text-white para-text">Assess the current or redefine<span className='fw-bold'> positioning, messaging and narrative</span> for value creation.</p>
          </li>
          <li className='industry-bullet'>
            <p className="text-white para-text">Create pull for your website and offerings with<span className='fw-bold'> engaging content and SEO</span>.</p>
          </li>
          <li className='industry-bullet'>
            <p className="text-white para-text">Generate<span className='fw-bold'> Marketing Qualified Leads</span> (MQLs) with email marketing, SEM and SMM.</p>
          </li>
          <li className='industry-bullet'>
            <p className="text-white para-text"><span className='fw-bold'>Enhance the web experience</span> for your customers with engaging UX/UI developed on a robust tech platform.</p>
          </li>
        </ul>
        <Container className="">
          <Col className='d-flex flex-column align-items-center mt-3'>
            <Link className="btn-14" href="/contact-us">Contact us</Link>
          </Col>
        </Container>
      </Container>
      <Container className="mt-5 mb-5 w-80">
        <p className="fs-2 text-white">Here are some instances where our expertise and cutting-edge solutions have propelled Tech/IT companies to success:</p>
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
      <Container className="w-80 mt-5 d-flex justify-content-center mb-5">
        <Link href="/case-studies" className="btn-13">View Case Studies</Link>
      </Container>
    </>
  )
}

export default HeroBanner
