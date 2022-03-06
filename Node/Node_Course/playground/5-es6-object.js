// object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    // name: name,
    name,
    age: userAge,
    location: 'Bihar'
}
console.log(user)

//Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const price = product.price

// const { label: productLabel, stock, rating = 5, salePrice } = product  //destructuring object
// console.log(productLabel)
// console.log(stock)
// console.log(rating)
// console.log(salePrice)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}
transaction('order', product)