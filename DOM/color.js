document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#red').onclick = function() {
        document.querySelector('#color').style.color = 'red'
    }

    document.querySelector('#green').onclick = function() {
        document.querySelector('#color').style.color = 'green'
    }

    document.querySelector('#blue').onclick = function() {
        document.querySelector('#color').style.color = 'blue'
    }
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.color-change').forEach(button => {
        button.onclick = () => {
            document.querySelector('#color').style.color = button.dataset.color
        }
    })
})

