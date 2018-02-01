
// Objects

const person = {
  // name: "Gus",
  age: 21,
  location: {
    city: "Santa Monica",
    state: "California"
  }
}

const { name: firstName="anonymous", age } = person

console.log(`${firstName} is ${age}`)

const { city: cityName, state: USstate } = person.location
console.log(`${cityName} is in ${USstate}`)

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
}

const { name:publisherName="Self-Published"} = book.publisher

console.log(publisherName)

// Arrays

const address = ["1314 9TH ST", "Santa Monica", "CA", "90401"]
const [ , city, state, zip, apartment="2" ] = address

console.log(`You are in ${city} ${state}.`)

const menuItem = ["Coffee", "$2.00", "$2.50", "$3.00"]
const [ item, , med ] = menuItem
console.log(`A medium ${item} costs ${med}.`)
