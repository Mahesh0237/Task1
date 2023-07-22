import { Anchor, Container, Divider, Grid, Group, Stack, Text } from '@mantine/core'
import React from 'react'
import imageone from '../assets/imageone.avif'
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react'
function Footer() {
    return (
        <Container mt={40}>
            <Grid>
                <Grid.Col md={3}>
                    <img src={imageone} alt='image' width={80} height={80} />
                </Grid.Col>
                <Grid.Col md={9}>
                    <Grid>
                        <Grid.Col xs={6} sm={4} md={4}>
                            <Stack>
                            <Text weight={500} td="underline">INFORMATION</Text>
                                <Anchor href='#' color='black' underline={false}>About Us</Anchor>
                                <Anchor href='#' color='black' underline={false}>Shop All</Anchor>
                                <Anchor href='#' color='black' underline={false}>FAQ</Anchor>
                                <Anchor href='#' color='black' underline={false}>Returns and Exchange</Anchor>
                                <Anchor href='#' color='black' underline={false}>Terms of Service</Anchor>
                                <Anchor href='#' color='black' underline={false}>Refund</Anchor>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col xs={6} sm={4} md={4}>
                            <Stack>
                            <Text weight={500} td="underline">SHOP NOW</Text>
                                <Anchor href='#' color='black' underline={false}>All Products</Anchor>
                                <Anchor href='#' color='black' underline={false}>Hemp Nutrition</Anchor>
                                <Anchor href='#' color='black' underline={false}>Cannabliss</Anchor>
                                <Anchor href='#' color='black' underline={false}>Skin Health</Anchor>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col xs={6} sm={4} md={4}>
                            <Stack>
                            <Text weight={500} td="underline">CONTACT US</Text>
                                <Anchor href='#' color='black' underline={false}> +91 91081 54394</Anchor>
                                <Anchor href='#' color='black' underline={false}>info@indiahemoorganics.com</Anchor>
                                <Anchor href='#' color='black' underline={false}>#41/2 Castle Street, Ashok
                                    Nagar, Bangalore - 560025
                                </Anchor>
                                <Anchor href='#' color='black' underline={false}>Skin Health</Anchor>
                                <Group>
                                    <Anchor href='#' className='test'><IconBrandFacebook size={18} color='white'/></Anchor>
                                    <Anchor href='#' className='test'><IconBrandInstagram size={18} color='white'/></Anchor>
                                    <Anchor href='#' className='test'><IconBrandTwitter size={18} color='white'/></Anchor>
                                    <Anchor href='#' className='test'><IconBrandLinkedin size={18} color='white'/></Anchor>
                                </Group>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Footer