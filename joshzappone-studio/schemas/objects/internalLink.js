import React from 'react';

const InternalLinkRender = ({ children }) => <span>{children} 🔗</span>;

export default {
  title: 'Internal link to another post',
  name: 'internalLink',
  type: 'object',
  description: 'Locate a post you want to link to',
  fields: [
    {
      name: 'item',
      type: 'reference',
      to: [{ type: 'post' }],
    }
  ],
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender,
  },
};
