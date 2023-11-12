$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.slider-dots',
    dotsClass: 'dots'
  });


  let hamberger = document.querySelector('.hamberger');
  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');

  hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open');
  });

  times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
  });

});


// download pdf

let sendButton = document.getElementById("sendBtn")
sendButton.addEventListener('click', function (e) {
  e.preventDefault()
  let nameOfMan = document.getElementById("nameOfper").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subjects").value;
  let message = document.getElementById("message").value;
  let body = "nameOfMan:" +nameOfMan + '<br/> email:' + email + '<br/> subjects:' + subject + '<br/> message:' + message;
    email.send({
    Host: "smtp.gmail.com",
    Username: "mdshoibakhtar1000@gmail.com",
    Password: "kscu xxbm koie spqw",
    To: 'mdshoibakhtar1000@gmail.com',
    From: email,
    Subject: "This is the subject",
    Body: body,
  }).then(
    message => alert(message,"[message send successfully]")
  );
})