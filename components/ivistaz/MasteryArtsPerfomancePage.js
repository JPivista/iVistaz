import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import '../../src/app/globals.css'
import Mastery from './Mastery';
import Arts from './Arts';
import Performance from './Performance';
import Footer from '../Footer';
import Header1 from '../HeaderBlack';

const MasteryArtsPerfomancePage = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
            setIsMobile(window.innerWidth <= 768); // Set isMobile based on viewport width
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextSectionRef = useRef();
    const nextSectionRef1 = useRef();
    const nextSectionRef2 = useRef();

    function handleScrollToResults() {
        nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    function handleScrollToResults1() {
        nextSectionRef1.current.scrollIntoView({ behavior: "smooth" });
    }
    function handleScrollToResults2() {
        nextSectionRef2.current.scrollIntoView({ behavior: "smooth" });
    }

    const roateText = {
        transform: isMobile ? 'rotate(0deg)' : 'rotate(270deg)',
        // transition: 'transform 150ms ease', // smooth transition
    }
    return (
        <>
            <Container fluid className='bg-black'>
                {/* <Header1 /> */}
                <Row className='h-100vh d-flex flex-lg-row flex-column'>
                    <Col className={`d-flex flex-column p-0 ${isMobile ? '' : 'border-end'} z-1`} lg={6} style={{ height: isMobile ? '66.66vh' : '' }}>
                        <Col className='mastery h-100 p-0 border-bottom d-flex flex-column w-100'>
                            <div onClick={handleScrollToResults} className='h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer'>
                                <div>
                                    <h1 className='text-white fs-70 fw-bold'> MASTERY </h1>
                                </div>
                                <div className='show-mastery'>
                                    <Image src="/home/masery.svg" width={100} height={10} alt='' className='w-100' />
                                </div>
                            </div>
                        </Col>

                        <Col className={`art p-0 d-flex justify-content-center align-items-center z-1 ${isMobile ? 'border-bottom' : ''}`}>
                            <div onClick={handleScrollToResults1} className='h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer'>
                                <div>
                                    <h1 className='text-white fs-70 fw-bold art-txt'> ART </h1>
                                </div>
                                <div className='show-art'>
                                    <Image src="/home/art.svg" width={100} height={10} alt='' className='w-100' />
                                </div>
                            </div>
                        </Col>
                    </Col>

                    <Col className='p-0 z-0' lg={6} style={{ height: isMobile ? '33.33vh' : '' }}>
                        <Col className='perfomance d-flex flex-column justify-content-center align-items-center h-100 p-0 z-0'>
                            <div onClick={handleScrollToResults2} className='h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer'>
                                <Col className='p-0 d-flex flex-column justify-content-center align-items-center w-100 text-decoration-none' style={roateText}>
                                    <div className='d-flex'>
                                        <h1 className='text-white fs-70 fw-bold'> PERFORMANCE </h1>
                                    </div>
                                    <div className='show-perfomance'>
                                        <Image src="/home/masery.svg" width={100} height={10} alt='' className='w-100' />
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container >

            <div ref={nextSectionRef}>
                <Mastery />
            </div>

            <div ref={nextSectionRef1}>
                <Arts />
            </div>

            <div ref={nextSectionRef2}>
                <Performance />
            </div>

            <Footer />
        </>
    );
}

export default MasteryArtsPerfomancePage;
