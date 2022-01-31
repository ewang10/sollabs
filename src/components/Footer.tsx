import { Flex, Box } from '../chakra';
import MenuLinks from './Navbar/MenuLinks';

const Footer = () => {
    return (
        <Box backgroundColor="lightGray">
            <Flex
                as='footer'
                align='center'
                justify='flex-end'
                wrap='wrap'
                w='100%'
                p={8}
                marginX='auto'
                maxWidth='1200px'
            >
                <MenuLinks isFooter />
            </Flex>
        </Box>
    )
}

export default Footer;
