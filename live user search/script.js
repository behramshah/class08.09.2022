let searchUser = document.getElementById('search_user');
let result = document.getElementById('results_list');
let listItems = [];


async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()
    console.log(res)
    result.innerHTML = '';
    results.forEach(user => {
        const li = document.createElement('li')
        listItems.push(li)
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        result.appendChild(li)
    })
}

getData()

function filterData (e){
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}


searchUser.addEventListener('input', filterData )