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



const person = {
    name: 'Tom Segura',
    masterEvent: 'Tom Segura',
    venue: "Improv Comedy Club",
    date: "2022-03-09 20:00:00"
}

const person2= {
    name: 'Tom Segura',
    masterEvent: 'Tom Segura',
    venue: 'Improv Comedy Club',
    date: '2022-03-10 20:00:00'
}
const person3= {
    name: 'Tom Segura',
    masterEvent: 'Tom Segura',
    venue: 'Improv Comedy Club',
    date: '2022-03-10 20:00:00'
}

const personArray = [person,person2,person3];

const wb = XLSX.utils.book_new();
wb.SheetNames.push("Test Sheet");
let ws_data = []
personArray.forEach((per)=>{
    let rowArray = [per.name,per.masterEvent,per.venue,per.date]
    ws_data.push(rowArray);
});
/*
const ws_data = [
    [person.name,person.masterEvent,person.venue,person.date],
    [person2.name,person2.masterEvent,person2.venue,person2.date],
    [person3.name,person3.masterEvent,person3.venue,person3.date]
]
*/
const ws = XLSX.utils.aoa_to_sheet(ws_data);
wb.Sheets["Test Sheet"] = ws;
    

//const ws_data = [[person.name,person.masterEvent,person.venue,person.date]]



const wbout = XLSX.write(wb,{bookType: 'xlsx', type:'binary'});

function s2ab(s) {
  
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
    
}

submit.addEventListener('click',() => {
    saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');

});