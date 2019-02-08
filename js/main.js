//Navbar
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//MailTo Form
function sendMail() {
  var name = document.getElementById('name').value;
  var email= document.getElementById('email').value;
  var options = document.getElementById('options').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  var link = "mailto:yourEmail@domain.com" + "?subject=" + options + ", Subject: " + subject + "&body=" + "Hi, I am " + name + " my email is " + email + " I would like to ask about: " + message;

  window.location.href = link;
}
