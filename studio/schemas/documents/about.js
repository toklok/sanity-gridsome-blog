export default {
    name: 'about',
    type: 'document',
    title: 'About',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Image'
      },
      {
        name: 'bio',
        type: 'bioPortableText',
        title: 'Biography'
      }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image'
      }
    }
  }
  