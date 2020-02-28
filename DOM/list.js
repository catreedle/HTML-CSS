document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#new-task').onsubmit = () => {

        const li = document.createElement('li')
        li.innerHTML = document.querySelector('#task').value

        // add new task
        document.querySelector('#tasks').append(li)

        // clear input fielda
        document.querySelector('#task').value = ''

        // stop form from submitting
        return false
    }
})