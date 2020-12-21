/**
 * @name sequenceArray
 * @description 根據長度跟起始值，取得數字遞增的陣列，ex: [1, 2, 3], [5, 6, 7, 8]
 * @param {Nmber} length
 * @param {Number} startNum
 * @example
 * sequenceArray(3) => [0, 1, 2]
 * sequenceArray(3, 2) => [2, 3, 4]
 */
export const sequenceArray = (length, startNum = 0) => {
  return [...Array(length).keys()].map(n => n + startNum)
}
