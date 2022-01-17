import { Text, Box, Flex, Grid } from "../chakra";
import Mint from "./Mint";

const Home = () => {
    return (
        <Box
            position="relative"
            backgroundImage={{ base: "url('/images/MobileHome.png')", lg: "url('/images/Home2.png')" }}
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundPosition="center"
            width="100vw"
            height="100vh"
        >
            <Flex justifyContent="center" alignItems="center" direction="column" height={{ base: "50vh", lg: "100vh" }}>
                <Text align="center" fontWeight="bold" fontSize={{ base: "3xl", lg: "6xl" }}>Sol Labs</Text>
                <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>Launching February 2022</Text>
                <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)">
                    <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>Price</Text>
                    <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>|</Text>
                    <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>Supply</Text>
                    <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>1.25 SOL</Text>
                    <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>|</Text>
                    <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>1,111</Text>
                </Grid>
                <br />
                <Mint />
            </Flex>
        </Box>
    )
}

export default Home;
