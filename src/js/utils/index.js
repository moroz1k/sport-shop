export const getDataFromObject = (response) => response.hasOwnProperty('data') ? response.data : null

export const handlerErrorResponse = (response) => {
  if (response.status === 'undefined') throw new Error('++error fetch: Unknown error')
  if (response.status === 'ok') return response.result
  if (response.status === 'error') throw new Error('++error fetch:', response.error)
}

export const nf = (price) => {
  if (!price) return price

  let p = +price
  p = p.toFixed(0)
  p = p.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
  return p
}
