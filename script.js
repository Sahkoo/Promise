function delayedPromise(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), delay)
    })
}

const promises = [
    delayedPromise('Promise 01', 13000),
    delayedPromise('Promise 02', 20000),
    delayedPromise('Promise 03', 159800),
    delayedPromise('Promise 04', 32000),
    delayedPromise('Promise 05', 25600),
]

Promise.all(promises)
    .then((results) => {
        console.log('Results of all promises:', results)
    })
    .catch((error) => {
        console.error('An error occurred:', error)
    })


function randomDelay(value) {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), delay)
    })
}

const racePromises = [
    randomDelay('Promise 01'),
    randomDelay('Promise 02'),
    randomDelay('Promise 03'),
    randomDelay('Promise 04'),
    randomDelay('Promise 05'),
]

Promise.race(racePromises)
    .then((result) => {
        console.log('The fastest promise:', result)
    })
    .catch((error) => {
        console.error('An error occurred:', error)
    })
