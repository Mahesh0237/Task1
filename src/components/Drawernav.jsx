import { Anchor, Button, Stack, Text } from '@mantine/core'
import React from 'react'

function Drawernav() {
    return (
        <Stack>
            <Button variant='light' component='a' href='#'>SHOP</Button>
            <Button variant='light' component='a' href='#'>CONSULTATION</Button>
            <Button variant='light' component='a' href='#'>RESOURCES</Button>
            <Button variant='light' component='a' href='#'>MEMBERSHIP </Button>
        </Stack>
    )
}

export default Drawernav