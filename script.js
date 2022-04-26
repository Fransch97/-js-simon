console.log("I'm alive ");
const btn = document.querySelector('button');
console.log(btn);
const spanNumbers = document.querySelectorAll('span')
console.log(spanNumbers);
const timerHtml = document.querySelector('.counter')
console.log(timerHtml);
const counter = 5;
const gameDisplay = document.querySelector('.game')
console.log(gameDisplay)

const choosedNumbers = []
const Userchoised = []
const rightNumbers = []


function randomNumber(to){
    const number = Math.ceil(Math.random()* to)
    return number
}

function generateNumbersSpan(){
    
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


function timer(counter){
   const timer = setInterval(function(){
        console.log(counter--);
        if(counter<0){
            clearInterval(timer);
            gameDisplay.classList.add('hide');
            startQuestion();
        }
        }, 1000)
}

timer(counter)

function startQuestion(){
    // alert("Usciranno 5 prompt digita e invia in fila i numeri che ricordi"),
    for(let i = 0; i<5; i++){
        const numberUser = parseInt(prompt(`Inserisci il numero ${i+1}` ))
        Userchoised.push(numberUser)
    }
    console.log("user number",Userchoised)
    console.log("pc number",choosedNumbers)
    // controlNumbers();
    for(let i = 0; i< 5 ; i++){
        const controll = choosedNumbers.includes(Userchoised[i]);

        if(controll){
            console.log(choosedNumbers.includes(Userchoised[i]));
            rightNumbers.push(Userchoised[i]);
            console.log("rightnumbers",rightNumbers);
        }else{
            console.log(false)
        }
    }
    console.log("rightnumbers", rightNumbers)
}


// function controlNumbers(){
//     for(let i = 0; i< choosedNumbers.length ; i++){
//         if(choosedNumbers.includes(Userchoised[i])){
//             rightNumbers.push(Userchoised)
//             console.log("rightnumbers",rightNumbers);
//         }
//     }
// }

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

