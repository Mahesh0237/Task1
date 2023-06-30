import { Button, Card, List, Stack, Text } from '@mantine/core'
import React from 'react'

function Basicplan({ plan, bgcolor, textcolor }) {
    return (
        <Card style={{ border: "0.5px solid var(--secondary, #7A3199)", borderRadius: "10px", backgroundColor: bgcolor }}>
            <Stack>
                <Text size={15} weight={700} color={textcolor}>{plan}</Text>
                <Text color={textcolor}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
                <Text color={textcolor ? "white" : '#7A3199'} size={30} weight={700}>$ 54 /month </Text>
                <List color='white'>
                    <List.Item ><Text weight={700} size={14} color={textcolor}>Free access to video classes</Text></List.Item>
                    <List.Item ><Text weight={700} size={14} color={textcolor}>Free access to video classes</Text></List.Item>
                    <List.Item ><Text weight={700} size={14} color={textcolor}>Free access to video classes</Text></List.Item>
                </List>
                <Button variant={textcolor ? "light":"outline"} color={textcolor ? "white" : 'grape'} size='md' > Start Free Trial</Button>
            </Stack>
        </Card>
    )
}

export default Basicplan