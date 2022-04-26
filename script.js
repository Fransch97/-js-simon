console.log("I'm alive ");
const btn = document.querySelector('button');
console.log(btn);
const spanNumbers = document.querySelectorAll('span')
console.log(spanNumbers);







function randomNumber(to){
    const number = Math.ceil(Math.random()* to)
    return number
}

function generateNumbersSpan(){
    const choosedNumbers = []
    for(let i = 0; i < 5; i++){
        let numeber = randomNumber(99)
        console.log(numeber)
        if(!choosedNumbers.includes(numeber)){
            choosedNumbers.push(numeber)
            console.log(choosedNumbers)
        }else{
            let dlag = false
            while(!dlag){
                numeber = randomNumber(99)
                if(!choosedNumbers.includes(numeber));
                choosedNumbers.push(numeber)
                console.log(choosedNumbers)
                dlag = true;
            }
        }
    }

    for(let i = 0; i< choosedNumbers.length; i++){
        spanNumbers[i].innerHTML = choosedNumbers[i];
    }
}
generateNumbersSpan()

// Esercizio di oggi: **Simon Says**
// nome repo: js-simon
// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
// Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// **Consigli del giorno:**
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
// buon lavoro!

