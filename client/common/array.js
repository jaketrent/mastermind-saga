export function range(to) {
  let arr = []
  for (let i = 0; i < to; ++i) {
    arr = arr.concat([i])
  }
  return arr
}
