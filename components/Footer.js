"use client"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <>
            <Container fluid className="iv-bg">
                <Container className="w-80 p-12" >
                    <Row>
                        <Col className="f-head" lg={4}>SERVICES</Col>
                        <Col className="f-head" lg={2}>SOLUTIONS</Col>
                        <Col className="f-head" lg={3}>INDUSTRIES</Col>
                        <Col className="f-head" lg={3}>ABOUT IVISTAZ</Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="bg-black">
                <Container className="w-80 p-12" >
                    <Row>
                        <Col className="footer" lg={4}>
                            <ul>
                                <li>Web design & development</li>
                                <li>Search Engine Optimization</li>
                                <li>Search Engine Marketing</li>
                                <li>Social Media - organic</li>
                                <li>Social Media Marketing</li>
                                <li>Content development (B2B & B2C)</li>
                                <li>Design</li>
                                <li>Videos</li>
                            </ul>
                        </Col>
                        <Col className="footer" lg={2}>
                            <ul>
                                <li>Value Creation</li>
                                <li>Traffic Lead-gen</li>
                                <li>Online Sales</li>
                                <li>Experience</li>
                            </ul>
                        </Col>
                        <Col className="footer" lg={3}>
                            <ul>
                                <li>Tech</li>
                                <li>Hospitality</li>
                                <li>Appliances</li>
                                <li>Aviation</li>
                                <li>Not-for-profit</li>
                                <li>Automobiles</li>
                                <li>Jewelry</li>
                                <li>Beauty & Wellness</li>
                                <li>Fashion & Accessories</li>
                            </ul>
                        </Col>
                        <Col className="footer" lg={3}>
                            <ul>
                                <li>Performance Focus</li>
                                <li>Company</li>
                                <li>Team</li>
                                <li>Contact</li>
                            </ul>
                            <h2 className="f-title">Case Studies Blog</h2>
                            <ul>
                                <li>Privacy</li>
                                <li>Statement</li>
                                <li>Disclaimer</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="iv-grey pt-2 pb-2" fluid>
                <Container className="text-center">
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
            <Container className="bg-black pt-1 pb-1" fluid>
                <Container className="text-center copyright">
                    <p>© {currentYear} i-Vista Web Solutions Pvt. Ltd.</p>
                </Container>
            </Container>
        </>
    )
}

export default Footer
