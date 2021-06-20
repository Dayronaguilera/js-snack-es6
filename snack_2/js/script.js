/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array 
i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

let serieA = [
    {
        nome: "roma",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "napoli",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "inter",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "spiaze",
        punti_fatti: 0,
        falli_subiti: 0
    },
]

for (let i = 0; i < serieA.length; i++) {
    
    let randomNumber = Math.floor(Math.random() * 100) + 1; // generiamo dei numeri random da inserire nel array
    
    serieA[i].punti_fatti = randomNumber;
    serieA[i].falli_subiti = randomNumber;

}
console.log(serieA);

const newArray =[];

for (let i = 0; i < serieA.length; i++) {
    const {nome, falli_subiti} = serieA[i];
    newArray[i] ={
        nome,
        falli_subiti
    };
}
console.log(newArray);