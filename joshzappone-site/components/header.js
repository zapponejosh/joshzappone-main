import Link from 'next/link';
import { Flex, Box } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex
      maxW="1280px"
      mx="auto"
      h="100%"
      px={{ base: '.6rem', sm: '1.7rem' }}
      mt=".8rem"
      align="center"
      justify="space-between"
    >
      <Flex>
        <h1>LOGO</h1>
      </Flex>
      <Flex
        justifySelf="end"
        justify="flex-end"
        w="100%"
        align="center"
        textStyle="nav"
      >
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
        <Link href="/portfolio">
          <a className="hover:underline">Work</a>
        </Link>
        <Link href="/blog">
          <a className="hover:underline">Blog</a>
        </Link>
      </Flex>
    </Flex>
  );
}
