"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Header from '../HeaderBlack'
import CountUp from 'react-countup';
import MasteryArtsPerfomancePage from './MasteryArtsPerfomancePage'

function IhomePage() {


  const [isYearOfPerformance, setIsYearOfPerformance] = useState(1998);
  const [perfomance, setPerformance] = useState(0);
  const [isMainSectionVisible, setIsMainSectionVisible] = useState(true);
  const [isNextSectionVisible, setIsNextSectionVisible] = useState(false);

  // const nextSectionRef = useRef();

  function handleScrollToResults() {
    setIsMainSectionVisible(false); // Hide the main section
    setIsNextSectionVisible(true); // Show the next section
  }

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const performance = year - isYearOfPerformance;
    setPerformance(performance);
  }, [isYearOfPerformance]);


  // function handleScroll() {
  //   window.scroll({
  //     top: document.body.offsetHeight,
  //     left: 0,
  //     behavior: 'smooth',
  //   });

  // }

  return (
    <>
      <>
        {isMainSectionVisible && (
          <Container className="bg-black h-100vh" fluid>
            <Header />
            <Row className="d-flex flex-column align-items-center" style={{ height: '500px' }}>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-white fs-80 fw-bold">
                  <CountUp end={perfomance}
                    prefix=""
                    className="years"
                    suffix=" YEARS"
                  /></h2>
                <h2 className="text-white fs-80 fw-bold">OF PERFORMANCE</h2>
                <h2 className="text-white fs-80 fw-bold">BACKED BY</h2>
                <h2 className="text-white fs-80 fw-bold">MASTERY AND ART.</h2>
                <div className='icon-scroll' onClick={handleScrollToResults}></div>
              </Col>
            </Row>
          </Container>
        )}
        {isNextSectionVisible && <MasteryArtsPerfomancePage />}
      </>
    </>
  )
}

export default IhomePage

