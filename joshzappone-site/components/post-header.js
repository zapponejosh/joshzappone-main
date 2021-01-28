import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';
import { Box } from '@chakra-ui/react';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <Box mt="3rem">
      <PostTitle>{title}</PostTitle>

      <Box mt="1rem">
        <CoverImage title={title} url={coverImage} />
      </Box>
      <div>
        <Box mt="1.5rem">
          <Avatar name={author.name} picture={author.picture} />
        </Box>
        <Box fontStyle="italic">
          <Date dateString={date} />
        </Box>
      </div>
    </Box>
  );
}
