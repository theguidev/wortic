import { Avatar, Badge, Flex, HStack, Link as ChakraLink, Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react";
import Link from 'next/link';
import { Check, Timer, X } from "phosphor-react";

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
        <HStack spacing="2" justify="center">
          <Tag colorScheme="green">
            <TagLeftIcon as={Check}/>
            <TagLabel>223</TagLabel>
          </Tag>
          <Tag colorScheme="red">
            <TagLeftIcon as={X}/>
            <TagLabel>12</TagLabel>
          </Tag>
        </HStack>
        <Flex align="center" justify="space-between">
          <HStack spacing="2">
            <Avatar size="sm" src="https://cdn.discordapp.com/attachments/711276726294151256/881726406172749824/kiba.jpg" name="Alan Magaiver"/>
            <Text fontSize="sm">Criado por <Text as="span" fontWeight="bold" >Alan Magaiver</Text></Text>
          </HStack>
          <Tag colorScheme="yellow" >
            <TagLeftIcon as={Timer}/>
            <TagLabel>1h</TagLabel>
          </Tag>
        </Flex>
      </ChakraLink>
    </Link>
  )
}