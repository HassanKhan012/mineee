import {auth, createUserWithEmailAndPassword ,  onAuthStateChanged } from '../firebase.js'

let formField = document.querySelectorAll("form input");

let [singupemail, singuppassword] = formField;

// console.log(singupemail.value);

let singupBtn = document.getElementById("singupbtn");


const singup = () => {
    event.preventDefault();
    singupBtn.innerText = "loading...."
    createUserWithEmailAndPassword(auth, singupemail.value, singuppassword.value)
        .then((userCredential) => {
            singupBtn.innerText = "Singup"
            const user = userCredential.user;
            Toastify({
                text: "Singup Successfully",
                duration: 3000
                }).showToast();

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            singupBtn.innerText = "Singup"
                Toastify({
                    text: `${errorMessage}`,
                    duration: 3000
                    }).showToast();
            });


            
}

singupBtn.addEventListener("click", singup);




onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "../Dashboard/dash.html"
    } 
  });





