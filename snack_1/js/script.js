/*
Snack 1
Creare un array di oggetti: (fatto)--------------
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. (fatto)--- 
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. 
Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6. 
*/

var shopBike = [
    {
        name: "specialized",
        weight: 7
    },
    {
        name: "ghost",
        weight: 12
    },
    {
        name: "cube",
        weight: 5
    },
]

var bike; // qui andra l'oggetto bici
var bikeLessWeight = 100; // qui la bici con minor peso

for (var i = 0; i < shopBike.length; i++) {

    var thisWeight = shopBike[i].weight;
    if (thisWeight < bikeLessWeight ) { // (typeof bikeLessWeight  === "undefined" || thisWeight < bikeLessWeight)
        bike = shopBike[i];
        bikeLessWeight = thisWeight;  
    }    
}
console.log(bike);