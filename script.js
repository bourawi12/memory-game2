const cards = document.querySelectorAll('.memory-card');
function handleEvent(event) {
  let id = event.target.id;
  // Rest of your code using the id
  console.log(id);
}

// Attach an event listener and pass the event object to the handler
this.addEventListener('click', handleEvent);
function flipCard() {
  console.log('i was clicked!');
  console.log(this);
  this.classList.toggle('flip');
}

cards.forEach((card) => {
  card.addEventListener('click',flipCard);
  //console.log(id);
});
