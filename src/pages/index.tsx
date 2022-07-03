import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Header } from '../components/RoomList/Header';
import { RoomItem } from '../components/RoomList/RoomItem';

const Home: NextPage = () => {
  return (
    <Center h="100vh">
      <Box bg="gray.700" p="4" rounded="4" w="8xl">
        <Header />
        <SimpleGrid py="4" minChildWidth="120px" spacing="8">
          <RoomItem />
          <RoomItem />
          <RoomItem />
          <RoomItem />
        </SimpleGrid>
      </Box>
    </Center>
  )
}

export default Home
