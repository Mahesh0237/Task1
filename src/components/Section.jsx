import { Accordion, BackgroundImage, Button, Card, Center, Container, Divider, Grid, Group, Select, Stack, Text, TextInput } from '@mantine/core'
import React from 'react'
import picuture1 from '../assets/Picture3.jpeg'
import Accordiancard from './shared/Accordiancard'
import { useViewportSize } from '@mantine/hooks';
function Section() {
    const { height, width } = useViewportSize();
    let size1, size2;
    if(width<764){
        size1 = "35px"
    } else{
        size1 = "45px"
    }
    return (
        <>
            <Container pt={100} pb={100}>
                <Group position='apart'>
                    <Select
                        size="xs"
                        label="ALPHABETICALLY"
                        placeholder="Pick one"
                        data={[
                            { value: 'react', label: 'React' },
                            { value: 'ng', label: 'Angular' },
                            { value: 'svelte', label: 'Svelte' },
                            { value: 'vue', label: 'Vue' },
                        ]}

                    />
                    <Select
                        size='xs'
                        label="SORT BY"
                        placeholder="Pick one"
                        data={[
                            { value: 'react', label: 'React' },
                            { value: 'ng', label: 'Angular' },
                            { value: 'svelte', label: 'Svelte' },
                            { value: 'vue', label: 'Vue' },
                        ]}

                    />
                </Group>
                <Divider size="sm" mt={20} mb={20} />
                <Accordion defaultValue="CB1" className='sectionone'>
                    <Grid>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="CB1">
                                    <Accordiancard
                                        head="CB1"
                                        title="Cannabinoid Receptor 1"
                                        desc="A G protein-coupled cannabinoid receptor that in humans is encoded by the CNR1 gene. CB1 receptors mediate physical and psychoactive effects of Cannabinoids."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="CB2">
                                    <Accordiancard
                                        head="CB2"
                                        title="Cannabinoid Receptor 2"
                                        desc="receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="ECS">
                                    <Accordiancard
                                        head="ECS"
                                        title="Endocanabinoid system"
                                        desc="A G protein-coupled cannabinoid receptor that in humans is encoded by the CNR1 gene. CB1 receptors mediate physical and psychoactive effects of Cannabinoids."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="vijaya">
                                    <Accordiancard
                                        head="vijaya"
                                        title="Vijaya"
                                        desc="receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="Cannabinoid">
                                    <Accordiancard
                                        head="Cannabinoid"
                                        title="Cannabinoid"
                                        desc="A G protein-coupled cannabinoid receptor that in humans is encoded by the CNR1 gene. CB1 receptors mediate physical and psychoactive effects of Cannabinoids."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="CBD">
                                    <Accordiancard
                                        head="CBD"
                                        title="Canabidoil"
                                        desc="receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="Delta-9-THC">
                                    <Accordiancard
                                        head="Delta-9-THC"
                                        title="Tetrahydrocannabinol"
                                        desc="A G protein-coupled cannabinoid receptor that in humans is encoded by the CNR1 gene. CB1 receptors mediate physical and psychoactive effects of Cannabinoids."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="CBN">
                                    <Accordiancard
                                        head="CBN"
                                        title="Cannabinoil"
                                        desc="receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="CBG">
                                    <Accordiancard
                                        head="CBG"
                                        title="Cannabigeoril"
                                        desc="A G protein-coupled cannabinoid receptor that in humans is encoded by the CNR1 gene. CB1 receptors mediate physical and psychoactive effects of Cannabinoids."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="RA">
                                    <Accordiancard
                                        head="RA"
                                        title="Rheumatoid Arthiritis"
                                        desc="receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="Rx">
                                    <Accordiancard
                                        head="Rx"
                                        title="A Doctors prescription"
                                        desc="A G protein-coupled cannabinoid receptor that in humans is encoded by the CNR1 gene. CB1 receptors mediate physical and psychoactive effects of Cannabinoids."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="OA">
                                    <Accordiancard
                                        head="OA"
                                        title="Osteoarthritis"
                                        desc="receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="OTC">
                                    <Accordiancard
                                        head="OTC"
                                        title="Over The Counter"
                                        desc="A G protein-coupled cannabinoid receptor that in humans is encoded by the CNR1 gene. CB1 receptors mediate physical and psychoactive effects of Cannabinoids."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="IBS">
                                    <Accordiancard
                                        head="IBS"
                                        title="Irritable Bowel Syndrome"
                                        desc="receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="IBD">
                                    <Accordiancard
                                        head="IBD"
                                        title="Irritable Bowel Disorder"
                                        desc="A G protein-coupled cannabinoid receptor that in humans is encoded by the CNR1 gene. CB1 receptors mediate physical and psychoactive effects of Cannabinoids."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="MS">
                                    <Accordiancard
                                        head="MS"
                                        title="Sclerosis"
                                        desc="receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="PCOS">
                                    <Accordiancard
                                        head="PCOS"
                                        title="Polycystic ovary syndrome"
                                        desc="A G protein-coupled cannabinoid receptor that in humans is encoded by the CNR1 gene. CB1 receptors mediate physical and psychoactive effects of Cannabinoids."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="PCOD">
                                    <Accordiancard
                                        head="PCOD"
                                        title="Polycystic ovarian Disease"
                                        desc="receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="Tincture">
                                    <Accordiancard
                                        head="Tincture"
                                        title="Tincture"
                                        desc="A G protein-coupled cannabinoid receptor that in humans is encoded by the CNR1 gene. CB1 receptors mediate physical and psychoactive effects of Cannabinoids."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="Topical">
                                    <Accordiancard
                                        head="Topical"
                                        title="Topical"
                                        desc="receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="PUFA">
                                    <Accordiancard
                                        head="PUFA"
                                        title="Polyunsaturated Fatty Acid"
                                        desc="A G protein-coupled cannabinoid receptor that in humans is encoded by the CNR1 gene. CB1 receptors mediate physical and psychoactive effects of Cannabinoids."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="MUFA">
                                    <Accordiancard
                                        head="MUFA"
                                        title="Monosaturated Fatty Acid"
                                        desc="receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Card style={{ backgroundColor: "rgb(233 236 231 / 67%)", border: "2px solid #ccc8c8" }}>
                                <Accordion.Item value="Edestein">
                                    <Accordiancard
                                        head="Edestein"
                                        title="Edestein"
                                        desc="A G protein-coupled cannabinoid receptor that in humans is encoded by the CNR1 gene. CB1 receptors mediate physical and psychoactive effects of Cannabinoids."
                                    />
                                </Accordion.Item>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </Accordion>
            </Container>
            <BackgroundImage
                src={picuture1}

            >
                <Center pt={50} pb={50} pl={10} pr={10}>
                    <Stack>
                        <Text color='white' fs="italic" ta="center" size={size1} weight={500} display="block">Stay Updated on all news on Hemp</Text>
                        <Text color='white' size={20} ta="center">Join our mailing list and get 10% off your next order</Text>
                        <TextInput variant='unstyled' size='md' placeholder="Enter Your email" rightSection={<Button size="md" variant='light' mr={70}> SIGN UP</Button>} />
                        <Divider />
                    </Stack>
                </Center>
            </BackgroundImage>
        </>
    )
}

export default Section