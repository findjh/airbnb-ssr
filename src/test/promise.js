// const p = (function() {
//   return Promise.resolve('ok')
// }

// (async function fn() {
//   const result = await p().then(() => {
//     try {
//       return Promise.reject(new Error('reject'))
//     } catch {
//       console.log('111', result)
//     }
//   })
// }))()
// try {
//   async function f() {
//     await Promise.reject(new Error('something bad happened'))
//   }
//   f()
// } catch {
//   console.log('catch')
// }
// function fn() {
//   console.log('start')
//   Promise.reject(new Error('something bad happened')) // promise.resolve 和 promise.reject是异步的.
//   // try catch无法捕获到,除非await 同步
//   console.log('end.......')
// }
// fn()// start
// end....
// 方法promiseA，返回一个Promise对象
function promiseA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('A')
      resolve('A')
    }, 3000)
  })
}
// 方法promiseB，返回一个Promise对象
function promiseB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('B')
      resolve('B')
    }, 1000)
  })
}
// 按照A, B的顺序添加到promise数组中
Promise.all([promiseA(), promiseB()]).then(resolve => {
  console.log(resolve)
})
