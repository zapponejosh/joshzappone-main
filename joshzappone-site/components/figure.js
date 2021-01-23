import React from "react";
import { imageBuilder } from '../lib/sanity'

// const builder = imageUrlBuilder(client);

function Figure({ node }) {
  const { alt, caption, asset } = node;
  if (!asset) {
    return undefined;
  }
  return (
    <figure>
      <img
        src={imageBuilder.image(asset).auto("format").width(500).url()}
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
