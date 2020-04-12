import Home from 'src/vue/pages/Home.vue'
import Shop from 'src/vue/pages/Shop.vue'
import Product from 'src/vue/pages/Product.vue'
import Blog from 'src/vue/pages/Blog'
import BlogItem from 'src/vue/pages/BlogItem'
import News from 'src/vue/pages/News'
import NewsItem from 'src/vue/pages/NewsItem'
import Cart from 'src/vue/pages/Cart'
import Pages from 'src/vue/pages/Pages'
import Favorites from 'src/vue/pages/Favorites'

export let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop/:code.html',
    name: 'product',
    component: Product
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,

    children: [
      {
        path: ':mainCategory',
        component: Shop,

        children: [
          {
            path: ':page(\\d+)',
            component: Shop
          },
          {
            path: ':category',
            component: Shop,
            children: [
              {
                path: ':page(\\d+)',
                component: Shop
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/blog/:page(\\d+)?',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blog/:code.html',
    name: 'blog.item',
    component: BlogItem
  },
  {
    path: '/news/:page(\\d+)?',
    name: 'news',
    component: News
  },
  {
    path: '/news/:code.html',
    name: 'news.item',
    component: NewsItem
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/pages/:code.html',
    name: 'pages',
    component: Pages
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites
  }
]
