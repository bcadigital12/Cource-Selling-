
// Toggle functioning

let navLinks = document.getElementById("nav-links");
var menuList = document.querySelector(".menu-list");

function openMenu() {
    menuList.style.right = "0px";
}

function hideMenu() {
    menuList.style.right = "-220px";
}




// document.addEventListener('DOMContentLoaded', () => {
//     const counters = document.querySelectorAll('.count');
    
//     counters.forEach(counter => {
//         const updateCount = () => {
//             const target = +counter.getAttribute('data-count');
//             const count = +counter.innerText;

//             // Adjust the increment based on how fast you want the counter to reach the target
//             const increment = target / 200;
            
//             if (count < target) {
//                 counter.innerText = Math.ceil(count + increment);
//                 setTimeout(updateCount, 5); // Adjust timing for smoothness
//             } else {
//                 counter.innerText = target;
//             }
//         };
        
//         updateCount();
//     });
// });

var countDownDate = new Date("Oct 16, 2024 00:00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);



// Sending Email through SMTP server //
// smtp.js

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


// Animation loader 

let loadDocument = document.getElementById('loader_animation');

window.onload = () => {
    setTimeout(() => {
        loadDocument.style.display = "none";
    }, 3000);
}


// array in js 

let arr = [10,0,'A','B',0,100,'A',30,10,'C','A',60,1,'Z',100,40];

console.log(arr);

let dublicate = arr.filter((value,index) => {
    return arr.indexOf(value) == index;
})

console.log(dublicate);




