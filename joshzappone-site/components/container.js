import { Container as C } from '@chakra-ui/react';
export default function Container({ children }) {
  return <C maxW="1280px">{children}</C>;
}
