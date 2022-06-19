// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heartLike = document.querySelector('.like-glyph');

function heartLikeCallback(event) {
  const heart = event.target;
  
  mimicServerCall()
  .then(function(serverMessage) {
    alert("You liked!");
    alert(serverMessage)
  })
  .catch(function(error) {
    alert(error);
    heart.innerText = FULL_HEART[heart.innerText];
    heart.innerText = EMPTY_HEART[heart.innerText];
    FULL_HEART(heart.innerText);
    heart.classList.contains(activated-heart) ? heart.classList.remove('activated-heart') : heart.classList.add('activated-heart');
  });
}

for (let heart of document.querySelectorAll('.like-glyph')) {
  heart.addEventListener('click', heartLikeCallback);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
