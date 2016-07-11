export function range(to) {
  let arr = []
  for (let i = 0; i < to; ++i) {
    arr = arr.concat([i])
  }
  return arr
}

export function shallowEqual(arr1, arr2) {
  return Array.isArray(arr1)
    && Array.isArray(arr2)
    && arr1.filter((el, i) => el === arr2[i])
    .length === arr1.length
}
