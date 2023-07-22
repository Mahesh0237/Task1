import { Anchor, Container, Divider, Drawer, Grid, Group, Image, Indicator, Text } from '@mantine/core'
import React, { useState } from 'react'
import imageone from '../assets/imageone.avif'
import { IconMenu2, IconSearch, IconShoppingBag, IconUser } from '@tabler/icons-react'
import { useViewportSize } from '@mantine/hooks';
import Drawernav from './Drawernav';

function Navbar() {
    const { height, width } = useViewportSize();
    const [opened, setOpened] = useState(false);
    const openDrawer = () => {
        setOpened(true)
    }
    return (
        <>
            <Container size={1350} pt={20} pb={0} mb={0}>
                <Group position='apart'>
                    <Image src={imageone} alt='image' width={80} height={80} />

                    {
                        width <= 779 ?
                            <IconMenu2
                                color='white'
                                onClick={openDrawer}
                            />
                            :
                            <div className="navbar">
                                <ul >
                                    <li><a href="#"><Text size={18} weight={400}>SHOP</Text></a></li>
                                    <li><a href="#"><Text size={18} weight={400}>CONSULTATION</Text></a></li>
                                    <li><a href="#"><Text size={18} weight={400}>RESOURCES</Text></a></li>
                                    <li><a href="#"><Text size={18} weight={400}>MEMBERSHIP</Text></a></li>
                                    <li><a href='#'><IconSearch size={30} /></a></li>
                                    <li><a href='#'><IconUser size={30} /></a></li>
                                    <li>
                                        <a href='#'>
                                            <Indicator inline label="0" size={15} >
                                                <IconShoppingBag size={30} />
                                            </Indicator>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                    }
                </Group>
                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    padding="xl"
                    position="right"
                    size={260}
                    zIndex={999}
                >
                    {
                        opened === true &&
                        <>
                        <Drawernav/>
                        </>
                    }
                </Drawer>
            </Container>
            <Divider size="sm" mt={10}/>
        </>
    )
}

export default Navbar