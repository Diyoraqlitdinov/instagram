import { Flex, Box, Heading, Spacer, Button, ButtonGroup, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Flex backgroundColor={'black'} minWidth='max-content' alignItems='center' gap='2'>
            <Box p='5'>
                <Heading as='h1' size='2xl' textColor={'red'}>Instagram</Heading>
            </Box>
            <Spacer />
            <Input placeholder='Search' textAlign={'center'} />
            <ButtonGroup gap='2' spacing='20px'>
                <Button colorScheme='red'><Link to="signin">Log out</Link></Button>
            </ButtonGroup>
        </Flex>
    )
}


export default Navbar;
