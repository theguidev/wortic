import { Button, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Text, VStack } from "@chakra-ui/react";

export function ModalNewRoom() {
  return (
    <ModalContent bgColor="gray.800">
      <ModalHeader>
        <Text fontSize="3xl">Room creation</Text>
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody>
        <form>
          <VStack spacing="4">
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input type="text" id="name"/>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="image_url">Image URL</FormLabel>
              <Input type="text" id="image_url"/>
            </FormControl>
          </VStack>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue">Create</Button>
      </ModalFooter>
    </ModalContent>
  )
}