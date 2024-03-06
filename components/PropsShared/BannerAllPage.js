import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const BannerAllPage = ({ backgroundImage, bannerHeading }) => {
    return (

        <>
            <div
                className='d-flex flex-column justify-content-center rounded-5'
                style={{
                    backgroundImage: `url(${backgroundImage.url})`, // Access the URL from the object
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '358px',
                }}
            >

                <Col lg={7} className="pl-8 d-flex flex-column ">
                    <h1 className="fs-21 fw-bold">{bannerHeading}</h1>
                </Col>
            </div>
        </>
    )
}

export default BannerAllPage