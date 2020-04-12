export class Cart {
  name = 'remsport-cart'

  static parse ({ ID, PRICE, NAME }) {
    return {
      id: ID,
      count: 1,
      price: PRICE,
      name: NAME
    }
  }

  static get () {
    try {
      return JSON.parse(localStorage.getItem(this.name) || '[]')
    } catch (e) {
      return []
    }
  }

  static add (itemP) {
    let list
    let item = Cart.parse(itemP)

    try {
      list = JSON.parse(localStorage.getItem(this.name) || '[]')
    } catch (e) {
      list = []
    }

    if (list.find(tovar => tovar.id === item.id)) {
      list.map(tovar => {
        if (tovar.id === item.id) {
          tovar.count++
        }
      })
    } else {
      list.push(item)
    }

    localStorage.setItem(this.name, JSON.stringify(list))
  }

  static delete (itemP) {
    let list
    let item = 'id' in itemP ? itemP : Cart.parse(itemP)

    try {
      list = JSON.parse(localStorage.getItem(this.name) || '[]')
    } catch (e) {
      list = []
    }

    list = list.filter(tovar => tovar.id !== item.id)

    localStorage.setItem(this.name, JSON.stringify(list))
  }

  static countAdd (itemP) {
    let list
    let item = 'id' in itemP ? itemP : Cart.parse(itemP)

    try {
      list = JSON.parse(localStorage.getItem(this.name) || '[]')
    } catch (e) {
      list = []
    }

    list = list.map(tovar => {
      if (tovar.id === item.id) {
        tovar.count++
      }
      return tovar
    })

    localStorage.setItem(this.name, JSON.stringify(list))
  }

  static countDelete (itemP) {
    let list
    let isDelete = false
    let item = 'id' in itemP ? itemP : Cart.parse(itemP)

    try {
      list = JSON.parse(localStorage.getItem(this.name) || '[]')
    } catch (e) {
      list = []
    }

    list = list.map(tovar => {
      if (tovar.id === item.id) {
        if (tovar.count === 1) {
          Cart.delete(item)
        } else {
          tovar.count--
        }
      }
      return tovar
    })

    if (isDelete) return void 0

    localStorage.setItem(this.name, JSON.stringify(list))
  }

  static summ () {
    let list
    let summ = 0
    let count = 0

    try {
      list = JSON.parse(localStorage.getItem(this.name) || '[]')
    } catch (e) {
      list = []
    }

    count = list.length

    list.forEach(tovar => {
      summ = summ + +tovar.count * +tovar.price
    })

    return { summ, count }
  }
}
