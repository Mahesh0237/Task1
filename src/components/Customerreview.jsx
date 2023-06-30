import { Container, Grid, Stack, Text } from '@mantine/core'
import React from 'react'
import Reviewcard from './shared/Reviewcard'
import { Carousel } from '@mantine/carousel'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
function Customerreview() {
    return (
        <Container mt={100} >
            <Grid p={0} m={0}>
                <Grid.Col sm={12} md={6} lg={6}>
                    <Stack>
                        <Text weight={700} size={40}> Review from customers</Text>
                        <Text size={14}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Text>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Carousel
                mx="auto"
                slideSize="40%"
                withIndicators
                height={250}
                slideGap={10}
                align="start"
                loop
                nextControlIcon={<IconArrowRight size={30} color='red' />}
                previousControlIcon={<IconArrowLeft size={30} color='red' />}
            >
                <Carousel.Slide><Reviewcard /></Carousel.Slide>
                <Carousel.Slide><Reviewcard /></Carousel.Slide>
                <Carousel.Slide><Reviewcard /></Carousel.Slide>
                <Carousel.Slide><Reviewcard /></Carousel.Slide>
                <Carousel.Slide><Reviewcard /></Carousel.Slide>
            </Carousel>
        </Container>
    )
}

export default Customerreview