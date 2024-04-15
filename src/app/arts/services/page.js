"use client"
import React from 'react'
import Header1 from '../../../../components/HeaderBlack'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';
import Image from 'next/image'
function page() {
  return (
<>
<Container fluid className="mb-4">
        <Header1 />
        <img src="/images/h-icon.svg" className="header-icon"/>
              <Container className="w-80">
            <h1 className="fs-70 fw-bold">ART</h1>                   
              </Container>

<Container className="bg-black banner w-80 pb-5" >
<Row className="d-flex align-items-start">
<Col lg={12} className="pl-8 pt-5">        
<h1 className="fs-21 fw-bold text-white i-link">Services</h1>
<p className="para-text text-white">At the core of everything we do lies the art of transforming exceptional services into extraordinary results. We are dedicated to crafting and curating tailored solutions that exceed your expectations. Whether it’s a comprehensive package or a single service, we’re here to help brands achieve more than what they wish for. And the best part? We have a <Link href="" className="red">performance-focused model</Link>. This means we get paid only when we deliver results.</p>
</Col>
<Col lg={12} className="pl-8 pt-5">        
<Link className="fs-2 fw-bold  r-link" href="/arts/services/design-development">Development And Design</Link>
</Col>
<Col lg={12} className="pl-8 pt-5">        
<Link className="fs-2 fw-bold r-link" href="/arts/services/digital-marketing">Digital Marketing</Link>
</Col> 
<Col lg={12} className="pl-8 pt-5">        
<Link className="fs-2 fw-bold r-link" href="/arts/services/content-development-design">Content Development And Design</Link>
</Col>                     
</Row>
</Container>

</Container>
    </>
  )
}

export default page