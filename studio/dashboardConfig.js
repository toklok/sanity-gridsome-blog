export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e49fcc6a48184111f89ac01',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-9ug9qpbi',
                  apiId: '34327f8c-2d0f-48c2-9c6f-fcbd3842f5dc'
                },
                {
                  buildHookId: '5e49fcc6a481842be789abfe',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-h8chmgaa',
                  apiId: 'de3acd0d-a010-4c2f-b8e2-c13db05e6cba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/toklok/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-h8chmgaa.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
