/* eslint-disable react/no-children-prop */
import { Button, ButtonGroup, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";

export function Header() {
  return (
    <Flex as="header" justify="space-between">
          <InputGroup w="initial">
            <InputLeftElement children={<MagnifyingGlass size={20}/>} />
            <Input type="text" placeholder="Buscar salas" />
          </InputGroup>

          <ButtonGroup size="md" spacing="4" colorScheme="blue">
            <Button>Log in</Button>
            <Button variant="outline">Sign Up</Button>
          </ButtonGroup>
        </Flex>
  )
}