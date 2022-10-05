
let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navBar.classList.remove('active');
}

let navBar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navBar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () =>{
   
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

// fadeOut();

// function loader(){
//     document.querySelector('.loader-container').classList.add('active');
// }

// function fadeOut(){
//     setTimeout(loader, 5000);
// }