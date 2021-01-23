export default {
  title: 'Button',
  name: 'button',
  type: 'object',
  validation: Rule =>
    Rule.custom(
      (fields = {}) =>
        !fields.internalLink || !fields.externalLink || 'Only one link type is allowed'
    ),
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
    },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Internal link',
      description: 'Use this to link between pages on the website',
      name: 'internaLink',
      type: 'string',
      fieldset: 'link',
    },
    {
      title: 'External link',
      name: 'externalLink',
      type: 'url',
      fieldset: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      internalLink: 'internalLink',
      externalLink: 'externalLink',
    },
    prepare({ title, internalLink, externalLink }) {
      const subtitleExtra = internalLink
        ? `Slug:/${internalLink}/`
        : externalLink
        ? `External link: ${externalLink}`
        : 'Not set';
      return {
        title: `${title}`,
        subtitle: `${subtitleExtra}`,
      };
    },
  },
};
