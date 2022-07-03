import { Avatar, Badge, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from 'next/link';
import { RoomInfo } from "./RoomInfo";

export function RoomItem() {
  return (
    <Link href="/room/032187319">
      <ChakraLink
        bgColor="gray.600"
        p="4"
        pt="8"
        rounded="lg"
        transitionDuration="200ms"
        position="relative"
        textAlign="center"
        _hover={{bgColor: "gray.800"}}
      >
        <HStack position="absolute" top="2" right="2">
          <Badge colorScheme="red">New</Badge>
          <Badge colorScheme="orange">Hot</Badge>
          <Badge colorScheme="blue">Official</Badge>
        </HStack>
        <Avatar size="2xl" src="https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo"/>
        <Text fontSize="3xl">Naruto</Text>
        <RoomInfo />
      </ChakraLink>
    </Link>
  )
}