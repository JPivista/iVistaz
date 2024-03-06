import React from 'react'

import SearchEngineMarketingComponents from '../../../../components/ServiceComponents/SearchEngineMarketingComponents'
import { Container } from 'react-bootstrap'

const page = () => {
    return (
        <>
            <Container fluid className="bg-white pb-5">
                <SearchEngineMarketingComponents />
            </Container>
        </>
    )
}

export default page