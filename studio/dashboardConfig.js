export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6011dd69a4954b0088cec203',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g91uy5dm',
                  apiId: '16e0651b-e924-41be-a95d-3cfcb5d303fe'
                },
                {
                  buildHookId: '6011dd69d3384c01141cf236',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hagsq4ir',
                  apiId: '2f97fcb2-c4e9-4c3b-bba6-4df173351700'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marioterron/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hagsq4ir.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
