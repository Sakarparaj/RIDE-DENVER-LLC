// Images Slide display
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Increment slide index
  slideIndex++;
  
  // Reset to first slide if at the end
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show current slide and activate corresponding dot
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  // Change image every 5 seconds
  setTimeout(showSlides, 8000);
}

// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only for internal links
      if(this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
          // Account for fixed navbar height
          const navHeight = document.querySelector('nav').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          document.getElementById('check').checked = false;
        }
      }
    });
  });
});
  // Contact form email functionality
  const sendButton = document.getElementById('sendButton');
  if (sendButton) {
    sendButton.addEventListener('click', function() {
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const mobile = document.getElementById('mobile').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Basic validation
      if (!firstName || !lastName || !email || !message) {
        alert('Please fill out all required fields (First Name, Last Name, Email, and Message).');
        return;
      }
      
      // Create email body
      const subject = `Contact from ${firstName} ${lastName} - Ride Denver Website`;
      let emailBody = `From: ${firstName} ${lastName}\n`;
      emailBody += `Email: ${email}\n`;
      if (mobile) emailBody += `Mobile: ${mobile}\n`;
      emailBody += `\nMessage:\n${message}`;
      
      // Encode for mailto
      const mailtoLink = `mailto:balaj8518@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
    });
  }

