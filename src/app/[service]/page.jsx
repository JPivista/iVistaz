'use client'
import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import { Row, Col, Button } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

function page() {
  return (
    <>
      <Container className="bg-black pb-5 text-center" fluid>
        <Container className="w-80">
          <Row
            className="d-flex flex-column align-items-center"
            style={{ height: 300 + 'px' }}
          >
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <Link href="/">
                <Image
                  src="/images/ivista_logo.svg"
                  width={300}
                  height={80}
                  className="img-fluid"
                />
              </Link>
            </Col>
            <Col>
              <p className="text-white fw-bold fs-3 text-center">
                Here are some sales performances
                <br />
                we have achieved for our clients.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="w-80">
          <Row>
            <Col>
              <div class="iv-cards">
                <Image
                  src="/images/1.jpg"
                  class="card-img-top w-100 h-100 img-r"
                  alt="..."
                  width={200}
                  height={200}
                />
                <div class="card-body">
                  <h5 class="card-title">
                    DIGITAL MARKETING ROUNDUP JANUARY 2022
                  </h5>
                  <p class="card-text">
                    In the January version of Digital Marketing Roundup, we
                    provide the latest news and updates from the Digital
                    marketing indust…
                  </p>
                  <a href="#" class="iv-link">
                    Read more <FaArrowRight className="icons" size="25" />
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div class="iv-cards">
                <Image
                  src="/images/2.jpg"
                  class="card-img-top w-100 h-100 img-r"
                  alt="..."
                  width={200}
                  height={200}
                />
                <div class="card-body">
                  <h5 class="card-title">
                    DIGITAL MARKETING ROUNDUP DECEMBER 2021
                  </h5>
                  <p class="card-text">
                    In the December version of Digital Marketing Roundup, we
                    provide the latest news and updates from the Digital
                    marketing indus…
                  </p>
                  <a href="#" class="iv-link">
                    Read more <FaArrowRight className="icons" size="25" />
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div class="iv-cards">
                <Image
                  src="/images/3.jpg"
                  class="card-img-top w-100 h-100 img-r"
                  alt="..."
                  width={200}
                  height={200}
                />
                <div class="card-body">
                  <h5 class="card-title">
                    CROWDS VERSUS COMMUNITIES: A QUICK GUIDE FOR THE PERPLEXED
                  </h5>
                  <p class="card-text">
                    The wisdom of the crowd is one of the tenets of Web 2.0.
                    It’s the belief that the aggregated opinions of a large
                    group of people will be as g…
                  </p>
                  <a href="#" class="iv-link">
                    Read more <FaArrowRight className="icons" size="25" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5 d-flex justify-content-center">
          <Link className="btn-13" href="/ivistaz">
            Enter website
          </Link>
        </Container>
      </Container>
    </>
  )
}

export default page
