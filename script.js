// Navigation Menu
const menuLinks = document.querySelectorAll('nav ul li a');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Image Gallery (Portfolio page)
const galleryItems = document.querySelectorAll('.gallery-item');
const filterButtons = document.querySelectorAll('.filter button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.textContent.toLowerCase();
    galleryItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(n) {
  testimonials.forEach((testimonial, index) => {
    if (index === n) {
      testimonial.style.display = 'block';
    } else {
      testimonial.style.display = 'none';
    }
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

setInterval(nextTestimonial, 3000);

// Contact Form Validation
const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (event) => {
      const name = form.querySelector('input[name="name"]');
      const email = form.querySelector('input[name="email"]');
      const message = form.querySelector('textarea[name="message"]');
      let valid = true;

      if (!name.value.trim()) {
        showError(name, 'Name is required');
        valid = false;
      } else {
        clearError(name);
      }

      if (!email.value.trim()) {
        showError(email, 'Email is required');
        valid = false;
      } else if (!validateEmail(email.value.trim())) {
        showError(email, 'Enter a valid email');
        valid = false;
      } else {
        clearError(email);
      }

      if (!message.value.trim()) {
        showError(message, 'Message is required');
        valid = false;
      } else {
        clearError(message);
      }

      if (!valid) {
        event.preventDefault();
      }
    });

    function showError(input, message) {
      const errorElement = document.createElement('div');
      errorElement.className = 'error';
      errorElement.innerText = message;
      input.parentElement.insertBefore(errorElement, input.nextSibling);
    }

    function clearError(input) {
      if (input.nextElementSibling && input.nextElementSibling.classList.contains('error')) {
        input.nextElementSibling.remove();
      }
    }

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  }
// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('h2');
  const answer = item.querySelector('p');

  if (question && answer) {
    question.addEventListener('click', () => {
      answer.classList.toggle('open');
      question.classList.toggle('active');
    });
  }
});