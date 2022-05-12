// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// function //

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
let memory = []

let choice = []
// creare 5 numeri casuali con funzione mat random 
for (let i = 0; i < 5; i++) {
   let memoryRandom = (getRndInteger(1, 10));
    memory.push(memoryRandom)
    console.log(memory)
}
alert(memory)
// stampare numeri con un alert e farli sparire
setTimeout(ricorda, 10 * 1000);
//  far partire un timeri di 30 (inizialmente 10 secondi)


let ricordato = []
let points = 0;

function ricorda (){
// inserire numeri uno alla volta fino ad averne 5 e verificarne la presenza in lista  
    for (let i = 0; i < 5; i++){     
    let choiceS = Number(prompt("Inserire un numero"))
    choice.push(choiceS);
    console.log(choice);
    
    if( memory.includes(choiceS)){
        points++;
        ricordato.push(choiceS)
}
}alert(points, ricordato,) 
}



// stampare la quantità di numeri corretta e quali numeri corrispondono