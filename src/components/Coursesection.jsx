import { Button, Card, Container, Grid, Image, Stack, Text } from '@mantine/core'
import React from 'react'
import image3 from '../assets/pngwing 1.png'
function Coursesection() {
    return (
        <>
            <Container>
                <Grid mt={100}>
                    <Grid.Col sm={12} md={6} lg={6} xl={6}>
                        <Grid>
                            <Grid.Col sm={12} md={6} lg={6} xl={6}>
                                <Card style={{ border: "0.5px solid var(--secondary, #7A3199)", borderRadius: "10px", }}>
                                    <Text size={20} weight={700}>Interactive Features</Text>
                                    <Text size={12} pt={10}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</Text>
                                </Card>
                            </Grid.Col>
                            <Grid.Col sm={12} md={6} lg={6} xl={6} mt={18}>
                                <Card style={{ border: "0.5px solid var(--secondary, #7A3199)", borderRadius: "10px", }}>
                                    <Text size={20} weight={700}>Interactive Features</Text>
                                    <Text size={12} pt={10}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</Text>
                                </Card>
                            </Grid.Col>
                            <Grid.Col sm={12} md={6} lg={6} xl={6} >
                                <Card style={{ border: "0.5px solid var(--secondary, #7A3199)", borderRadius: "10px", }}>
                                    <Text size={20} weight={700}>Interactive Features</Text>
                                    <Text size={12} pt={10}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</Text>
                                </Card>
                            </Grid.Col>
                            <Grid.Col sm={12} md={6} lg={6} xl={6} mt={18}>
                                <Card style={{ border: "0.5px solid var(--secondary, #7A3199)", borderRadius: "10px", }}>
                                    <Text size={20} weight={700}>Interactive Features</Text>
                                    <Text size={12} pt={10}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</Text>
                                </Card>
                            </Grid.Col>
                        </Grid>
                    </Grid.Col>
                    <Grid.Col sm={12} md={6} lg={6} xl={6} pl={70} pt={50}>
                        <Stack>
                            <Text weight={700} size={50}>About the course</Text>
                            <Text size={15}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                            <Button className='signupbtn' color='white' mt={20} size='lg' >Explore Now</Button>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Container>
            <div >
                <Image width={400} height={300} radius="md" mt={30} src={image3} alt='image2' style={{ position: "absolute", top: "530px", right: "150px" }} />
            </div>
        </>
    )
}

export default Coursesection