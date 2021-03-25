import NextLink from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
} from '@chakra-ui/react';

const mobileMenu = (
  <Menu>
    <MenuButton
      id="nav-sm"
      colorScheme="blue"
      as={IconButton}
      aria-label="Nav"
      icon={<HamburgerIcon />}
      size="sm"
      variant="outline"
      _active={{ backgroundColor: '#fff' }}
    />
    <MenuList
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      fontSize="sm"
      lineHeight="1rem"
      minW="30px"
    >
      <MenuItem
        _active={{ backgroundColor: '#000' }}
        _focus={{ backgroundColor: 'transparent' }}
      >
        <Link w="100%" as={NextLink} href="/">
          Home
        </Link>
      </MenuItem>
      <MenuItem
        _active={{ backgroundColor: '#000' }}
        _focus={{ backgroundColor: 'transparent' }}
      >
        <Link w="100%" as={NextLink} href="/portfolio">
          Projects
        </Link>
      </MenuItem>
      <MenuItem
        _active={{ backgroundColor: '#000' }}
        _focus={{ backgroundColor: 'transparent' }}
      >
        <Link w="100%" as={NextLink} href="/blog">
          Blog
        </Link>
      </MenuItem>
    </MenuList>
  </Menu>
);

export default function Header() {
  return (
    <Flex
      as="nav"
      mx="auto"
      h="100%"
      px={{ base: '.6rem', sm: '1.2rem' }}
      py=".8rem"
      align="center"
      justify="space-between"
      backgroundColor="#000"
    >
      <Flex textStyle="logo">
        <Link href="/" bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
          joshzappone.tech
        </Link>
      </Flex>
      <Flex
        justifySelf="end"
        justify="flex-end"
        w="100%"
        align="center"
        textStyle="nav"
        color="#fff"
      >
        {mobileMenu}
        <Box id="nav-lg">
          <Box
            d="inline"
            px="7px"
            _hover={{
              background: 'white',
              color: 'black',
            }}
          >
            <Link as={NextLink} href="/" color="blue">
              Home
            </Link>
          </Box>
          <Box
            d="inline"
            px="7px"
            _hover={{
              background: 'white',
              color: 'black',
            }}
          >
            <Link as={NextLink} href="/portfolio">
              Projects
            </Link>
          </Box>
          <Box
            d="inline"
            px="7px"
            _hover={{
              background: 'white',
              color: 'black',
            }}
          >
            <Link as={NextLink} href="/blog">
              Blog
            </Link>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
