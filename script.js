const Production = (name, masterEvent, date,time, venue) => {
    return{ name,masterEvent,date,time,venue}
};

const displayController = (() => {
    let eventArray = [];
    let dates = [];
    let counter = 0;
    let lastInput;
    const newDate = document.createElement('div');
    const create = document.getElementById('create');
    const newBook = document.getElementById('new-book');
    newDate.classList.add('newDate');


    const makeDate = (a) => {
        const addDates = document.querySelector('.name-container');
        const addButton = document.querySelector('.add-date');
        
        const deleteDates = document.querySelector('.delete-date');
        if(a === "add"){
            const newInput = document.createElement('input');
            newInput.type = 'datetime';
            newInput.classList.add('newInput');
            newInput.classList.add('date');
            newInput.setAttribute('name','date');
            newDate.appendChild(newInput);
            addDates.insertBefore(newDate,addDates.children[2]);
            counter--
            
        }else{
            const newInput = document.querySelector('.newInput');
            newDate.removeChild(newDate.lastChild);
            counter--
        }
        
    };
    const formatDate = (dte) => {
        const dateSplit = dte.split('-');
        const day = [dateSplit[1],dateSplit[2],dateSplit[0]].join('/')
        return day

    };
    const changeTime = time => {
        time = time.split(':'); // convert to array
        let hours = Number(time[0]);
        let minutes = Number(time[1]);

      // calculate
        let timeValue;

        if (hours > 0 && hours <= 12) {
          timeValue= "" + hours;
        } else if (hours > 12) {
          timeValue= "" + (hours - 12);
        } else if (hours == 0) {
          timeValue= "12";
        }
        timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
        // get seconds
        timeValue += (hours >= 12) ? " PM" : " AM";  // get AM/PM
        return timeValue
      };

    const createEvent = () => {
        const allDates = document.querySelectorAll('.date');
        const name = document.getElementById('name');
        const masterEvent = document.getElementById('master-event');
        const venue = document.getElementById('venue');
        allDates.forEach((date)=>{
            const splitDate = date.value.split(' ');
            const day = formatDate(splitDate[0])
            const dateTime = changeTime(splitDate[1])
            
            const newEvent = Production(name.value,masterEvent.value,day,dateTime,venue.value);
            eventArray.push(newEvent);
            date.value = ''
            //console.log(date.value);
            //console.log(dates)
        });
        name.value = '';
        venue.value = '';
        masterEvent.value = ''

    };

    create.addEventListener('click',()=>{
        createEvent()
        console.log(eventArray)
    
    });

    newBook.addEventListener('click', () => {
        createBook()
    });

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            makeDate(button.id);
       
        });
    }); 

    
    return {makeDate,dates,eventArray}
})();


function createBook() {
    const submit = document.querySelector('#submit');
    const wb = XLSX.utils.book_new();
    wb.SheetNames.push("Test Sheet");
    let ws_data = []
    displayController.eventArray.forEach((per)=>{
        let rowArray = [per.name,per.masterEvent,per.venue,per.date]
        ws_data.push(rowArray);
    });

    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["Test Sheet"] = ws;

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
};

