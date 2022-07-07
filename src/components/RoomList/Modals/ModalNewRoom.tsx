import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, Radio, RadioGroup, Text, VStack } from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface IFormInputs {
  name: string;
  image_url: string;
}

const schema = yup.object({
  name: yup.string().required("The name field is required").max(50),
  image_url: yup.string().url("The field value must be a url").required("The image url field is required")
}).required();

export function ModalNewRoom() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IFormInputs) => {
    console.log({data});
  }

  return (
    <ModalContent bgColor="gray.800">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>
          <Text fontSize="3xl">Room creation</Text>
          <ModalCloseButton />
        </ModalHeader>

        <ModalBody>
            <VStack spacing="4">
              <FormControl isInvalid={!!errors.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input type="text" id="name" placeholder="Stranger Things" {...register("name")} />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>

              <FormControl  isInvalid={!!errors.image_url}>
                <FormLabel htmlFor="image_url">Image URL</FormLabel>
                <Input type="text" id="image_url" placeholder="https://xxxxxx.xxx" {...register("image_url")} />
                <FormErrorMessage>{errors.image_url?.message}</FormErrorMessage>
              </FormControl>

              {/* <FormControl>
                <FormLabel htmlFor="reset_at">Reset time</FormLabel>
                TO DO - <CustomSelect></CustomSelect> to select a time
                <Input type="time" />
                <FormHelperText>Consider UTC time</FormHelperText>
              </FormControl> */}
              {/*TO DO - All words (word list submiting) */}
              <Flex w="100%" gap="8">
                <Box>
                  <FormControl flex="1">
                    <FormLabel htmlFor="image_url">Words</FormLabel>
                    <VStack spacing="4">
                      <Input type="text" placeholder="Steve" />
                      
                      <RadioGroup>
                        <HStack spacing="4">
                          <Radio value="easy">Easy</Radio>
                          <Radio value="medium">Medium</Radio>
                          <Radio value="hard">Hard</Radio>
                          <Radio value="expert">Expert</Radio>
                        </HStack>
                      </RadioGroup>

                    </VStack>
                    <Button mt="2" colorScheme="purple">Register word</Button>
                    <FormHelperText>Here is where you can register your words</FormHelperText>
                  </FormControl>
                </Box>

                <Box bgColor="gray.900" flex="1" rounded="2xl">

                </Box>
              </Flex>
            </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" w="100%" type="submit">Create</Button>
        </ModalFooter>
      </form>
    </ModalContent>
  )
}