let input = document.getElementById('task');
let listItem = document.getElementById('Todolist');
let add = document.getElementById('btn');
let mainDiv = document.getElementById('todoDiv');


add.addEventListener('click', addTask);

const save = () => {
    localStorage.setItem('task', listItem.innerHTML);
}
function addTask(e) {

    if (input.value === "") {
        alert("Please enter text first...")
    }
    else {

        let li = document.createElement('li');
        li.innerHTML = input.value;
        listItem.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        save();
    }
    input.value = "";
}





listItem.addEventListener('click', (e) => {

    let tagname = e.target.tagName;
    if (tagname === "LI") {
        e.target.classList.toggle('checked');
        save();
    } else if (tagname === "SPAN") {
        e.target.parentElement.remove();
        save();
    }
})

const getTask = () => {
    listItem.innerHTML = localStorage.getItem('task');
}

getTask();