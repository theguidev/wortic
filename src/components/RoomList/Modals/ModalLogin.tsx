import { Button, Center, List, ListIcon, ListItem, ModalBody, ModalCloseButton, ModalContent, ModalHeader, Stack, Text } from "@chakra-ui/react";
import { FaDiscord, FaFacebook, FaGoogle, FaPlus, FaUserCircle } from 'react-icons/fa';
export function ModalLogin() {
  return ( 
    <ModalContent bgColor="gray.800">
      <ModalHeader>
        <Center><Text fontSize="3xl">Log in</Text></Center>
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody pb="4">
        <List>
          <ListItem fontSize="xl">
            <ListIcon color="blue.500" as={FaPlus}/> 
            Create rooms
          </ListItem>
          
          <ListItem fontSize="xl">
            <ListIcon color="blue.500" as={FaUserCircle}/> 
            Use a custom avatar
          </ListItem>
        </List>
      {/* <Text display="flex" alignItems="center" _before={{ content:"''", flex: "1", mr: "4", h: "2px", bgColor: "gray.500" }} _after={{ content:"''", flex: "1", ml: "4", h: "2px", bgColor: "gray.500" }}>Sign Up with</Text> */}
        <Stack pt="4" spacing="4" align='center' w="100%">
          <Button p="4" w="100%" overflow="hidden" colorScheme={'facebook'} leftIcon={<FaFacebook size={20} />}>
            <Center>
              <Text>Facebook</Text>
            </Center>
          </Button>

          <Button p="4" w="100%"  bgColor="#ff3e30" _hover={{ bgColor: "#ff3e30cb"}} _active={{ bgColor: "#ff3e30a1"}} leftIcon={<FaGoogle size={20} />}>
            <Center>
              <Text>Google</Text>
            </Center>
          </Button>

          <Button p="4" w="100%"  bgColor="#7289da" _hover={{ bgColor: "	#7289dacb"}} _active={{ bgColor: "	#7289daa1"}} leftIcon={<FaDiscord size={20} />}>
            <Center>
              <Text>Discord</Text>
            </Center>
          </Button>
        </Stack>
      </ModalBody>
      {/* <ModalFooter>
        <Button colorScheme="cyan">Confirm</Button>
      </ModalFooter> */}
    </ModalContent>
  )
}