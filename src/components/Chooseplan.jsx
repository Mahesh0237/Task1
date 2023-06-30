import { Container, Grid, SegmentedControl, Stack, Text } from '@mantine/core'
import React from 'react'
import Basicplan from './shared/Basicplan'

function Chooseplan() {
    return (
        <Container mt={100}>
            <Stack align='center'>
                <Text size={32} weight={700}> Choose  Your plan</Text>
                <Text >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Text>
                <SegmentedControl color='#E1A6FF'
                    data={[
                        { label: 'monthly', value: 'monthly' },
                        { label: 'yearly', value: 'yearly' },
                    ]}
                />
            </Stack>
            <Grid mt={50}>
                <Grid.Col sm={12} md={4} lg={4} xl={4}>
                    <Basicplan
                        plan="Basic plan"
                        bgcolor = "#fff"
                    />
                </Grid.Col>
                <Grid.Col sm={12} md={4} lg={4} xl={4}>
                    <Basicplan
                        plan="Premium plan"
                        bgcolor = "#7A3199"
                        textcolor = "white"
                    />
                </Grid.Col>
                <Grid.Col sm={12} md={4} lg={4} xl={4}>
                    <Basicplan
                        plan="Basic plan"
                        bgcolor = "#fff"
                    />
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Chooseplan