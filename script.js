

const testimonials = [
    { quote: "The Computer Science department has a fantastic curriculum!", author: "John Agyeman" },
    { quote: "I learned so much from the faculty's expertise.", author: "Jane Owusu" },
    { quote: "I learned so much from the faculty's expertise.", author: "Agnes Ofori" },
  ];
  
  const studentTestimonials = [
    { quote: "I really enjoyed the hands-on projects in the computer science program.", author: "Kwabena Mensah" },
    { quote: "The faculty was always there to support me and help me succeed.", author: "Ama Boadi" },
    { quote: "I'm so grateful for the opportunities I had at [University Name] to explore different areas of computer science.", author: "Ebenezer Nkrumah" },
  ];
  
  let currentTestimonial = 0;
  let currentStudentTestimonial = 0;
  
  const testimonialText = document.getElementById('testimonial-text');
  const testimonialAuthor = document.getElementById('testimonial-author');
  
  const studentTestimonialText = document.getElementById('student-testimonial-text');
  const studentTestimonialAuthor = document.getElementById('student-testimonial-author');
  
  function displayTestimonial() {
    testimonialText.textContent = testimonials[currentTestimonial].quote;
    testimonialAuthor.textContent = `- ${testimonials[currentTestimonial].author}`;
  }
  
  function displayStudentTestimonial() {
    studentTestimonialText.textContent = studentTestimonials[currentStudentTestimonial].quote;
    studentTestimonialAuthor.textContent = `- ${studentTestimonials[currentStudentTestimonial].author}`;
  }
  
  // Function to show the next testimonial
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    displayTestimonial();
  }
  
  // Function to show the previous testimonial
  function prevTestimonial() {
    currentTestimonial = (currentTestimonial + testimonials.length - 1) % testimonials.length;
    displayTestimonial();
  }
  
  // Function to show the next student testimonial
  function nextStudentTestimonial() {
    currentStudentTestimonial = (currentStudentTestimonial + 1) % studentTestimonials.length;
    displayStudentTestimonial();
  }
  
  // Function to show the previous student testimonial
  function prevStudentTestimonial() {
    currentStudentTestimonial = (currentStudentTestimonial + studentTestimonials.length - 1) % studentTestimonials.length;
    displayStudentTestimonial();
  }
  
  // Display the first testimonial on page load
  displayTestimonial();
  
  // Attach event listeners to next and previous buttons
  document.getElementById('next-testimonial').addEventListener('click', nextTestimonial);
  document.getElementById('prev-testimonial').addEventListener('click', prevTestimonial);
  
  // Display the first student testimonial on page load
  displayStudentTestimonial();
  
  // Attach event listeners to next and previous student testimonial buttons
  document.getElementById('student-next-testimonial').addEventListener('click', nextStudentTestimonial);
  document.getElementById('student-prev-testimonial').addEventListener('click', prevStudentTestimonial);
  