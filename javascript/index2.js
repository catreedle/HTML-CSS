// const a = 5, b= 9, sum = a + b
// console.log(sum)

// let z
// z = a * b
// z = a - b
// console.log(z)
// z = b % a // modular : sisa hasil pembagian

// math object
x = Math.PI
y = Math.sqrt(64)
u = Math.E
t = Math.round(3.7)
v = Math.ceil(2.7)
w = Math.floor(2.7)
p = Math.min(1, 7, -86, 100)
q = Math.random()
r = Math.random() * 50 + 1
s = parseInt(Math.random() * 100 + 1)

console.log(s)

// Concatenation : the operation of joining two strings together
const firstName = 'Tyler'
const lastName = 'Joseph'
const age = 30
const myName = 'My name is ' + firstName + ' ' + lastName
// const myName = `My name is ${firstName} ${lastName}`
const greeting = myName + ' I am ' + age + ' years old.'

console.log(greeting)
const a = 2, b = 7, c = 4
console.log(`${a}${b}${c}`)

// append
hisName = 'Joshua'
hisName += 'Dun'

console.log(hisName)

// string1.concat(string2)
console.log(firstName.concat(lastName, ' ', hisName))

// escaping character
hero = 'I\'m groot'
console.log(hero)
console.log(myName.toUpperCase())
// setiap method harus diakhiri dengan ()

console.log(firstName.indexOf('y')) // finding index of a member of an array
console.log(hisName[3]) // finding a member of array based on index

console.log(firstName.charAt('0'))

const Array0 = ['cat', 'deer', 'bee']
const Array1 = new Array(0, 1, 2, 3)
Array0.push('snake')
console.log(Array0)

const Obj = {
    a: 'kuy',
    b: 'biash',
    array: [1, 2, 3],
    addres: {
        kota: 'jakarta',
        kodepos: 1233494
    },
    ulangtahun: function () {
        return 1945
    }
}
console.log(Obj.addres.kodepos)
console.log(Obj.ulangtahun())

console.log(Obj['array'])
console.log(Obj.array)

// if (boolean test) {
//     do something
// }
// else {
//     do something else
// }

var umur = 17

if (umur < 13) {
    console.log('bocah')
} else if (umur < 17) {
    console.log('remaja')
} else {
    console.log('dewasa')
}

const id = 70
if (id >= 80) {
    console.log('lulus')
}
else {
    console.log('tidak lulus')
}

// There are only six falsy values in JavaScript you should be aware of:
// false — boolean false
// 0 — number zero
// “” — empty string
// null
// undefined
// NaN — Not A Number

const warna = 'blue'

switch (warna) {
    case 'red':
        console.log('merah')
        break
    case 'pink':
        console.log('merah muda')
        break
    default:
        console.log('unknown')
        break 
}