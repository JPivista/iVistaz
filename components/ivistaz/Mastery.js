"use client"
import Link from 'next/link'
import React from 'react';
import { Container } from 'react-bootstrap'

function Mastery({ handleScrollToResults }) {

  return (
    <Container className="w-80 pt-4 mb-5">
      <Container>
        <h1 className="fs-80 fw-bold">Mastery</h1>
      </Container>
      <Container>
        <p className="fs-20 fw-bold">
          Where mastery is not simply a byproduct of genius or talent, but a result of experience and focus in the digital marketing landscape. With over 26 years of experience, we have witnessed the evolution of search engines, even predating the dominance of Google.
        </p>
      </Container>
      <Container>
        <Link className="btn btn-11" href="/mastery">Know More</Link>
      </Container>
    </Container>
  )
}

export default Mastery
