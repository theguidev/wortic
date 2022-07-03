/* eslint-disable react/no-children-prop */
import { Badge, Button, ButtonGroup, Flex, HStack, Input, InputGroup, InputLeftElement, Spacer } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";
import { IFilter, TagValue } from "../../pages";

interface HeaderProps {
  handleFilter: (filter: Partial<IFilter>) => void;
  currentFilter: IFilter;
}

const tags = [
  {
    id: 0,
    title: "all",
    color: "gray",
  },
  {
    id: 1,
    title: "new",
    color: "red",
  },
  {
    id: 2,
    title: "hot",
    color: "orange",
  },
  {
    id: 3,
    title: "official",
    color: "blue",
  }
]

export function Header({ handleFilter, currentFilter }: HeaderProps) {

  return (
    <Flex as="header">
      <InputGroup w="initial">
        <InputLeftElement children={<MagnifyingGlass size={20}/>} />
        <Input
          value={currentFilter.value}
          type="text"
          placeholder="Buscar salas"
          onChange={(e) => handleFilter({ value: e.target.value })} 
        />
      </InputGroup>

      <Spacer />
      <Flex>
        <HStack spacing="4">
          {tags.map(tag => (
            <Badge
              key={tag.id}
              cursor="pointer"
              fontSize="lg"
              variant={tag.title === currentFilter.tag ? "solid" : "outline"}
              colorScheme={tag.color}
              onClick={() => handleFilter({tag: tag.title as TagValue})}
            >
              {tag.title}
            </Badge>
          ))}
        </HStack>
      </Flex>
      <Spacer />

      <ButtonGroup size="md" spacing="4" colorScheme="blue">
        <Button>Log in</Button>
        <Button variant="outline">Sign Up</Button>
      </ButtonGroup>
    </Flex>
  )
}