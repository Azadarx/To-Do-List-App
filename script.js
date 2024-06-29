const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('Please Enter a Value')
    }
    else {
        const li = document.createElement('li');
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        
        const span = document.createElement('span');
        span.textContent = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentNode.remove();
        saveData();
    }
}, false);

function saveData() {
    const tasks = listContainer.querySelectorAll('li');
    const data = [];
    tasks.forEach(task => {
        data.push(task.outerHTML);
    });
    localStorage.setItem('data', JSON.stringify(data)); 
}

function showData() {
    const data = JSON.parse(localStorage.getItem('data')) || [];
    listContainer.innerHTML = data.join('');
}

showData();
