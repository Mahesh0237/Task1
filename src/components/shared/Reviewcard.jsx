import { Avatar, Card, Group, Rating, Text } from '@mantine/core'
import React from 'react'
import image4 from '../../assets/Lolla 1.png'
function Reviewcard() {
    return (
        <Card withBorder p={25} shadow="md">
            <Group position='left'>
                <Avatar src={image4} alt="it's me" size={60} />
                <div>
                    <Text size={18} weight={700}>Lolla smith</Text>
                    <Text>Microsoft</Text>
                    <Rating defaultValue={5} readOnly />
                </div>
            </Group>
            <Text mt={10} size={14}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</Text>
        </Card>
    )
}

export default Reviewcard