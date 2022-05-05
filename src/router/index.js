import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Statistic.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/banners',
    name: 'Banners',
    component: () => import('../views/Banners.vue')
  },
  {
    path: '/films',
    name: 'Films',
    component: () => import('../views/Films.vue')
  },
  {
    path: '/cinemas',
    name: 'Cinemas',
    component: () => import('../views/Cinemas.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/stock',
    name: 'Stock',
    component: () => import('../views/Stock.vue')
  },
  {
    path: '/pages',
    name: 'Pages',
    component: () => import('../views/Pages.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/newsletter',
    name: 'Newsletter',
    component: () => import('../views/Newsletter.vue')
  },
  {
    path: '/statistic',
    name: 'Statistic',
    component: () => import('../views/Statistic.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },

  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },

  {
    path: '/film',
    name: 'Film',
    props: true,
    component: () => import('../views/Film.vue')
  },

  {
    path: '/poster',
    name: 'Poster',
    component: () => import('../views/Poster.vue')
  },

  {
    path: '/soon',
    name: 'Soon',
    component: () => import('../views/Poster.vue')
  },

  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('../views/Schedule.vue')
  },

  {
    path: '/booking-a-ticket',
    name: 'Booking-a-ticket',
    component: () => import('../views/Book-ticket.vue')
  },

  {
    path: '/cinemas-list',
    name: 'Cinemas-list',
    component: () => import('../views/CinemasList.vue')
  },

  {
    path: '/cinemas-page',
    name: 'Cinemas-page',
    component: () => import('../views/CinemasPage.vue')
  },

  {
    path: '/hall',
    name: 'Hall',
    component: () => import('../views/Hall.vue')
  },

  {
    path: '/stocks',
    name: 'Stocks',
    component: () => import('../views/Stocks.vue')
  },

  {
    path: '/stocks-page',
    name: 'StocksPage',
    component: () => import('../views/StocksPage.vue')
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutSinema.vue')
  },

  {
    path: '/vip-hall',
    name: 'VipHall',
    component: () => import('../views/VipHall.vue')
  },

  {
    path: '/child-room',
    name: 'ChildRoom',
    component: () => import('../views/ChildRoom.vue')
  },

  {
    path: '/advertising',
    name: 'Advertising',
    component: () => import('../views/Advertising.vue')
  },

  {
    path: '/mobile-app',
    name: 'MobileApp',
    component: () => import('../views/MobileApp.vue')
  },

  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },

  {
    path: '/cinema-world-news',
    name: 'CinemaWordNews',
    component: () => import('../views/CinemaWordNews.vue')
  },

  {
    path: '/news-page',
    name: 'NewsPage',
    component: () => import('../views/NewsPage.vue')
  },

  {
    path: '/cafe-bar-page',
    name: 'CafeBarPage',
    component: () => import('../views/CafeBarPage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});



export default router
