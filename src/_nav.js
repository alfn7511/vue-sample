export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-grid'
    },
    {
      name: 'Configuration',
      url: '/configuration',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Edge',
          url: '/configuration/edges',
          children: [
            {
              name: 'Cache Throttling 관리',
              url: '/configuration/edges/cache'
            }
          ]
        },
        {
          name: 'Referrer',
          url: '/configuration/referrers',
          children: [
            {
              name: 'Referrer 관리',
              url: '/configuration/referrers/referrer'
            },
            {
              name: 'IP Restriction',
              url: '/configuration/referrers/ipRestriction'
            },
            {
              name: 'One-Time URL',
              url: '/configuration/referrers/onetime'
            }
          ]
        },
        {
          name: 'Pop 관리',
          url: '/configuration/pop'
        },
        {
          name: 'DNS',
          url: '/configuration/dns',
          children: [
            {
              name: 'GTM 관리',
              url: '/configuration/dns/gtm'
            }
          ]
        }
      ]
    }
  ]
}
