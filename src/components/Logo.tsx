import { Link } from "react-router-dom";
import { Text, Image, Flex } from "../chakra";
import SolLabLogo from "../images/Logo.png";

const Logo = () => {
    return (
            <Link to="/">
                <Flex justifyContent="center" alignItems="flex-end">
                    <Image src={SolLabLogo} alt="flask" objectFit='cover' boxSize="40px" />
                    <Text fontSize="lg" fontWeight="bold">
                        Sol Labs
                    </Text>
                </Flex>
            </Link>
    );
}

export default Logo;
