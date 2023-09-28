const cards = document.querySelectorAll('.memory-card');
let hasflippedcard=false;
let firstcard,secondcard;
function handleEvent(event) {
  let id = event.target.id;
  // Rest of your code using the id
  console.log(id);
}

// Attach an event listener and pass the event object to the handler
this.addEventListener('click', handleEvent);
function flipCard() {
  this.classList.toggle('flip');
  if(!hasflippedcard){
    //the first click
    hasflippedcard=true;
    firstcard=this;
    
  }else{
    //second pick
    hasflippedcard= false ;
    secondcard=this;
    // do cards match ?
    console.log(firstcard.dataset.framework);
    console.log(secondcard.dataset.framework);
    if (firstcard.dataset.framework === secondcard.dataset.framework) {
      // It's a match
      console.log("Match!!");
      firstcard.removeEventListener('click', flipCard);
      secondcard.removeEventListener('click', flipCard);
    }
    
    else{
      setTimeout(() => {
      firstcard.classList.remove('flip');
      secondcard.classList.remove('flip');
    },1500);
    }
  }
  
}

cards.forEach((card) => {
  
  card.addEventListener('click',flipCard);
  //console.log(id);
});
