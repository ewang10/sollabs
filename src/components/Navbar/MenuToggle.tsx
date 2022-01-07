import { Box } from '../../chakra';
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
 
interface propsType {
  toggle: () => void,
  isOpen: boolean
};

const MenuToggle = ({ toggle, isOpen }: propsType) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <MdOutlineClose /> : <MdOutlineMenu />}
    </Box>
  )
}

export default MenuToggle;
