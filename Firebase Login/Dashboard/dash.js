document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    if(title && description) {
        addBlogCard(title, description);
        clearForm();
    }
});

function addBlogCard(title, description) {
    let blogList = document.getElementById('blogList');

    let blogCard = document.createElement('div');
    blogCard.className = 'blog-card';

    let blogTitle = document.createElement('h3');
    blogTitle.textContent = title;

    let blogDescription = document.createElement('p');
    blogDescription.textContent = description;

    let blogDate = document.createElement('span');
    let date = new Date();
    blogDate.textContent = `${date.toDateString()}`;

    blogCard.appendChild(blogTitle);
    blogCard.appendChild(blogDescription);
    blogCard.appendChild(blogDate);

    blogList.appendChild(blogCard);
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
}

import { auth, signOut , onAuthStateChanged } from "../firebase.js";

let logout = document.getElementById("logout");

const Logout = () => {
    signOut(auth).then(() => {
        Toastify({
            text: "Logout Successfully",
            duration: 3000
        }).showToast();
    }).catch((error) => {
        Toastify({
            text: error,
            duration: 3000
        }).showToast();
    });
}

logout.addEventListener("click", Logout)


onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "../Login-Page/login.html"   
    }
});


