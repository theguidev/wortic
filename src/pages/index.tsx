/* eslint-disable react/no-children-prop */
import { Box, Button, ButtonGroup, Center, Flex, GridItem, Input, InputGroup, InputLeftElement, SimpleGrid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { MagnifyingGlass } from 'phosphor-react';

const Home: NextPage = () => {
  return (
    <Center h="100vh">
      <Box bg="gray.700" p="4" rounded="4" w="3xl">
        <Flex as="header" justify="space-between">
          <InputGroup w="initial">
            <InputLeftElement children={<MagnifyingGlass size={20}/>} />
            <Input type="text" placeholder="Buscar jogos" />
          </InputGroup>

          <ButtonGroup size="md" spacing="4" colorScheme="blue">
            <Button>Log in</Button>
            <Button variant="outline">Sign Up</Button>
          </ButtonGroup>
        </Flex>
        <SimpleGrid>
          <GridItem>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Center>
  )
}

export default Home
