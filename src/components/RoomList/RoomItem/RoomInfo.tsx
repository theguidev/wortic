import { Avatar, Box, Flex, HStack, Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react";
import { Check, Timer, X } from "phosphor-react";
import { IRoom } from "../../../types";

type RoomInfoProps = Pick<IRoom, "stats" | "owner" | "reset_hour">

export function RoomInfo({ stats, owner, reset_hour }: RoomInfoProps) {
  const hoursToResetRemaining = Math.abs(new Date().getUTCHours() - reset_hour);
  return (
    <Box>
      <HStack spacing="2" justify="center">
        <Tag colorScheme="green">
          <TagLeftIcon as={Check}/>
          <TagLabel>{stats.hits}</TagLabel>
        </Tag>
        <Tag colorScheme="red">
          <TagLeftIcon as={X}/>
          <TagLabel>{stats.failures}</TagLabel>
        </Tag>
      </HStack>
      
      <Flex align="center" justify="space-between" pt="2">
        <HStack spacing="2">
          <Avatar size="sm" src={owner.avatar_url} name={owner.name}/>
          <Text fontSize="sm">Criado por <Text as="span" fontWeight="bold" >{owner.name}</Text></Text>
        </HStack>

        <Tag colorScheme="yellow" >
          <TagLeftIcon as={Timer}/>
          <TagLabel>{hoursToResetRemaining}h</TagLabel>
        </Tag>
      </Flex>
    </Box>
  )
}