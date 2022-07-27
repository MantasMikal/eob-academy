const shallowObjectToQuery = (object) => {
  if (!object || typeof object !== 'object') return

  return Object.keys(object)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`
    )
    .join('&')
}

export default shallowObjectToQuery
