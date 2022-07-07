import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Input, Radio, RadioGroup, Tag, TagLabel, TagLeftIcon, VStack } from "@chakra-ui/react";
import { X } from "phosphor-react";
import { useState } from "react";
import { Difficulty, IWord } from "../../../types";
import { getColorByDifficulty } from "../../../utils/colors";

interface WordSubmittingInterface {
  words: IWord[];
  addNewWord: (word: IWord, setError: (err: {field: string, message: string}) => void) => void;
  removeWord: (name: string) => void;
}

export function WordSubmitting({ addNewWord, removeWord, words }: WordSubmittingInterface) {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [wordName, setWordName] = useState("");
  const [error, setError] = useState({ field: "", message: "" });

  console.log({error});
  
  return (
    <Flex w="100%" gap="8">
      <Box>
        <FormControl flex="1" >
          <FormLabel htmlFor="word_name">Words</FormLabel>
          <VStack spacing="4">
            <FormControl isInvalid={!!error.message}>
              <Input 
                type="text" 
                id="word_name" 
                maxLength={16}
                minLength={2}
                placeholder="Steve" 
                value={wordName} 
                onChange={(e) => setWordName(e.target.value)} 
              />
              <FormErrorMessage>{error.message}</FormErrorMessage>
            </FormControl>
            <RadioGroup>
              <HStack spacing="4">
                <Radio value="easy" onChange={(e) => setDifficulty(e.target.value as Difficulty)}>Easy</Radio>
                <Radio value="medium" onChange={(e) => setDifficulty(e.target.value as Difficulty)}>Medium</Radio>
                <Radio value="hard" onChange={(e) => setDifficulty(e.target.value as Difficulty)}>Hard</Radio>
                <Radio value="expert" onChange={(e) => setDifficulty(e.target.value as Difficulty)}>Expert</Radio>
              </HStack>
            </RadioGroup>
          </VStack>

          <Button mt="2" colorScheme="purple" onClick={() => {
            addNewWord({ name: wordName, difficulty }, setError), setWordName("")
          }}>
            Register word
          </Button>
          
          <FormHelperText>Here is where you can register your words</FormHelperText>
        </FormControl>
      </Box>

      <Box bgColor="gray.900" flex="1" rounded="2xl" p="4">
        <Flex gap="4" wrap="wrap">
          {words.map(word => (
            <Tag key={word.name} colorScheme={getColorByDifficulty(word.difficulty)}>
              <TagLeftIcon as={X} cursor="pointer" onClick={() => removeWord(word.name)}/>
              <TagLabel wordBreak="break-all">{word.name}</TagLabel>
            </Tag>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}