console.log("I'm alive ");
const btn = document.querySelector('button').addEventListener('click', startEverthing);
console.log(btn);
const spanNumbers = document.querySelectorAll('span')
console.log(spanNumbers);
const timerHtml = document.querySelector('.counter')
console.log(timerHtml);
const counter = 5;
const gameDisplay = document.querySelector('.game')
console.log(gameDisplay)

const choosedNumbers = [];
const Userchoised = [];
const rightNumbers = [];
let score = 0;




function startEverthing(){
    gameDisplay.classList.remove('hide')
    resetGame();
    generateNumbersSpan();
    timer(counter);
    document.querySelector('button').innerHTML = "Replay"
    document.querySelector('button').classList.add('hide')
}

function resetGame(){
    choosedNumbers.length = 0;
    Userchoised.length = 0;
    rightNumbers.length = 0;
    score = 0;
}

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

// generateNumbersSpan()


function timer(counter){
   const timer = setInterval(function(){
        console.log(counter--);
        timerHtml.innerHTML = counter
        if(counter<0){
            clearInterval(timer);
            gameDisplay.classList.add('hide');
            startQuestion();
        }
        }, 1000)
}

// timer(counter)

function startQuestion(){
    // alert("Usciranno 5 prompt digita e invia in fila i numeri che ricordi"),
    for(let i = 0; i<5; i++){
        const numberUser = parseInt(prompt(`Inserisci il numero ${i+1} su 5` ))
        Userchoised.push(numberUser)
    }
    console.log("user number",Userchoised)
    console.log("pc number",choosedNumbers)
    controlNumbers();
    console.log("rightnumbers", rightNumbers)
    resultHtlm()
    document.querySelector('button').classList.remove('hide')
}


function controlNumbers(){
    for(let i = 0; i< 5 ; i++){
        const controll = choosedNumbers.includes(Userchoised[i]);

        if(controll){
            console.log(choosedNumbers.includes(Userchoised[i]));
            rightNumbers.push(Userchoised[i]);
            console.log("rightnumbers",rightNumbers);
            score++
        }else{
            console.log(false)
        }
    }
}

function resultHtlm(){
    gameDisplay.innerHTML = `<h2> Hai indovinato ${score} Numeri. <br> ${rightNumbers} </h2>`;
    gameDisplay.classList.remove('hide')
}



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

