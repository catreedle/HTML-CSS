// function declaration
function salam(name = 'buddy'){
    console.log('assalamualaikum '+name)
}

salam('wati')

// function expression
const salam2 = function() {
    console.log('selamat pagi')
}    

salam2()

function halo (name) {
    return `hey hello ${name}`
}

// alert(halo('khoceng'))

const square = function (x) {
    return x*x
}

console.log(square(8))

// Immediately invoked function expression (IIFES)
!(function(){
    console.log(`Hello from IIFE!`)
})()

// Looping
// let i
// for (i = 0; i <= 10; i++) {
//     console.log('pengulangan '+ i)
// }

// let x = 1
// while (x < 20) {
//     console.log('while '+ x)
//     x++
// }

// for( let x = 0; x < 15; x++) {
//     // console.log('pengulangan '+x)
//     if (x === 7) {
//         console.log('ini no 7');
//         // x++
//         continue
//     }
//     if (x === 9) {
//         console.log('ini no 9')
//         break
//     }
//     console.log('pengulangan '+x)
// }

// let i = 5

// do {
//     console.log('pengulangan '+ i)
//     i++
// }

// while(i < 100)

// const kucing =['feline', 'clancy', 'julie', 'fabian']
// kucing.push('aing macan')

// for(let i = 0; i < kucing.length; i++) {
//     console.log(kucing[i])
// }

// forEach
// kucing.forEach(function(anything, index, array){
//     console.log(`${index} : ${anything}`)
//     console.log(array)
// })

const users = [
    {id: 1, name: 'zaki'},
    {id: 2, name:'ozi'},
    {id: 3, name: 'priyo'},
    {id: 4, name: 'purnama'},
    {id: 5, name: 'rin'}
]

const ids = users.map(function(users) {
    return `${users.id}: ${users.name}`
})

console.log(ids)

const user = {
    firstName: 'Tyler',
    lastName: 'Joseph',
    age: 30
}

for(let x in user){
    console.log(`${x} : ${user[x]}`)
}