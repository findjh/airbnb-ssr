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
function fn() {
  console.log('start')
  Promise.reject(new Error('something bad happened')) // promise.resolve 和 promise.reject是异步的.
  // try catch无法捕获到,除非await 同步
  console.log('end.......')
}
fn()// start
// end....
