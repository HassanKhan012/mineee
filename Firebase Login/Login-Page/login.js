import { auth, signInWithEmailAndPassword , onAuthStateChanged , sendPasswordResetEmail } from '../firebase.js';

let formField = document.querySelectorAll("form input");

const [lemail, lpassword] = formField;

// console.log(lemail.value , lpassword.value);

let loginBtn = document.getElementById("loginBtn");

const login = () => {
  event.preventDefault();
  loginBtn.innerText = "loading...."
  signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
    .then((userCredential) => {
      loginBtn.innerText = "Singin"
      const user = userCredential.user;
      Toastify({
        text: "Login Successfully",
        duration: 3000
      }).showToast();
      console.log(user);
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


loginBtn.addEventListener("click", login)




onAuthStateChanged(auth, (user) => {
  if (user) {
      window.location.href = "../Dashboard/dash.html"
  } 
});

let forgotpass = document.getElementById("forget-pass")

const forgotpassword = () =>{
  sendPasswordResetEmail(auth, lemail.value)
  .then(() => {
    Toastify({
      text: "Password Sent Check Email.",
      duration: 3000
    }).showToast();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({
      text: `${errorMessage}`,
      duration: 3000
    }).showToast();
  });
}


forgotpass.addEventListener("click" , forgotpassword)