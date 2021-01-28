/* eslint-disable react/display-name */
import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';

import serializers from './serializers';

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent
        blocks={content}
        serializers={serializers}
        className={markdownStyles.markdown}
      />
    </div>
  );
}
