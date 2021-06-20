/*
Snack 3
Abbiamo sempre un array di squadre, con:
nome
punti fatti
falli subiti
Stampare in html (in forma tabellare!!!) 
i dati relativi alle squadre evidenziando in giallo la riga corrispondente 
alla squadra con più falli subiti.
*/

let tableHTML = document.querySelector('.container');

let serieA = [
    {
        nome: "roma",
        punti_fatti: 90,
        falli_subiti: 10
    },
    {
        nome: "napoli",
        punti_fatti: 55,
        falli_subiti: 45
    },
    {
        nome: "inter",
        punti_fatti: 85,
        falli_subiti: 25
    },
    {
        nome: "spiaze",
        punti_fatti: 70,
        falli_subiti: 50
    },
]

let newFalliSubiti = 0; //creo una variabile nella quale andra il num piu alto!

for (let x = 0; x < serieA.length; x++) { 

    const { falli_subiti } = serieA[x];
    
    if (falli_subiti > newFalliSubiti) {
        newFalliSubiti = falli_subiti;
    }

}
// VERSIONE ES6 -------------

console.log(newFalliSubiti);

for (let i = 0; i < serieA.length; i++) {

    const { nome, punti_fatti, falli_subiti} = serieA[i];

    if (serieA[i].falli_subiti < newFalliSubiti) {
    tableHTML.innerHTML += `
    <ul>
        <li>${nome}</li>
        <li>${punti_fatti}</li>
        <li>${falli_subiti}</li>
    </ul>
    `
    } else

    tableHTML.innerHTML += `
    <ul>
        <li style="background-color: yellow">${nome}</li>
        <li style="background-color: yellow">${punti_fatti}</li>
        <li style="background-color: yellow">${falli_subiti}</li>
    </ul>
    `  
}

// VERSIONE ES5 ---------------------

// for (let i = 0; i < serieA.length; i++) {

   
//     let tableRow = '<ul>'; 
//     let thisClub = serieA[i];
    
//     if (serieA[i].falli_subiti < newFalliSubiti) {
//     tableRow += '<li>' + thisClub.nome + '</li>';
//     tableRow += '<li>' + thisClub.punti_fatti + '</li>';
//     tableRow += '<li>' + thisClub.falli_subiti + '</li>';
//     tableRow += '</ul>';

//     tableHTML.innerHTML += tableRow;
//     } else {   
//     tableRow += '<li style="background-color: yellow">' + thisClub.nome + '</li>';
//     tableRow += '<li style="background-color: yellow">' + thisClub.punti_fatti + '</li>';
//     tableRow += '<li style="background-color: yellow">' + thisClub.falli_subiti + '</li>';
//     tableRow += '</ul>';

//     tableHTML.innerHTML += tableRow;

//     }
// }