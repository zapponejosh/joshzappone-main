import { Heading } from '@chakra-ui/react';
export default function PostTitle({ children }) {
  return (
    <Heading as="h1" size="3xl">
      {children}
    </Heading>
  );
}
