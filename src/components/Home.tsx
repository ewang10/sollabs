import { Text, Flex, Grid, GridItem } from "../chakra";
import Mint from "./Mint";
import BubbleBackground from "./BubbleBackgroud";

const Home = () => (
    <BubbleBackground>
        <Flex justifyContent="center" alignItems="center" direction="column" height={{ base: "50vh", lg: "100vh" }} zIndex={100}>
            <Text align="center" fontWeight="bold" fontSize={{ base: "5xl", lg: "6xl" }}>Sol Labs</Text>
            <Text as='i' align="center" fontSize={{ base: "md", lg: "2xl" }} width={{ base: "350px", md: "600px" }}>
                1,111 labs are looking for lab assistants.
            </Text>
            <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>February 18th 2022</Text>
            <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>23:00 PST / 07:00 +1 UTC</Text>
            <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" columnGap={{ base: 6, lg: 12 }}>
                <GridItem>
                    <Text align="center" as='u' fontSize={{ base: "2xl", lg: "5xl" }}>Price</Text>
                </GridItem>
                <GridItem textAlign="right">
                    <Text align="center" as='u' fontSize={{ base: "2xl", lg: "5xl" }}>Supply</Text>
                </GridItem>
                <GridItem>
                    <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>1.25 SOL</Text>
                </GridItem>
                <GridItem>
                    <Text align="center" fontSize={{ base: "2xl", lg: "5xl" }}>1,111</Text>
                </GridItem>
            </Grid>
            <br />
            <Mint />
        </Flex>
    </BubbleBackground>
);

export default Home;
