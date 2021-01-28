import { Box, Badge, Image, Text, Button, Flex } from '@chakra-ui/react';
import BlockContent from '@sanity/block-content-to-react';
import serializers from './serializers';

const ProjectTile = (props) => {
  const stackBadges = props.projectStack.map((p, idx) => (
    <Badge key={idx} borderRadius="full" px="6px" m="3px" colorScheme="pink">
      {p}
    </Badge>
  ));

  return (
    <Box
      // maxW="400px"
      // minW="200px"
      boxShadow="md"
      borderWidth="1px"
      borderRadius="8px"
      overflow="hidden"
    >
      <Image
        w="100%"
        boxShadow="sm"
        src={props.imageUrl}
        alt={`${props.name} demo image`}
      />

      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {props.name}
        </Box>
        <BlockContent blocks={props.description} serializers={serializers} />{' '}
        <Box d="flex" alignItems="baseline" flexWrap="wrap">
          {stackBadges}
        </Box>
        <Flex m="13px 8px" wrap="wrap" justify="flex-start">
          {props.repoLink ? (
            <Button
              as="a"
              aria-label="Sponsor Chakra UI on Open Collective"
              href={props.repoLink.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="purple"
              variant="outline"
              mx="4px"
              my="10px"
            >
              {props.repoLink.title ? props.repoLink.title : 'The Code'}
            </Button>
          ) : null}

          {props.deployLink ? (
            <Button
              as="a"
              aria-label="Sponsor Chakra UI on Open Collective"
              href={props.deployLink.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="pink"
              variant="outline"
              mx="4px"
              my="10px"
            >
              {props.deployLink.title ? props.deployLink.title : 'See it live'}
            </Button>
          ) : null}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectTile;
