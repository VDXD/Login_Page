// var computer = Math.floor(Math.random() * 100 + 1)

// var guess = false

// while(!guess){
//     var human = prompt("Guess between 1 to 100: ")

//     if(human==computer){
//         console.log("Correct smart nigga, You guessed: " + human)
//         guess = true
//     }
//     else if (human > computer){
//         console.log("Go lower nigga, Your guess was: " + human)
//     }
//     else {
//         console.log("Higher nigga, Your guess was: " + human)
//     }
// }


document.getElementById("register").addEventListener("click", function() {
    var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //For new registration
    console.log("hello")
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("Registration successfully!!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
      alert(error);
    });		  		  
});