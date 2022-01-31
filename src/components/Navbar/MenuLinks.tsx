import { Box, Stack, Link } from '../../chakra';
import MenuItem from './MenuItem';
import { FaTwitter, FaDiscord } from "react-icons/fa";

interface propsType {
    isOpen?: boolean,
    isFooter?: boolean
};

const MenuLinks = ({ isOpen, isFooter }: propsType) => {
    return (
        <Box
            display={{ base: isOpen || isFooter ? "block" : "none", md: "block" }}
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
                            <>
                                <Link href="https://twitter.com/SolLabsNFT" isExternal={true}>
                                    <FaTwitter />
                                </Link>
                                <Link href="https://discord.gg/WScwq5WkWB" isExternal={true}>
                                    <FaDiscord />
                                </Link>
                            </>
                        )
                        : (
                            <>
                                <MenuItem text="Twitter" externalLink="https://twitter.com/SolLabsNFT" />
                                <MenuItem text="Discord" externalLink="https://discord.gg/WScwq5WkWB" />
                            </>
                        )
                }
            </Stack>
        </Box>
    )
}

export default MenuLinks;
