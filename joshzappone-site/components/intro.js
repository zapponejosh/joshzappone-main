import { Box, Flex, Heading, Image } from '@chakra-ui/react';
export default function Intro({ title }) {
  return (
    <Flex id="hero" as="section" height="60vh" minH="300px" mb="4rem">
      <Heading
        textShadow="3px 2px #d96417"
        fontSize={{ base: '4rem', sm: '6.5rem', md: '8rem', lg: '10rem' }}
        zIndex="1"
        pl="1.2rem"
        textAlign="left"
        alignSelf="flex-end"
        color="#fff"
        opacity="70%"
      >
        {title}
      </Heading>
    </Flex>
  );
}
