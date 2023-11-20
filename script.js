/ Example JavaScript code for a simple testimonial carousel

document.addEventListener('DOMContentLoaded', function () {
  // Replace with your actual testimonial data
  const testimonials = [
    { quote: "The Computer Science department has a fantastic curriculum!", author: "John Agyeman" },
    { quote: "I learned so much from the faculty's expertise.", author: "Jane Owusu" },
    { quote: "I learned so much from the faculty's expertise.", author: "Agnes Ofori " }
    // Add more testimonials as needed
  ];

  let currentTestimonial = 0;
  const testimonialText = document.getElementById('testimonial-text');
  const testimonialAuthor = document.getElementById('testimonial-author');

  function displayTestimonial() {
    testimonialText.textContent = testimonials[currentTestimonial].quote;
    testimonialAuthor.textContent = `- ${testimonials[currentTestimonial].author}`;
  }

  // Function to show the next testimonial
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    displayTestimonial();
  }

  // Function to show the previous testimonial
  function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    displayTestimonial();
  }

  // Display the first testimonial on page load
  displayTestimonial();

  // Attach event listeners to next and previous buttons
  document.getElementById('next-testimonial').addEventListener('click', nextTestimonial);
  document.getElementById('prev-testimonial').addEventListener('click', prevTestimonial);
});