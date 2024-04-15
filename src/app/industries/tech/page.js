"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import HeroBanner from '../../../../components/Tech/HomeBanner'
import Header from '../../../../components/HeaderBlack'


function page() {
  return (
    <Container fluid className="bg-black pb-5">
      <Header />
      <HeroBanner />
    </Container>
  )
}

export default page
