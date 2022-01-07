import { Text, Box } from "../chakra";

const NotFound = () => (
    <Box maxWidth='1200px' marginX='auto' px={{ base:'8', '2xl': '0' }}>
        <Text fontSize={{ base: 'lg', md: '5xl' }} align='center'>Sorry, we can't find this page!</Text>
        <br />
        <Text fontSize={{ base: 'sm', md: '2xl'}} align='center'>
            It's possible that the link is misspelled.
            Otherwise, the page has been moved or no longer exists.
        </Text>
    </Box>
  )
  
  export default NotFound;
