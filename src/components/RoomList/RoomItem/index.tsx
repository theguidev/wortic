import { Avatar, Badge, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from 'next/link';
import { IRoom } from "../../../types";
import { RoomInfo } from "./RoomInfo";

type RoomItemProps = Omit<IRoom, "current_word" | "all_words" | "updated_at">

export function RoomItem({ id, name, image_url, stats, reset_hour, owner, created_at, official }: RoomItemProps) {
  return (
    <Link href={`/room/${id}`}>
      <ChakraLink
        bgColor="gray.600"
        p="4"
        pt="8"
        rounded="lg"
        transitionDuration="200ms"
        position="relative"
        textAlign="center"
        _hover={{ bgColor: "gray.800" }}
      >
        
        <HStack position="absolute" top="2" right="2">
          <Badge colorScheme="red">New</Badge>
          <Badge colorScheme="orange">Hot</Badge>
          {official && <Badge colorScheme="blue">Official</Badge>}
        </HStack>

        <Avatar size="2xl" src={image_url}/>
        <Text fontSize="3xl">{name}</Text>

        <RoomInfo 
          stats={stats}
          owner={owner}
          reset_hour={reset_hour}
        />
      </ChakraLink>
    </Link>
  )
}