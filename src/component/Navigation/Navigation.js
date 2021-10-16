import React from 'react';
import { Center, Container, Flex, Heading } from "@chakra-ui/react";

import Right from './Right';
import SearchForm from './SearchForm';
function Navigation() {
    return (
        <Container maxWidth='container.xl' bg='teal.100' height="5vh">
            <Flex justifyContent='space-between'>
                <Center>

                <Heading size='25px'>Instagram Clone</Heading>
                </Center>
                <SearchForm />
                <Right />
            </Flex>
        </Container>
    )
}

export default Navigation
