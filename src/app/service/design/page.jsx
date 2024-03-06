import React from 'react'

import DesignComponents from '../../../../components/ServiceComponents/DesignComponents'
import { Container } from 'react-bootstrap'

const page = () => {
    return (
        <>
            <Container fluid className="bg-white pb-5">
                <DesignComponents />
            </Container>
        </>
    )
}

export default page