// Select all nav links within the collapse menu
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      // Find the navbar collapse element and close it
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });


// Set the fixed header height offset
const headerOffset = 400; // Change this to match the height of your fixed header

// Function to handle smooth scrolling with offset
function scrollWithOffset(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  
  // Only apply the offset behavior on mobile screen sizes
  if (window.innerWidth <= 768) { // 768px or lower for mobile
    // Get the target element ID from the clicked link
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate the exact offset position
      const elementPosition = targetElement.offsetTop - headerOffset;
      
      // Scroll to the calculated position
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  } else {
    // If on a larger screen, scroll to the element without offset
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// Add event listeners to all nav links
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', scrollWithOffset);
});
 