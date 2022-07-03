import { SimpleGrid } from '@chakra-ui/react';
import { RoomItem } from './RoomItem';

export function RoomList() {
  return (
      <SimpleGrid 
      px="4"
      minChildWidth="300px"
      spacing="8"
      maxH="600px"
      overflowY="scroll"
      sx={{
        '&::-webkit-scrollbar': {
          width: '2',
          rounded: 'full',
          bgColor: "gray.500",
        },
        '&::-webkit-scrollbar-thumb': {
          bgColor: "gray.800",
          rounded: 'full',
        },
      }}
    >
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
    </SimpleGrid>
  )
}