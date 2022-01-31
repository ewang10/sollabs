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
        >
            {children}
        </Flex>
    )
}

export default NavbarContainer;
