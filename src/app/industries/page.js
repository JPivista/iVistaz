"use client"
import React from 'react'
import HomeBanner from '.././../../components/Industries/HomeBanner';
import { Container } from 'react-bootstrap';
import Header from '../../../components/HeaderBlack'

function page() {
  return (
    <>
      
<Container fluid className="iv-bg pb-5 ">
<Header/>
<Container className="w-80"><h1 className="text-offwhite fs-70 fw-bold">PERFORMANCE</h1> </Container>

<HomeBanner />
      </Container>
</>
      
  )
}

export default page
