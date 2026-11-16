// Welcome message when the website opens

window.addEventListener("load", function() {
    console.log("Welcome to Prem's Personal Website!");
});

// Navigation click message

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log(
            "You visited: " + link.textContent
        );

    });

});

// Discover More button interaction

const discoverButton = document.querySelector(".btn");

discoverButton.addEventListener("click", function() {

    alert("Welcome! Explore my personal introduction.");

});