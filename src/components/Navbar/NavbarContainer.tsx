import { ReactNode } from 'react';
import { Flex } from '../../chakra';

interface propsType {
    children: ReactNode
};

const NavbarContainer = ({ children }: propsType) => {
    return (
        <Flex
            as='nav'
            align='center'
            justify='space-between'
            wrap='wrap'
            w='100%'
            mb={8}
            p={8}
            maxWidth='1200px'
            marginX='auto'
        //bg={["primary.500", "primary.500", "transparent", "transparent"]}
        //color={["white", "white", "primary.700", "primary.700"]}
        >
            {children}
        </Flex>
    )
}

export default NavbarContainer;
