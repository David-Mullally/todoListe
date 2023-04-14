var table = document.getElementById('table');

var currentTable = "allgemein";

var tableContents = [
    {
        id: 216,
        thema: "General",
        zusammenfassung: "Blümen kaufen"
    },
    {
        id: 516,
        thema: "Technische",
        zusammenfassung: "Updates Insatllieren",
    }
];

for (let i = 0 ; i < tableContents.length; i++){
    table.innerHTML += `<tbody><tr><td>${tableContents[i].id}</td><td>${tableContents[i].thema}</td><td>${tableContents[i].zusammenfassung}</td></tr></tbody>`
};


