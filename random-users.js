const randomPromise1 = fetch('https://acme-users-api-rev.herokuapp.com/api/users/random').then(response => response.json())
const randomPromise2 = fetch('https://acme-users-api-rev.herokuapp.com/api/users/random').then(response => response.json())
const randomPromise3 = fetch('https://acme-users-api-rev.herokuapp.com/api/users/random').then(response => response.json())

const bigContainer = document.querySelector('#big-container')
const pages = document.querySelector('#pages')

window.addEventListener('hashchange', () => {
    const id = window.location.hash.slice(1)
    fetch(`https://acme-users-api-rev.herokuapp.com/api/users/random/${id}`)
        .then(response => response.json())
        .then( result => renderPages(result))
})

const id = window.location.hash.slice(1)
if (id) {
    let element = document.getElementById('small-container');
    element.classList.toggle('hidden');
}


const render = (data) => {
    const html = data.map(person => {
        const name = person.fullName
        const email = person.email
        const pic = person.avatar
        
        return `
        <div id='small-container'>
            <div class='person-name'>${name}</div>
            <div class='person-email'>${email}</div>
            <img src='${pic}'/>
        </div>`
    }).join('')
    bigContainer.innerHTML = html
}

const renderPages = (data) => {
    const html = data.map((x, idx) => {
        const count = idx + 1
        return `<li class="links"><a href="#${idx}">${count}</a></li>`
    }).join('')
    pages.innerHTML = html
}


Promise.all([randomPromise1, randomPromise2, randomPromise3])
    .then(data => {
        render(data)
        renderPages(data)
    })

   
