import { Text, Box, Flex, Grid } from "../chakra";
import Mint from "./Mint";

const Home = () => (
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
            <Text align="center" fontWeight="bold" fontSize={{ base: "5xl", lg: "6xl" }}>Buddy Bots</Text>
            <Text as='i' align="center" fontSize={{ base: "md", lg: "2xl" }} width={{ base: "350px", md: "600px" }}>
                beep...bop...boop...
            </Text>
            <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>February 3rd 2022</Text>
            <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>8pm PST / 11pm EST</Text>
            <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)">
                <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>Price</Text>
                <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>|</Text>
                <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>Supply</Text>
                <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>0.00 SOL</Text>
                <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>|</Text>
                <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>200</Text>
            </Grid>
            <br />
            <Mint />
        </Flex>
    </Box>
);

export default Home;
