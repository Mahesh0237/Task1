
import React from 'react'
import { Container, Text } from '@mantine/core'
function Header() {
    return (
        <div style={{ backgroundColor: "#7a3199" }}>
        <Container  >
            <div className="navbar">
                <Text size={15} weight={500} ml={5}>LOGO</Text>
                <ul >
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/review">Review</a></li>
                </ul>
            </div>
        </Container>
        </div>
    )
}

export default Header