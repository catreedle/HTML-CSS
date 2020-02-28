// function counter() {
    // alert('Counter')
    // document.querySelector('h1').innerHTML = 'yehyehyeh'
//     const headings = document.querySelectorAll('h1')
//     for (const hSatu of headings) {
//         hSatu.innerHTML = 'you changed me'
//     }
// }

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count
})

let counter = 0

function count() {
    counter++
    document.querySelector('#counter').innerHTML = counter
    if (counter % 5 === 0){
        alert(`Counter is at ${counter}`)
    }
}

// function countdown() {
//     counter--
//     document.querySelector('#counter').innerHTML = counter
//     if (counter % 5 === 0){
//         alert(`Counter is at ${counter}`)
//     }
// }
