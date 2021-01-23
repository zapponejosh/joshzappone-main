export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fieldsets: [
    {
      title: 'Links',
      name: 'links',
    },
  ],
  fields: [
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'projectDescription',
      title: 'Project description',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'projectStack',
      title: "Project Stack",
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'demoImage',
      title: 'Demo image',
      type: 'image',
    },
    {
      name: 'repoLink',
      title: 'Repo Link',
      type: 'button',
      fieldset: 'links'
    },
    {
      name: 'deployLink',
      title: 'Deploy Link',
      type: 'button',
      fieldset: 'links'
    },
    
  ],
}