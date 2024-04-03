import React from 'react'

import VideosComponets from '../../../../components/ServiceComponents/VideosComponents'
import { Container } from 'react-bootstrap'

const page = () => {
    return (
        <>
            <Container fluid className="bg-white p-0">
                <VideosComponets />
            </Container>
        </>
    )
}

export default page