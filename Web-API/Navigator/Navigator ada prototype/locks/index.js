// masih sedikit informasi yang bisa di dapat tentang navigator.locks untuk di pelajari 

// console.log(navigator.locks)

navigator.locks.request( 'syntax-digest', (lock) => {
  console.log(lock)
})

navigator.locks.request( 'syntax-digest', (lock) => {
  console.log(lock)
})


navigator.locks.request('hello world', {mode : 'shared'}, (lock) => {
  console.log(lock)
})

navigator.locks.request('hello world', {mode : 'shared'}, (lock) => {
  console.log(lock)
})


async function test() {
  const allLock = await navigator.locks.query();

  console.log(allLock);
}

test()





