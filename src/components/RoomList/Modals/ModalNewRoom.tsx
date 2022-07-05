import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, HStack, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Radio, RadioGroup, Text, VStack } from "@chakra-ui/react";

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

            {/* <FormControl>
              <FormLabel htmlFor="reset_at">Reset time</FormLabel>
               TO DO - <CustomSelect></CustomSelect> to select a time
              <Input type="time" />
              <FormHelperText>Consider UTC time</FormHelperText>
            </FormControl> */}
            {/*TO DO - All words (word list submiting) */}
            <Flex w="100%" gap="8">
              <Box>
                <FormControl flex="1">
                  <FormLabel htmlFor="image_url">Words</FormLabel>
                  <VStack spacing="4">
                    <Input type="text" placeholder="cadeira" />
                    
                    <RadioGroup>
                      <HStack spacing="4">
                        <Radio value="easy">Easy</Radio>
                        <Radio value="medium">Medium</Radio>
                        <Radio value="hard">Hard</Radio>
                        <Radio value="expert">Expert</Radio>
                      </HStack>
                    </RadioGroup>

                  </VStack>
                  <Button mt="2" colorScheme="purple">Registrar palavra</Button>
                  <FormHelperText>Here is where you can register your words</FormHelperText>
                </FormControl>
              </Box>

              <Box bgColor="gray.900" flex="1">

              </Box>
            </Flex>
          </VStack>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue">Create</Button>
      </ModalFooter>
    </ModalContent>
  )
}