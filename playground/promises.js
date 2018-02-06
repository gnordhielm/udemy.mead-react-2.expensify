
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data')
    reject('Something went wrong')
  }, 3000)
})

console.log('before')

promise
  .then(data => {
    console.log('received data', data)
  })
  .catch(err => {
    console.log('rejected', err)
  })

promise
  .then(data => {
    console.log('received data 2', data)
  }, err => {
    console.log('rejected 2', err)
  })

console.log('after')
