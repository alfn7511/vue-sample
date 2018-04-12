import Vue from 'vue'
import Router from 'vue-router'
import auth from '../auth'
import lazyLoading from './lazyLoading'

// Containers
import Full from '@/containers/Full'
Vue.use(Router)

const requireAuth = (to, from, next) => {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: function(){
    return { y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      beforeEnter: requireAuth,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: lazyLoading('dashboard/Dashboard')
        },
        {
          path: 'configuration',
          redirect: '/configuration/edges/edge',
          name: 'Configuration',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'edges',
              redirect: '/configuration/edges/cache',
              name: 'Edge',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'cache',
                  name: 'Cache Throttling 관리',
                  component: lazyLoading('configuration/edge/CacheThrottling')
                },
                {
                  path: 'cache/create',
                  name: 'Cache Throttling 등록',
                  component: lazyLoading('configuration/edge/CacheThrottlingCreate')
                },
                {
                  path: 'cache/:id',
                  name: 'Cache Throttling 상세',
                  props: true,
                  component: lazyLoading('configuration/edge/CacheThrottlingDetail')
                }
              ]
            },
            {
              path: 'referrers',
              redirect: '/configuration/referrers/referrer',
              name: 'Referrer',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'referrer',
                  name: 'Referrer 관리',
                  component: lazyLoading('configuration/referrer/Referrer')
                },
                {
                  path: 'referrer/create',
                  name: 'Referrer 등록',
                  component: lazyLoading('configuration/referrer/ReferrerCreate')
                },
                {
                  path: 'referrer/:id',
                  name: 'Referrer 상세',
                  props: true,
                  component: lazyLoading('configuration/referrer/ReferrerDetail')
                },
                {
                  path: 'ipRestriction',
                  name: 'IP Restriction',
                  component: lazyLoading('configuration/referrer/IpRestriction')
                },
                {
                  path: 'onetime',
                  name: 'One-Time URL',
                  component: lazyLoading('configuration/referrer/OnetimeUrl')
                }
              ]
            },
            {
              path: 'pop',
              name: 'Pop 관리',
              component: lazyLoading('configuration/pop/Pop')
            },
            {
              path: 'pop/create',
              name: 'Pop 등록',
              component: lazyLoading('configuration/pop/PopCreate')
            },
            {
              path: 'pop/:id',
              redirect: '/configuration/pop/:id/default',
              name: 'Pop 상세',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                { path: 'default',
                  title: '기본정보',
                  props: true,
                  component: lazyLoading('configuration/pop/PopDetailBase')
                },
                { path: 'edge',
                  title: 'L/R, Edge',
                  props: true,
                  component: lazyLoading('configuration/pop/PopDetailEdge')
                }
              ]
            },
            {
              path: 'dns',
              redirect: '/configuration/dns/gtm',
              name: 'DNS',
              component: {
                render (c) {
                  return c('router-view')
                }
              },
              children: [
                {
                  path: 'gtm',
                  name: 'GTM 관리',
                  component: lazyLoading('configuration/dns/GTM')
                }
              ]
            }
          ]
        }
      ]
    },

    {
      path: '/login',
      name: 'Login',
      component: lazyLoading('Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: lazyLoading('Register')
    },
    {
      path: '/404',
      name: 'Page404',
      component: lazyLoading('Page404')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
