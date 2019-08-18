module.exports = {
  siteTitle: 'comapass-scotland',
  siteDescription: 'Ron Cairns Counselling',
  authorName: 'Oleksandr Stasyk',
  twitterUsername: '_maxpou',
  authorAvatar: '', // file in content/images
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: '',
  siteUrl: 'https://maxpou.github.io/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  // Prefixes all links. For cases when deployed to maxpou.fr/compass-scotland/
  pathPrefix: '/compass-scotland', // Note: it must *not* have a trailing slash.
  siteCover: 'compass-clouds-hero.png', // file in content/images
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  // icon: 'content/images/baymax.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerTitle: 'compass-scotland',
  headerLinksIcon: 'white-compass.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    // {
    //   label: 'Installation',
    //   url: '/how-to-install',
    // },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'Github',
          url: 'https://github.com/sashman',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/sash_man2',
        },
      ],
    },
  ],
}
