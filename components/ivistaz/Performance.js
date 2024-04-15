"use client"
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

function Performance() {
    return (
      <>
<Container className="mb-5" fluid>
          <Container className="w-80 pt-4 pb-5">
              <h1 className="fs-80 fw-bold red">Performance</h1>
          </Container>
          <Container className="w-80">
              <p className="fs-20 fw-bold red-50">
              Our deep understanding of the digital realm has allowed us to create and deliver performance beyond expectations. And because of this, our clients have entrusted us with their digital marketing needs for an average of 7 years—a testament to the enduring relationships we forge.
              </p>
          </Container>
          <Container className="w-80 pb-5">
              <Link className="btn btn-11" href="/performance">Know More</Link>
          </Container>
      </Container>
     
      </>
  )
}

export default Performance
