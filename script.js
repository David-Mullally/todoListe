var table = document.getElementById("table");
var ticketnummer = document.getElementById("ticketnummer");
var thema = document.getElementById("thema");
var zusammenfassung = document.getElementById("zusammenfassung");

var currentTable = "allgemein";
var tableContents = [];
var tableFromLocalStorage = localStorage.getItem("table");

var tableForLocalStorage = tableFromLocalStorage;

table.innerHTML += tableForLocalStorage;

submitForm = () => {
  let ticketVal = ticketnummer.value;
  let themaVal = thema.value;
  let zfVal = zusammenfassung.value;

  tableContents.push({
    id: ticketVal,
    thema: themaVal,
    zusammenfassung: zfVal,
  });

  if (tableContents.length >= 1) {
    tableForLocalStorage += `<tr><td>${
      tableContents[tableContents.length - 1].id
    }</td><td>${tableContents[tableContents.length - 1].thema}</td><td>${
      tableContents[tableContents.length - 1].zusammenfassung
    }</td></tr>`;

    table.innerHTML += `<tr><td>${
      tableContents[tableContents.length - 1].id
    }</td><td>${tableContents[tableContents.length - 1].thema}</td><td>${
      tableContents[tableContents.length - 1].zusammenfassung
    }</td></tr>`;
  }
  ticketnummer.value = "";
  thema.value = "";
  zusammenfassung.value = "";
  localStorage.setItem("table", tableForLocalStorage);
};
