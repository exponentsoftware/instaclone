import React,{useState} from 'react';
import { IconButton } from '@chakra-ui/button';

import { Image } from '@chakra-ui/image';
import { Box, Spacer, HStack } from '@chakra-ui/layout';
import {BsFillBookmarkFill,BsFillHeartFill,BsChat,BsTelegram} from "react-icons/bs";

function Cards({handleLike,like}) {
      
        return (
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" p={4} overflow="hidden">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                title
              </Box>
            <Image src={`https://land8.com/wp-content/uploads/2015/03/Andres-Amador.jpg`} alt='' />
      
            <Box p="6">
                <Box display="flex" justifyItems='baseline' >
                    <HStack spacing='14px'>
                <IconButton
                onClick={handleLike}
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<BsFillHeartFill />}
                />
                <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<BsChat />}
                />
                  
                    <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<BsTelegram />}
                />
                    </HStack >
                <Spacer/>
                    <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<BsFillBookmarkFill />}
                />
                </Box>

                <Box  as="span" mt="4" ml="2" color="gray.600" fontSize="sm">
                  {like} Likes
                </Box>
 
              <Box p={4}>
                discription
                
              </Box>
      
              
              </Box>
            </Box>
        )
      
}

export default Cards

