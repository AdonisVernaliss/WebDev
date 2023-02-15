const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result= document.querySelector("#result");

btn.addEventListener('click', (e) => {
    if (input.value === '') return
    createDeleteEl(input.value)
    input.value = '';
})

function createDeleteEl(value){

    const li = document.createElement('li');
    li.className = 'li';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    li.appendChild(checkbox);

    const label = document.createElement('label');
    label.textContent = value;
    li.appendChild(label);

    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerHTML = '<img src="trash.png" alt="Delete" width="20">'
    li.appendChild(btn);
    btn.addEventListener('click', (e) => {
        result.removeChild(li);
    })

    checkbox.addEventListener('change', (e) => {
        if (checkbox.checked) {
            label.classList.add('li-active');
        } else {
            label.classList.remove('li-active');
        }
    })

    result.appendChild(li);
}