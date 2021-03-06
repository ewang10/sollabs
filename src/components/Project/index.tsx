import { Link } from 'react-router-dom';
import { Grid, Box, Text } from "../../chakra";

const Project = () => {
    const commonProps = {
        w: '100%',
        minHeight: { base: '375px', lg: '500px' }
    }

    return (
        <Box px={{ base: '8', md: '40' }} py='8' maxWidth='1200px' marginX='auto'>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={{ base: '10', md: '20' }}>
                <div className="project">
                    <Link to="/projects/buddy_bots">
                        <Box
                            {...commonProps}
                            background="url('/images/BuddyBotsProfile.png') no-repeat"
                            backgroundSize="contain"
                            backgroundPosition="bottom"
                        >
                            <Text
                                fontWeight="bold"
                                fontSize="3xl"
                                align="center"
                                padding={{ base: "20px", md: "50px" }}
                                backgroundColor="blue.100"
                                color="white"
                            >
                                Buddy Bots
                            </Text>
                        </Box>
                    </Link>
                </div>
                <div className="project">
                    <Link to="/projects/sol_man">
                        <Box
                            {...commonProps}
                            background="url('/images/SolManProfile.png') no-repeat"
                            backgroundSize="contain"
                            backgroundPosition="bottom"
                        >
                            <Text
                                fontWeight="bold"
                                fontSize="3xl"
                                align="center"
                                padding={{ base: "20px", md: "50px" }}
                                backgroundColor="pink.100"
                                color="white"
                            >
                                Sol Man
                            </Text>
                        </Box>
                    </Link>
                </div>
                <div className="project">
                    <Box
                        {...commonProps}
                        background="url('/images/Coming-Soon.png') no-repeat"
                        backgroundSize="contain"
                        backgroundPosition="bottom"
                    >
                        <Text
                            fontWeight="bold"
                            fontSize="3xl"
                            align="center"
                            padding={{ base: "20px", md: "50px" }}
                        >
                            Announcing soon...
                        </Text>
                    </Box>
                </div>
                <div className="project">
                    <Box
                        {...commonProps}
                        background="url('/images/Coming-Soon.png') no-repeat"
                        backgroundSize="contain"
                        backgroundPosition="bottom"
                    >
                        <Text
                            fontWeight="bold"
                            fontSize="3xl"
                            align="center"
                            padding={{ base: "20px", md: "50px" }}
                        >
                            Announcing soon...
                        </Text>
                    </Box>
                </div>
            </Grid >
        </Box >
    )
}

export default Project;
