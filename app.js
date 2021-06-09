//Get Elements
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overLay = document.getElementById('overlay');
const title = document.querySelector('#overlay .title');
let miss = 0;
let startGame = document.getElementsByClassName('btn__reset')[0];
let phrases = ["take it with a grain of salt", 
" a chip on your shoulder", 
"between a rock and a hard place", 
"change the world by being yourself", 
"love for all hatred for none"];


//Functions

//return random phrase from an array
const getRandomPhraseArray = arr => {
const randomPhrase = Math.floor(Math.random() * arr.length);
const newArray = arr[randomPhrase].split('');



return newArray;




};

//call get random phrase function
const phraseArray = getRandomPhraseArray(phrases);




//add the letters of a string to the display
const addPhraseToDisplay = arr => {

for(let i = 0; i < arr.length; i++) {
   const li = document.createElement('li');
   li.textContent = arr[i];
   if(li.textContent == ' ' ) {
       li.classList.add('space');
   } else {
       li.classList.add('letter');
   }
   //get ul 
   const ul = document.querySelector('#phrase ul');
   //append li
   ul.appendChild(li);

  

}

  

};

//call addPhraseToDisplay Function
addPhraseToDisplay(phraseArray);





//check if letter is in the phrase
const checkLetter = button => {
    //store all li elements 
    const checkLetters = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    //match found
    let matchFound = null;

    for(i = 0; i < checkLetters.length; i++) {
        if(checkLetters[i].textContent == button.textContent) {
            checkLetters[i].classList.add('show');
            matchFound = button.textContent;
            

        

        }

       
    }

    return matchFound;

    


};




//check if the game has been won or lost
const checkWin = () => {
    const letterClass = document.getElementsByClassName('letter');
    const showClass = document.getElementsByClassName('show');
    

        if(showClass.length == letterClass.length ) {
            overLay.className = 'win';
            title.innerHTML = "Winner!!!";
            overLay.style.display = 'flex';

        }
        
     
        if(miss > 4) {
         overLay.className = 'lose';
         title.innerHTML = "Try Again";
         overLay.style.display = 'flex';
     
        }

   

    
};




//Events
startGame.addEventListener('click', () => {
    
    overlay.style.display= 'none';

});

qwerty.addEventListener('click',  (event) => {
    if(event.target.tagName == 'BUTTON') {
       event.target.className = 'chosen';
       event.target.setAttribute('disabled', 'true');

       const letterFound = checkLetter(event.target);
       
      

       if(letterFound == null) {
        //grab heart image
        const tries = document.querySelector('#scoreboard ol');
        const firstChild = tries.children[0];
        tries.removeChild(firstChild);
       
        
        miss += 1; 
    }
    
       
        
    }

    checkWin();

    



});











