"use client"
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import { Row, Col, Button } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'
import Header1 from '../../../components/HeaderBlack';

import ConfigData from '../../../config'

function page() {

  const siteUrl = ConfigData.wpApiUrl;

  const [data, dataSet] = useState();

  // console.log("siteUrl:", siteUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${siteUrl}/blogs`);
        const data = await response.json();
        dataSet(data);
        // console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <Container className="bg-black pb-5" fluid>
        <Header1 />
        <Container className="w-80">
          <h1 className="fs-21 text-white fw-bold">BLOGS</h1>
          <p className="fw-bold text-white fs-3">Stay Informed with Our Latest Insights</p>
          <p className="text-white para-text">Explore our blog page to gain valuable insights, industry trends, and expert advice on digital marketing, helping you stay ahead of the curve and make informed decisions for your business.</p>
        </Container>

        <Container className="w-80">
          <Row>
            <Col>
              <div class="iv-cards">
                <Image src="/images/1.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
                <div class="card-body">
                  <h5 class="card-title">DIGITAL MARKETING ROUNDUP JANUARY 2022</h5>
                  <p class="card-text">In the January version of Digital Marketing Roundup, we provide the latest news and updates from the Digital marketing indust…</p>
                  <a href="#" class="iv-link">Read more <FaArrowRight className="icons" size="25" /></a>
                </div>
              </div>
            </Col>
            <Col>
              <div class="iv-cards">
                <Image src="/images/2.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
                <div class="card-body">
                  <h5 class="card-title">DIGITAL MARKETING ROUNDUP DECEMBER 2021</h5>
                  <p class="card-text">In the December version of Digital Marketing Roundup, we provide the latest news and updates from the Digital marketing indus…</p>
                  <a href="#" class="iv-link">Read more <FaArrowRight className="icons" size="25" /></a>
                </div>
              </div>
            </Col>
            <Col>
              <div class="iv-cards">
                <Image src="/images/3.jpg" class="card-img-top w-100 h-100 img-r" alt="..." width={200} height={200} />
                <div class="card-body">
                  <h5 class="card-title">CROWDS VERSUS COMMUNITIES: A QUICK GUIDE FOR THE PERPLEXED</h5>
                  <p class="card-text">The wisdom of the crowd is one of the tenets of Web 2.0. It’s the belief that the aggregated opinions of a large group of people will be as g…</p>
                  <a href="#" class="iv-link">Read more <FaArrowRight className="icons" size="25" /></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </Container>
    </>
  )
}

export default page
