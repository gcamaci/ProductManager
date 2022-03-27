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
        newInput.type = 'datetime-local';
        newInput.classList.add('newInput');
        newDate.appendChild(newInput);
        addDates.insertBefore(newDate,addDates.children[2]);
        counter++
        
    }else{
        const newInput = document.querySelector('.newInput');
        newDate.removeChild(newInput);
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

submit.addEventListener('click', () => {
    const name = document.querySelector('#name');
    const master = document.querySelector('#master-event');
    const venue = document.querySelector('#venue');

    const newInputs = document.querySelectorAll('.newInput');
    newInputs.forEach((newInput) => {
        let currentDate =newInput.value;
        dates.push(currentDate)
    });

    for(let i = 0; i <= dates.length ; i++){
        console.log(`Event: ${name.value} Date: ${dates[i]} Venue: ${venue.value} `)
    }
});

   
