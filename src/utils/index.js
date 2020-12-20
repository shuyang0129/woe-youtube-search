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

/**
 * @name incrementElementByN
 * @description 回傳一個函式，此函式帶入陣列後，會對陣列中的每個元素增加 n
 * @param {Number} n
 */
const incrementElementByN = n => arr => arr.map(x => x + n)

// 對陣列中每個元素 +1
export const incrementElementBy1 = incrementElementByN(1)

// 對陣列中每個元素 -1
export const decrementElementBy1 = incrementElementByN(-1)
