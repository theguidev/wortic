/* eslint-disable react/no-children-prop */
import { Badge, Button, ButtonGroup, Flex, HStack, Input, InputGroup, InputLeftElement, Spacer } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";

export function Header() {
  return (
    <Flex as="header">
      <InputGroup w="initial">
        <InputLeftElement children={<MagnifyingGlass size={20}/>} />
        <Input type="text" placeholder="Buscar salas" />
      </InputGroup>

      <Spacer />
      <Flex>
        <HStack spacing="4">
          <Badge cursor="pointer" fontSize="lg"variant="solid" >All</Badge>
          <Badge cursor="pointer" fontSize="lg" variant="outline" colorScheme="red">New</Badge>
          <Badge cursor="pointer" fontSize="lg" variant="outline" colorScheme="orange">Hot</Badge>
          <Badge cursor="pointer" fontSize="lg" variant="outline" colorScheme="blue">Official</Badge>
        </HStack>
      </Flex>
      <Spacer />

      <ButtonGroup size="md" spacing="4" colorScheme="blue">
        <Button>Log in</Button>
        <Button variant="outline">Sign Up</Button>
      </ButtonGroup>
    </Flex>
  )
}