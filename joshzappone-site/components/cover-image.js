import Link from 'next/link';
import { Image } from '@chakra-ui/react';
import { imageBuilder } from '../lib/sanity';

export default function CoverImage({ title, url, slug }) {
  const image = (
    <Image
      boxShadow="lg"
      borderRadius="7px"
      alt={`Cover for ${title}`}
      src={imageBuilder.image(url).height(1000).width(2000).url()}
    />
  );

  return (
    <>
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
}
