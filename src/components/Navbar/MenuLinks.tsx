import { Box, Stack, Link } from '../../chakra';
import MenuItem from './MenuItem';
import { FaTwitter } from "react-icons/fa";

interface propsType {
    isOpen: boolean
};

const MenuLinks = ({ isOpen }: propsType) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem text="Projects" to="/projects" />
                <MenuItem text="About" to="/about" />
                {
                    !isOpen
                        ? (
                            <Link href="https://twitter.com/SolLabsNFT" isExternal={true}>
                                <FaTwitter />
                            </Link>
                        )
                        : <MenuItem text="Twitter" externalLink="https://twitter.com/SolLabsNFT" />
                }
            </Stack>
        </Box>
    )
}

export default MenuLinks;
