import { Heading, SimpleGrid } from '@chakra-ui/react';
import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
  return (
    <section>
      <Heading my={4}>More Stories</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing="40px">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </SimpleGrid>
    </section>
  );
}
