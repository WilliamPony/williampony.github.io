const heroText = document.getElementById("hero-text");
const heroSubtext = document.getElementById("hero-subtext");
const whiteBox = document.getElementById("white-box");

// Function to detect when the hero section is fully out of view
window.addEventListener("scroll", function() {
    const heroSectionHeight = document.querySelector(".hero").offsetHeight;  // Get the height of the hero section
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // When scroll position passes the height of the hero section, hide hero text
    if (scrollPosition >= heroSectionHeight) {
        heroText.classList.add("hidden");
        heroSubtext.classList.add("hidden");
    } else {
        // Show hero text when back in view
        heroText.classList.remove("hidden");
        heroSubtext.classList.remove("hidden");
    }
});