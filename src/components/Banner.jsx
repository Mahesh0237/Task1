import React from 'react'
import { BackgroundImage, Center, Text, Box, Stack } from '@mantine/core';
import imagetwo from '../assets/banner.png'
import Navbar from './Navbar';
function Banner() {
    return (
        <BackgroundImage
            src={imagetwo}

        >
            <Navbar />
            <Text color='white' fs="italic" ta="center" size={60} pt={100} pb={100} weight={500}>Glossary</Text>
        </BackgroundImage>
    )
}

export default Banner