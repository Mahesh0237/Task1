import { Button, Card, Container, Divider, Grid, Image, List, Stack, Text } from '@mantine/core'
import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'

function Banner() {
    return (
        <Container pt={25} pb={25} >
            <Grid mt={70} mb={70}>
                <Grid.Col sm={12} md={6} lg={6} xl={6}>
                    <Stack pr={20}>
                        <Text size={40} weight={700} color='white'>Learn how to launch a successfull podcast </Text>
                        <Text color='white' size={12}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                        <Button className='signupbtn' color='white' mt={20} size='lg' >sign up now</Button>
                    </Stack>
                </Grid.Col>
                <Grid.Col sm={12} md={6} lg={6} xl={6} >
                    <div>
                        <Image width={400} height={200} radius="md" mt={30} src={image2} alt='image2' style={{ position: "relative" }} />
                        <Image width={400} height={200} radius="md" src={image1} alt="image1" className='bannerone' />

                        <div className='bannerdot' style={{ marginTop: "70px" }}>
                            <ul >
                                <li className='list-item'></li>
                                <li className='list-item'></li>
                                <li className='list-item'></li>
                                <li className='list-item'></li>
                                <li className='list-item'></li>
                                <li className='list-item'></li>
                                <li className='list-item'></li>
                                <li className='list-item'></li>
                            </ul>
                        </div>
                    </div>

                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Banner