import React from 'react'
import styled from "styled-components"

import { Container, Section } from "./layoutComponents"

const AboutGrid = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 57em) {
        flex-direction: column;
    }

    > * {
        margin-left: 2em;
    }

`

const GridImg = styled.article`
    text-align: center;

    img {
        width: 150px;
        border-radius: 50%;
    }

    @media screen and (max-width: 57em) {
        border-bottom: 1px solid var(--txt-dark);
    }
`

const GridBio = styled.article`
    text-align: left;
    max-width: 70ch;
`

const AboutText = styled.div`
    text-align: center;
`

export default function Bio (props) {
    return (
        <Section>
            <Container>
                <AboutText>
                    <h2>About me</h2>
                </AboutText>
                <AboutGrid className="spacing">
                    <GridImg>
                        <img src="" alt="headshot"/>
                    </GridImg>
                    <GridBio className="spacing">
                        <p>this is my bio</p>
                        <div>
                            <p>occupation</p>
                            <p>my name</p>
                            <p>education</p>
                        </div>
                    </GridBio>
                </AboutGrid>
            </Container>
        </Section>
    )
}