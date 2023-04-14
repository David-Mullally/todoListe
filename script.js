var table = document.getElementById('table');
var ticketnummer = document.getElementById('ticketnummer');
var thema = document.getElementById('thema');
var zusammenfassung = document.getElementById('zusammenfassung');

var currentTable = "allgemein";

var tableContents = [
];

submitForm = () => {
    let ticket = ticketnummer.value;
    let the = thema.value;
    let zf = zusammenfassung.value;
    tableContents.push(
        {
            id: ticket,
            thema: the,
            zusammenfassung: zf
        }
    );
    table.innerHTML += `<tr><td>${tableContents[tableContents.length - 1].id}</td><td>${tableContents[tableContents.length - 1].thema}</td><td>${tableContents[tableContents.length - 1].zusammenfassung}</td></tr>`
    
    ticketnummer.value = "";
    thema.value = "";
    zusammenfassung.value= "";
};

