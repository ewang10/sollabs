import { Text, Flex } from "../../chakra";
import BubbleBackground from "../BubbleBackgroud";

const MintCompleted = () => (
    <BubbleBackground>
        <Flex justifyContent="center" alignItems="center" direction="column" height={{ base: "50vh", lg: "100vh" }}>
            <Text align="center" fontWeight="bold" fontSize={{ base: "3xl", lg: "6xl" }}>
                Thank you for minting with us!
            </Text>
        </Flex>
    </BubbleBackground>
);

export default MintCompleted;
