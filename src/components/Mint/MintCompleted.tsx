import { Text, Box, Flex } from "../../chakra";

const MintCompleted = () => (
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
            <Text align="center" fontWeight="bold" fontSize={{ base: "3xl", lg: "6xl" }}>
                Thank you for minting with us!
            </Text>
        </Flex>
    </Box>
);

export default MintCompleted;
