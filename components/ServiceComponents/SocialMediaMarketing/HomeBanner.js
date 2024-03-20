import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ServiceBanner from '../../PropsShared/ServiceBanner'

const HomeBanner = () => {
    // const backgroundImage = "/services/seo_banner.jpg"

    const backgroundImage = {
        url: '/services/social_media_marketing_banner.jpg'
    };

    const mobileBackgroundImage = {
        url: '/service/mobile_service_banner/smm_banner.jpg'
    }

    const bannerSubHeading = "SOCIAL MEDIA"
    const bannerHeading = "MARKETING"
    return (
        <>
            <Container className="w-80" >
                <Row className="d-flex align-items-center">
                    <ServiceBanner backgroundImage={backgroundImage} mobileBackgroundImage={mobileBackgroundImage} bannerSubHeading={bannerSubHeading} bannerHeading={bannerHeading} />
                </Row>
            </Container>
        </>
    )
}

export default HomeBanner