const inputText = document.getElementById('inputText');
const inputButton = document.getElementById('inputButton');
const ulList = document.querySelector('.ul-list');
const libraryKey = JSON.parse(localStorage.getItem('tasks')) || {};

inputButton.addEventListener('click', (event) => {
    const timeKey = new Date().getTime();
    libraryKey[timeKey] = inputText.value;
    localStorage.setItem('tasks', JSON.stringify(libraryKey))
    inputText.value = '';
    populateList()
})

ulList.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteTask')) {
        event.target.parentElement.remove();
        const key = event.target.getAttribute('data-key')
        delete libraryKey[key]
        localStorage.setItem('tasks', JSON.stringify(libraryKey))
    }
})

function populateList() {
    ulList.innerHTML = '';
    Object.keys(libraryKey).forEach(key => {
        const liList = document.createElement('li');
        liList.innerHTML = `<span>${libraryKey[key]}</span><button class="deleteTask" data-key="${key}">Delete</button>`;
        liList.classList.add('li-list');
        ulList.append(liList);
    });
}

populateList();


