import { Avatar, Box, Flex, HStack, Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react";
import { Check, Timer, X } from "phosphor-react";

export function RoomInfo() {
  return (
    <Box>
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
      
      <Flex align="center" justify="space-between" pt="2">
        <HStack spacing="2">
          <Avatar size="sm" src="https://cdn.discordapp.com/attachments/711276726294151256/881726406172749824/kiba.jpg" name="Alan Magaiver"/>
          <Text fontSize="sm">Criado por <Text as="span" fontWeight="bold" >Alan Magaiver</Text></Text>
        </HStack>
        <Tag colorScheme="yellow" >
          <TagLeftIcon as={Timer}/>
          <TagLabel>1h</TagLabel>
        </Tag>
      </Flex>
    </Box>
  )
}