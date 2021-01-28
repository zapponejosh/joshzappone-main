import { Image } from '@chakra-ui/react';
import React from 'react';
import { imageBuilder } from '../lib/sanity';

// image in posts

function Figure({ node }) {
  const { alt, caption, asset } = node;
  if (!asset) {
    return undefined;
  }
  return (
    <figure>
      <Image
        borderRadius="7px"
        m="10px"
        boxShadow="lg"
        src={imageBuilder.image(asset).auto('format').width(500).url()}
        alt={alt}
      />
      {caption && (
        <figcaption>
          <div>
            <div>
              <p>{caption}</p>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  );
}

export default Figure;
