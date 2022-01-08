import { Grid, Box, Text } from "../../chakra";

const Project = () => {
    const commonProps = {
        w: '100%',
        minHeight: { base: '375px', lg: '500px' }
    }

    return (
        <Box px={{ base: '8', md: '40' }} py='8' maxWidth='1200px' marginX='auto'>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={{ base: '10', md: '20' }}>
                <Box
                    {...commonProps}
                    background="url('/images/Coming-Soon.png') no-repeat"
                    backgroundSize="contain"
                    backgroundPosition="bottom"
                >
                    {/* <Link to="/projects/solman"> */}
                        <Text
                            fontWeight="bold"
                            fontSize="3xl"
                            align="center"
                            padding={{ base: "40px", md: "50px" }}
                        >
                            Anouncing soon...
                        </Text>
                    {/* </Link> */}
                </Box>
                <Box
                    {...commonProps}
                    background="url('/images/Coming-Soon.png') no-repeat"
                    backgroundSize="contain"
                    backgroundPosition="bottom"
                >
                    {/* <Link to="/projects/solman"> */}
                        <Text
                            fontWeight="bold"
                            fontSize="3xl"
                            align="center"
                            padding={{ base: "40px", md: "50px" }}
                        >
                            Anouncing soon...
                        </Text>
                    {/* </Link> */}
                </Box>
                <Box
                    {...commonProps}
                    background="url('/images/Coming-Soon.png') no-repeat"
                    backgroundSize="contain"
                    backgroundPosition="bottom"
                >
                    {/* <Link to="/projects/solman"> */}
                        <Text
                            fontWeight="bold"
                            fontSize="3xl"
                            align="center"
                            padding={{ base: "20px", md: "50px" }}
                        >
                            Anouncing soon...
                        </Text>
                    {/* </Link> */}
                </Box>
            </Grid >
        </Box >
    )
}

export default Project;
