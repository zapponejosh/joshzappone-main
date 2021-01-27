import { Container as C } from '@chakra-ui/react';
export default function Container({ children }) {
  return (
    <C maxW="1280px" px="1.2rem">
      {children}
    </C>
  );
}
