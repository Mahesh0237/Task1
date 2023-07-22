import { Accordion, Text } from '@mantine/core'
import React from 'react'

function Accordiancard({head, title, desc}) {
    return (
        <>
            <Accordion.Control >
                <Text color='green' size={20} weight={700}>{head}</Text>
                <Text size={18}>{title}</Text>
            </Accordion.Control >
            <Accordion.Panel>{desc}</Accordion.Panel>
        </>
    )
}

export default Accordiancard