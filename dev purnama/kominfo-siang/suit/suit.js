// preambule

console.log('vvvvvvvvv^w^vvvvvvvvv')
console.log('*****suit gunting batu kertas*****')
console.log('( ͡° ͜ʖ ͡°) you vs pc  ¯\_(ツ)_/¯')
console.log(`Enter gunting, batu, atau kertas`)


// suit switch break
const you = prompt('your pick')
console.log(`You pick ${you}`)
const weapon = ['gunting', 'batu', 'kertas']
const pc = weapon[Math.floor(Math.random()* 3)+0]

console.log(`Computer picks ${pc}`)
const err = 'Error. Input does not match.'

if (you === pc) {
    console.log('seri')
} else {
    switch (you) {
        case 'gunting':
            if (pc === 'kertas') {
                console.log('you win')
            } else if (pc === 'batu') {
                console.log('you lose')
            } else console.log(err)
            break
        case 'batu':
            if (pc === 'gunting') {
                console.log('you win')
            } else if (pc === 'kertas') {
                console.log('you lose')
            } else console.log(err)
            break
        case 'kertas':
            if (pc === 'gunting') {
                console.log('you lose')
            } else if (pc === 'batu') {
                console.log('you win')
            } else console.log(err)
            break
        default: console.log(err)
            break
    }
    
}
console.log('Please refresh to play again.')


