
"use client"
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image';
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import Header1 from '../../../components/HeaderBlack';


  
function HeroBanner() {

    return (
        <>
            <Container className="bg-black" fluid>
            <Header1/>
                <Container className="w-80">
                <h1 className="fs-21 fw-bold text-white">CASE STUDIES</h1>
                </Container>
                <Container className="w-80">
                <h3 className="text-white fw-semibold poppins">Performance, down to a science</h3>
                    <p className="para-text text-white">Dive into our collection of compelling case studies that showcase how our strategies and expertise have propelled businesses to achieve remarkable results in the digital realm.</p>
                </Container>
                <Container className="w-80">

<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="ms-2 me-auto">
      <div class="fw-bold fs-3 m-3">Case Studies 1</div>
      <p className="case-text m-3">B2B Email Marketing – Emails that Get You the Conversations</p>
    </div>
    <FaArrowRight size={30} className="case-icon"/>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="ms-2 me-auto">
      <div class="fw-bold fs-3 m-3">Case Studies 2</div>
      <p className="case-text m-3">Generating Qualified Leads with B2B Email Marketing</p>
    </div>
    <FaArrowRight size={30} className="case-icon"/>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="ms-2 me-auto">
      <div class="fw-bold fs-3 m-3">Case Studies 3</div>
      <p className="case-text m-3">This case study showcases our solution for The Oberoi Hotels and Resort in India for callenges they were facing on digital</p>
    </div>
     <FaArrowRight size={30} className="case-icon"/>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="ms-2 me-auto">
      <div class="fw-bold fs-3 m-3">Case Studies 3</div>
      <p className="case-text m-3">This case study showcases our solution for The Oberoi Hotels and Resort in India for callenges they were facing on digital</p>
    </div>
     <FaArrowRight size={30} className="case-icon"/>
  </li>
</ul>
</Container>
</Container>
        
</>
  )
}

export default HeroBanner
