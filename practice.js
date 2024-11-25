// 1. 變量練習
let name = "Rose"
let age = 20
let isStudent = true
console.log(`我是${name}，今年${age}歲，${isStudent ? "是" : "不是"}學生。`)

// 2. 類型轉換
let num = 365
let strNum = num.toString()
let str = "123"  
let numStr = Number(str)
console.log(typeof strNum, typeof numStr)

// 3. 圓形計算
let radius = 5
console.log("面積: " + Math.PI * Math.pow(radius,2))
console.log("周長: " + Math.PI * 2 * radius)

// 4. 字串操作
let string = "JavaScript"
console.log(string.charAt(0))
console.log(string.charAt(string.length-1))
console.log(string.length)

// 5. 邏輯運算
console.log(5 > 3 && 10 < 20)
console.log(5 > 8 || 10 < 20)