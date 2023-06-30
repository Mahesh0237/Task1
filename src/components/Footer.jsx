import { Button, Container, Divider, Group, Stack, Text } from '@mantine/core'
import React from 'react'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import twitter from '../assets/twitter.svg'
function Footer() {
  return (
    <Container mt={100} pt={100}>
      <Stack align='center' >
        <Text weight={700} size={32}>We have what you're looking for</Text>
        <Text color='blue' ta="center" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
        <Button size='xl' mt={50} style={{ borderRadius: "10px", background: "var(--danger, linear-gradient(90deg, #4776E6 0%, #8E54E9 100%))" }}>Get started now</Button>
      </Stack>
      <Divider color='white' mt={50} />
      <Group position='apart' mt={30} >
        <Text color='white' size={12}>All rights reserved @copyright 2023</Text>
        <Group spacing={30}>
          <Text color='white' size={12}>Term of service</Text>
          <Text color='white' size={12}>Privacy Product</Text>
          <Text color='white' size={12}>Product</Text>
        </Group>
        <Group spacing={20}>
          <img src={facebook} alt="facebook" />
          <img src={youtube} alt='youtube' />
          <img src={instagram} alt='instagram' />
          <img src={twitter} alt='twitter' />
        </Group>
      </Group>
    </Container>
  )
}

export default Footer