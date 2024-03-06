import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ServiceBanner from '../../PropsShared/ServiceBanner'

const HomeBanner = () => {
    // const backgroundImage = "/services/seo_banner.jpg"

    const backgroundImage = {
        url: '/services/design_banner.jpg'
    };

    const bannerSubHeading = ""
    const bannerHeading = "DESIGN"
    return (
        <>
            <Container className="w-80" >
                <Row className="d-flex align-items-center">
                    <ServiceBanner backgroundImage={backgroundImage} bannerSubHeading={bannerSubHeading} bannerHeading={bannerHeading} />
                </Row>
            </Container>
        </>
    )
}

export default HomeBanner