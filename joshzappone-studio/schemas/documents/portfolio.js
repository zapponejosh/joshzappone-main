export default {
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
  __experimental_actions: [/*'create',*/ 'update', 'delete', 'publish'], 

  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'featuredProject',
      type: 'reference',
      description: 'Select the project you would like to feature',
      to: [
        {
          type: 'project',
        },
      ],
    },
    {
      title: 'Projects',
      name: 'projects',
      description: 'Select projects to display',
      validation: Rule => [
        Rule.unique().error('You have duplicate projects')
      ],
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }]
        }
      ]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata'
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage'
    }
  }
};
