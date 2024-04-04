"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

function Arts() {

    return (
        <>
            <Container className="bg-black mb-5" fluid>
                <Container className="w-80 pt-4 pb-5">
                    <h1 className="fs-80 fw-bold text-white">Art</h1>
                </Container>
                <Container className="w-80">
                    <p className="fs-20 fw-bold text-white-50 hover-paragraph" >
                        Since then, we’ve been crafting and creating art that captivates and resonates with our clients and their audience. As the digital world continues to evolve, we have kept pace, adapting our strategies to the ever-changing landscape.
                    </p>
                </Container>
                <Container className="w-80 pb-5">
                    <Link className="btn btn-12" href="/arts">Know More</Link>
                </Container>
            </Container>

        </>
    )
}

export default Arts
