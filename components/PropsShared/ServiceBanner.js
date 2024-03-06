import React from 'react'
import { Col } from 'react-bootstrap'

const ServiceBanner = ({ backgroundImage, bannerHeading, bannerSubHeading }) => {
    return (
        <>

            <div
                cla
                style={{
                    backgroundImage: `url(${backgroundImage.url})`, // Access the URL from the object
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '358px',
                }}
                className='d-flex flex-column justify-content-end rounded-5'
            >

                <Col lg={7} className="pl-8 d-flex flex-column pb-5">
                    <h1 className="fs-21 fw-bold text-white lh-1">
                        <span className="fs-19 fw-bold text-white mb-0">
                            {bannerSubHeading}
                        </span> {' '}
                        {bannerHeading}
                    </h1>
                </Col>
            </div>
        </>
    )
}

export default ServiceBanner