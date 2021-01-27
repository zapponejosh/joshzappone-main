import { Avatar as A, Flex, Box } from '@chakra-ui/react';
export default function Avatar({ name, picture }) {
  return (
    <Flex my={3} align="flex-end">
      <A src={picture} name={name} />
      <Box mb={2} ml={2}>
        {name}
      </Box>
    </Flex>
  );
}
