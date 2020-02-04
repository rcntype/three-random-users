const randomPromise1 = fetch('https://acme-users-api-rev.herokuapp.com/api/users/random').then(response => response.json())
const randomPromise2 = fetch('https://acme-users-api-rev.herokuapp.com/api/users/random').then(response => response.json())
const randomPromise3 = fetch('https://acme-users-api-rev.herokuapp.com/api/users/random').then(response => response.json())

const bigContainer = document.querySelector('#big-container')

const smallContainer = document.querySelectorAll('div .small-container')

console.log(smallContainer)


const render = (data) => {
    const html = data.map((person, idx) => {
        const count = idx+1
        return `    
        <div class='links'><a href="#${person.id}">${count}</a></div>    
        <div class='small-container'>
            <div class='person-name'>${person.fullName}</div>
            <div class='person-email'>${person.email}</div>
            <img src='${person.avatar}'/>
        </div>`
    }).join('')
    bigContainer.innerHTML = html
}





const p = Promise.all([randomPromise1, randomPromise2, randomPromise3])
    .then(data => {
        render(data)
    })

   
window.addEventListener('hashchange', () => {
    const id = window.location.hash.slice(1)
    
})
