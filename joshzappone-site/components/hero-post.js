import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import Link from 'next/link';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} url={coverImage} />
      </div>
      <div>
        <div>
          <Heading as="h3">
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a>{title}</a>
            </Link>
          </Heading>
          <Box my=".5rem" fontStyle="italic">
            <Date dateString={date} />
          </Box>
        </div>
        <Box mb="1rem">
          <Text textStyle="excerpt" fontSize="1.1rem">
            {excerpt}
          </Text>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </Box>
      </div>
    </section>
  );
}
