import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from './cover-image';
import Link from 'next/link';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Box mt="1rem" mb="2rem">
      <Box>
        <CoverImage slug={slug} title={title} url={coverImage} />
      </Box>
      <Heading as="h3">
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          {title}
        </Link>
      </Heading>
      <Box fontStyle="italic">
        <Date dateString={date} />
      </Box>
      <Text textStyle="excerpt">{excerpt}</Text>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </Box>
  );
}
