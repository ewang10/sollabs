import { Text, Flex, Grid, GridItem } from "../chakra";
import Mint from "./Mint";
import BubbleBackground from "./BubbleBackgroud";

const Home = () => (
    <BubbleBackground>
        <Flex justifyContent="center" alignItems="center" direction="column" height={{ base: "50vh", lg: "100vh" }}>
            <Text align="center" fontWeight="bold" fontSize={{ base: "5xl", lg: "6xl" }}>Buddy Bots</Text>
            <Text as='i' align="center" fontSize={{ base: "md", lg: "2xl" }} width={{ base: "350px", md: "600px" }}>
                beep...bop...boop...
            </Text>
            <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>February 3rd 2022</Text>
            <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>8pm PST / 11pm EST</Text>
            <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" columnGap={{ base: 6, lg: 12 }}>
                <GridItem>
                    <Text align="center" as='u' fontSize={{ base: "2xl", lg: "5xl" }}>Price</Text>
                </GridItem>
                <GridItem textAlign="right">
                    <Text align="center" as='u' fontSize={{ base: "2xl", lg: "5xl" }}>Supply</Text>
                </GridItem>
                <GridItem>
                    <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>0.00 SOL</Text>
                </GridItem>
                <GridItem>
                    <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>200</Text>
                </GridItem>
            </Grid>
            <br />
            <Mint />
        </Flex>
    </BubbleBackground>
);

export default Home;
