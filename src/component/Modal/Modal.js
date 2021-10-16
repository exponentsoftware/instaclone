import {Button, Icon, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure} from '@chakra-ui/react';
import { ModalBody } from 'react-bootstrap';
import { BsArrowsFullscreen } from "react-icons/bs";
function Explore() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
      <Icon as={BsArrowsFullscreen} w={6} h={6} onClick={onOpen} color='blue.600' />
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1>Modal body</h1>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Explore;