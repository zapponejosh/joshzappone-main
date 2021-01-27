import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from './cover-image';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Box w="">
      <div>
        <CoverImage slug={slug} title={title} url={coverImage} />
      </div>
      <h3>
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <div>
        <Date dateString={date} />
      </div>
      <p>{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </Box>
  );
}
