import { SimpleGrid } from '@chakra-ui/react';
import { RoomItem } from './RoomItem';

const mockRooms = [
  {
    id: "321312321",
    image_url: "https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo",
    name: "Naruto",
    owner: {
      id: "1231231",
      name: "Alan Magaiver",
      email: "alan@gmail.com",
      avatar_url: "https://cdn.discordapp.com/attachments/711276726294151256/881726406172749824/kiba.jpg"
    },
    official: true,
    reset_hour: 17,
    stats: {
      failures: 201,
      hits: 8885
    },
    created_at: new Date().toISOString()
  },
  {
    id: "2",
    image_url: "https://i.ytimg.com/vi/dq5_VDUilPg/maxresdefault.jpg",
    name: "Genshin Impact",
    official: false,
    owner: {
      id: "221",
      name: "Venti",
      email: "venti@gmail.com",
      avatar_url: "https://s2.glbimg.com/dOC1rJ_p5xgBDWtPFSxdbi8cXsI=/0x0:2048x1682/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/U/1/KdGeTFSNiKDaFLBNzErw/82282294-701472437369616-1630246676814752073-o.jpg"
    },
    reset_hour: 8,
    stats: {
      failures: 9999,
      hits: 3
    },
    created_at: new Date().toISOString()
  },
  {
    id: "222",
    image_url: "https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo",
    name: "Naruto",
    official: true,
    owner: {
      id: "1231231",
      name: "Alan Magaiver",
      email: "alan@gmail.com",
      avatar_url: "https://cdn.discordapp.com/attachments/711276726294151256/881726406172749824/kiba.jpg"
    },
    reset_hour: 17,
    stats: {
      failures: 201,
      hits: 8885
    },
    created_at: new Date().toISOString()
  },
  {
    id: "523",
    image_url: "https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo",
    name: "Naruto",
    official: true,
    owner: {
      id: "1231231",
      name: "Alan Magaiver",
      email: "alan@gmail.com",
      avatar_url: "https://cdn.discordapp.com/attachments/711276726294151256/881726406172749824/kiba.jpg"
    },
    reset_hour: 17,
    stats: {
      failures: 201,
      hits: 8885
    },
    created_at: new Date().toISOString()
  }
]

export function RoomList() {
  
  return (
    <SimpleGrid 
      px="4"
      minChildWidth="300px"
      spacing="8"
      maxH="602px"
      overflowY="auto"
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
      {mockRooms.map(room => (
        <RoomItem key={room.id} {...room} />
      ))}
    </SimpleGrid>
  )
}