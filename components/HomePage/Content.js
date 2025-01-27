'use client'
import React, { useEffect, useState, useRef } from "react";
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const HomePage = () => {
  const myDivRef = useRef(null);
  const [hname, setHname] = useState('px');
  const [hvalue, setHvalue] = useState('500');

  function handleScroll() {
    myDivRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Container className="iv-bg  h-100vh" fluid>
        <Row className="d-flex flex-column align-items-center" style={{ height: hvalue + hname }}>

          <Col className="d-flex flex-column justify-content-center align-items-center">
            <Image src="/images/ivista_logo.svg" width={300} height={80} className="img-fluid" alt="" />
          </Col>

          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white fs-60 fw-bold">WHAT DOES</h2>
            <div class=" text-white fs-70 fw-bold">
              PERFORMANCE
            </div>
            <h2 className="text-white fs-60 fw-bold"> MEAN TO YOU?</h2>
          </Col>

          <Col className="d-flex flex-column justify-content-center align-items-center">
            <div className='icon-scroll mb-1' onClick={handleScroll}>
            </div>
            <div class="scroll-down"></div>
          </Col>
        </Row>
      </Container>

      <Container className="iv-bg  h-100vh" fluid ref={myDivRef}>
        <Row className="d-flex flex-column align-items-center justify-content-between h-100">
          <Col className="d-flex flex-column justify-content-center align-items-center mt-4">
            <Image src="/images/robot_1.svg" width={200} height={100} alt="" />
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-white fs-60 fw-bold">WHAT DOES</h2>
              <div class="animate seven text-white fs-70 fw-bold">
                <span>P</span><span>E</span><span>R</span><span>F</span>
                <span>O</span><span>R</span><span>M</span><span>A</span><span>N</span><span>C</span><span>E</span>
              </div>
              <h2 className="text-white fs-60 fw-bold"> MEAN TO YOU?</h2>
            </Col>
          </Col>

          <Col className="d-flex flex-column justify-content-center align-items-center">
            <Row className="d-flex flex-lg-row flex-column align-items-center justofy-content-end g-3 custom-home-row">
              <Col className="overflow-hidden blurb-ripple-out-wrap w-100 bg-danger">
                <Link href="/sales" className="btn h-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
                  <Image src="/mainpage/online_sale.svg" alt="" width={30} height={30} />
                  <span>Online Sales</span>
                </Link>
              </Col>
              <Col className="overflow-hidden blurb-ripple-out-wrap">
                <Link href="/leads" className="btn h-btn blurb-ripple-out  d-flex flex-row gap-2 justify-content-center" >
                  <Image src="/mainpage/leads.svg" alt="" width={30} height={30} />
                  <span>Leads</span>
                </Link>
              </Col>
              <Col className="overflow-hidden blurb-ripple-out-wrap" >
                <Link href="/traffic" className="btn h-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
                  <Image src="/mainpage/traffic.svg" alt="" width={30} height={30} />
                  <span>Traffic</span>
                </Link>
              </Col>
            </Row>

            <Row className="d-flex flex-lg-row flex-column align-items-center g-3 pt-3 custom-home-row">
              <Col className="overflow-hidden blurb-ripple-out-wrap" >
                <Link href="/traffic" className="btn h1-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
                  <Image src="/mainpage/keyword.svg" alt="" width={30} height={30} />
                  <span>Keyword Ranking</span>
                </Link>
              </Col>
              <Col className="overflow-hidden blurb-ripple-out-wrap d-flex flex-row gap-2 justify-content-center">
                <Link href="/traffic" className="btn h1-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
                  <Image src="/mainpage/engagement.svg" alt="" width={30} height={30} />
                  <span>Engagement</span>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage



// 'use client'
// import React, { useEffect, useState, useRef } from "react";
// import { Container } from 'react-bootstrap'
// import Image from 'next/image'
// import { Row, Col } from 'react-bootstrap'
// import Link from 'next/link'
// import { FaChartLine, FaChartBar, FaUserPlus, FaRocketchat, FaUsers, FaRegHandPointer, FaDollarSign, FaRegCheckCircle, FaUserFriends } from "react-icons/fa";
// import gsap from 'gsap';

// const HomePage = () => {
//   const myDivRef = useRef(null);
//   const [menu, setMenu] = useState(false);
//   const [logo, setLogo] = useState(false);
//   const [hname, setHname] = useState('px');
//   const [hvalue, setHvalue] = useState('500');

//   function handleScroll() {
//     //console.log('clicked')
//     setLogo(true)
//     setMenu(true)
//     setHname('vh')
//     setHvalue('100')
//   }

//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.from(myDivRef.current, {
//       y: '100%', // Initial position (bottom)
//       duration: 1, // Animation duration
//       ease: 'power3.inOut', // Easing function
//     });

//     return () => {
//       tl.kill();
//     };
//   }, []);

//   return (
//     <>
//       <Container className="iv-bg  h-100vh" fluid>
//         <Row className="d-flex flex-column align-items-center" style={{ height: hvalue + hname }}>
//           {
//             logo ?
//               (
//                 <Col className="d-flex flex-column justify-content-center align-items-center ">
//                   <Image src="/images/robot_1.svg" width={200} height={100} alt="" />
//                 </Col>
//               )
//               :
//               (
//                 <Col className="d-flex flex-column justify-content-center align-items-center">
//                   <Image src="/images/ivista_logo.svg" width={300} height={80} className="img-fluid" alt="" />
//                 </Col>
//               )
//           }
//           {
//             menu ? (
//               <>
//                 <Col className="d-flex flex-column justify-content-center align-items-center">
//                   <h2 className="text-white fs-60 fw-bold">WHAT DOES</h2>
//                   <div class=" text-white fs-70 fw-bold">
//                     PERFORMANCE
//                   </div>
//                   <h2 className="text-white fs-60 fw-bold"> MEAN TO YOU?</h2>
//                 </Col>

//                 <Col ref={myDivRef} className="d-flex flex-column justify-content-center align-items-center pt-5">
//                   <Row className="d-flex flex-lg-row flex-column align-items-center justofy-content-end g-3 custom-home-row">
//                     <Col className="overflow-hidden blurb-ripple-out-wrap w-100 bg-danger">
//                       <Link href="/sales" className="btn h-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
//                         <Image src="/mainpage/online_sale.svg" alt="" width={30} height={30} />
//                         <span>Online Sales</span>
//                       </Link>
//                     </Col>
//                     <Col className="overflow-hidden blurb-ripple-out-wrap">
//                       <Link href="/leads" className="btn h-btn blurb-ripple-out  d-flex flex-row gap-2 justify-content-center" >
//                         <Image src="/mainpage/leads.svg" alt="" width={30} height={30} />
//                         <span>Leads</span>
//                       </Link>
//                     </Col>
//                     <Col className="overflow-hidden blurb-ripple-out-wrap" >
//                       <Link href="/traffic" className="btn h-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
//                         <Image src="/mainpage/traffic.svg" alt="" width={30} height={30} />
//                         <span>Traffic</span>
//                       </Link>
//                     </Col>
//                   </Row>

//                   <Row className="d-flex flex-lg-row flex-column align-items-center g-3 pt-3 custom-home-row">
//                     <Col className="overflow-hidden blurb-ripple-out-wrap" >
//                       <Link href="/traffic" className="btn h1-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
//                         <Image src="/mainpage/keyword.svg" alt="" width={30} height={30} />
//                         <span>Keyword Ranking</span>
//                       </Link>
//                     </Col>
//                     <Col className="overflow-hidden blurb-ripple-out-wrap d-flex flex-row gap-2 justify-content-center">
//                       <Link href="/traffic" className="btn h1-btn blurb-ripple-out d-flex flex-row gap-2 justify-content-center">
//                         <Image src="/mainpage/engagement.svg" alt="" width={30} height={30} />
//                         <span>Engagement</span>
//                       </Link>
//                     </Col>
//                   </Row>
//                 </Col>
//               </>
//             ) : (
//               <Col className="d-flex flex-column justify-content-center align-items-center">
//                 <h2 className="text-white fs-60 fw-bold">WHAT DOES</h2>
//                 <div class="animate seven text-white fs-70 fw-bold">
//                   <span>P</span><span>E</span><span>R</span><span>F</span>
//                   <span>O</span><span>R</span><span>M</span><span>A</span><span>N</span><span>C</span><span>E</span>
//                 </div>
//                 <h2 className="text-white fs-60 fw-bold"> MEAN TO YOU?</h2>

//                 <div className='icon-scroll mb-1' onClick={handleScroll}>
//                 </div>
//                 <div class="scroll-down"></div>

//               </Col>
//             )
//           }
//         </Row>
//       </Container>
//     </>
//   )
// }

// export default HomePage