import { HStack } from '@chakra-ui/layout';

import React from 'react';
import Icon from '@chakra-ui/icon';
import { BsCursorFill } from "react-icons/bs";

import { BsHouseDoorFill } from "react-icons/bs";
import { BiNavigation } from "react-icons/bi";



import { Link } from 'react-router-dom';

import { IconButton } from '@chakra-ui/button';
import { TriangleDownIcon } from '@chakra-ui/icons';
import Explore from '../Modal/Modal';


function Right() {
    return (
        <HStack spacing="24px">
            <HStack spacing="24px" alignItems="center">
                <Link to='home'><Icon as={BsHouseDoorFill} w={6} h={6} color='blue.600' /></Link>
                <Link to='inbox'><Icon as={BsCursorFill} w={6} h={6} color='blue.600' /></Link>
                <Explore />

                <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<BiNavigation />}
                />
                <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<TriangleDownIcon />}
                />
            </HStack>
        </HStack>
    )
}

export default Right;
