import { useState } from 'react';
import Logo from '../Logo';
import MenuLinks from './MenuLinks';
import MenuToggle from './MenuToggle';
import NavbarContainer from './NavbarContainer';

const Navbar = (props: JSX.IntrinsicAttributes) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <NavbarContainer {...props}>
        <Logo />
        <MenuToggle isOpen={isOpen} toggle={toggle} />
        <MenuLinks isOpen={isOpen} />
      </NavbarContainer>
    )
}

export default Navbar;
