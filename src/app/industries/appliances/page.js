"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import HeroBanner from '../../../../components/Appliances/HomeBanner'
import Header from '../../../../components/HeaderBlack'
import Footer from '../../../../components/Footer'


function page() {
  return (
    <Container fluid className="bg-black">
      <Header />
      <HeroBanner />
      <Footer />
    </Container>
  )
}

export default page
