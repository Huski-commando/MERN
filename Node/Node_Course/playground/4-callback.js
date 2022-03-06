setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['gyan', 'Madhu', 'abhishek']
const shortName = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}
geocode('bihar', (data) => {
    console.log(data)
})

// Challenge
const add = (num1, num2, callback) => {
    setTimeout(() => {
        sum = num1 + num2
        callback(sum)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})