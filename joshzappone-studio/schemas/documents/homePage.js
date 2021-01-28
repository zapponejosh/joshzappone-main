export default {
  name: "homePage",
  type: 'document',
  title: 'Home Page',
  fieldsets: [
    {
      title: 'Meta Section',
      name: 'metaSection'
    },
    {
      title: 'Intro Section',
      name: 'introSection'
    },
    {
      title: 'About Section',
      name: 'aboutSection'
    },
    {
      title: 'Contact Section',
      name: 'contactSection'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      fieldset: 'metaSection'
    },
    {
      name: 'description',
      title: 'Meta description',
      type: 'text',
      fieldset: 'metaSection'
    },
    {
      name: 'introText',
      title: 'Intro Text',
      type: 'portableText',
      fieldset: 'introSection'
    },
    {
      name: 'image',
      title: 'Intro image',
      type: 'figure',
      fieldset: 'introSection'
    }
  ]
}