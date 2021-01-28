/* eslint-disable react/display-name */
import figure from './figure';
import { Heading } from '@chakra-ui/react';
import BlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Link, Box, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '');
    return <Heading as={`h${level}`}>{props.children}</Heading>;
    // React.createElement(
    //   style,
    //   { className: `heading-${level}` },
    //   props.children
    // );
  }
  if (style === 'normal') {
    return <Text textStyle="content">{props.children}</Text>;
  }
  if (style === 'blockquote') {
    return <blockquote>- {props.children}</blockquote>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    figure: figure,
    block: BlockRenderer,
  },
  marks: {
    internalLink: ({ children, mark }) => (
      <Box
        as="span"
        className="internal-a"
        d="inline"
        p="2px"
        _hover={{
          bgGradient: 'linear(to-r, #ff0080, #7928ca)',
          color: 'white',
        }}
      >
        <NextLink href={mark.slug.current} passHref>
          <Link>{children}</Link>
        </NextLink>
      </Box>
    ),
    link: ({ children, mark }) =>
      mark.blank ? (
        <Box
          as="span"
          className="external-a"
          d="inline"
          p="3px"
          _hover={{
            bgGradient: 'linear(to-r, #ff0080, #7928ca)',
            color: 'white',
          }}
        >
          <Link href={mark.href} target="_blank" rel="noopener noreferrer">
            {children}
          </Link>
        </Box>
      ) : (
        <a href={mark.href}>{children}</a>
      ),
  },
};

export default serializers;
