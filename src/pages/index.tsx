import { Box, Center } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { RoomList } from '../components/RoomList';
import { Header } from '../components/RoomList/Header';

const Home: NextPage = () => {
  return (
    <Center h="100vh">
      <Box bg="gray.700" p="4" rounded="4" w="8xl">
        <Header />
        <Box py="8">
          <RoomList />
        </Box>
      </Box>
    </Center>
  )
}

export default Home
