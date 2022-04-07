let dates = [];
let counter = 0;
let lastInput;

const addDates = document.querySelector('.name-container');
const addButton = document.querySelector('.add-date');
const newDate = document.createElement('div');
const deleteDates = document.querySelector('.delete-date');
const submit = document.querySelector('#submit')
newDate.classList.add('newDate');


const makeDate = (a) => {
    if(a === "add"){
        const newInput = document.createElement('input');
        newInput.type = 'datetime';
        newInput.classList.add('newInput');
        newInput.classList.add('date');
        newInput.setAttribute('name','date');
        newDate.appendChild(newInput);
        addDates.insertBefore(newDate,addDates.children[2]);
        counter++
        
    }else{
        const newInput = document.querySelector('.newInput');
        newDate.removeChild(newDate.lastChild);
        counter--
    }
    
};

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        makeDate(button.id);
        console.log(counter);
    });
});



   
