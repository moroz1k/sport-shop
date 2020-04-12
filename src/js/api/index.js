import axios from 'axios'

import {
  getDataFromObject,
  handlerErrorResponse
} from '../utils'

class API {
  static DEFAULT_URL = 'http://test1.remsport.ru/api/'

  static constructor ({
    method = 'get',
    params = {},
    data = {},
    url = API.DEFAULT_URL
  }) {
    return axios({
      method,
      params,
      data,
      url
    })
      .then(getDataFromObject)
      .then(handlerErrorResponse)
      .catch((error) => console.log('++error fetch:', error.message))
  }

  static fetchShop ({ params }) {
    return API.constructor({
      method: 'post',
      data: {
        method: 'shop',
        params
      }
    })
  }

  static fetchItem ({ code }) {
    return API.constructor({
      method: 'post',
      data: {
        method: 'item',
        code
      }
    })
  }

  static fetchCommon () {
    return API.constructor({
      method: 'post',
      data: {
        method: 'common'
      }
    })
  }

  static fetchHome () {
    return API.constructor({
      method: 'post',
      data: {
        method: 'home'
      }
    })
  }

  static fetchItemReviews (params) {
    return API.constructor({
      params: {
        ...params,
        method: 'item_reviews'
      }
    })
  }

  static fetchBlogItem ({ code }) {
    return API.constructor({
      params: {
        method: 'blog_item',
        code
      }
    })
  }

  static fetchBlog () {
    return API.constructor({
      params: {
        method: 'blog'
      }
    })
  }

  static fetchNewsItem ({ code }) {
    return API.constructor({
      params: {
        method: 'news_item',
        code
      }
    })
  }

  static fetchNews () {
    return API.constructor({
      params: {
        method: 'news'
      }
    })
  }
}

export default API
