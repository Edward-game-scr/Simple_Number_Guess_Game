let loop = true;
let Nmax = 100;
let Nmin = 18;
let ans = Math.floor(Math.random() * (Nmax - Nmin + 1) + Nmin);
let guess;
let guesses_took = 1;

//console.log(ans);

while(loop) {

    guess = window.prompt(`Guess the secret number between ${Nmin} - ${Nmax}`);

    guess = Number(guess);

    if(guess === ans) {

        window.alert(`Congratulations! The correct number was ${ans}. It took you ${guesses_took} attempts!`);
        loop = false;
    }
    else if(guess < Nmin) {

        window.alert(`The selected number is less than the minimum ${Nmin}!`)
        guesses_took++;

    }
    else if(guess > Nmax) {

        window.alert(`The selected number is bigger than the maximim ${Nmax}!`)
        guesses_took++;

    }
    else if(guess > ans) {

        window.alert("The number is too big!");
        guesses_took++;

    }
    else{
        
        window.alert("The numbet is too small!.");
        guesses_took++;

    }

}