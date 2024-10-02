document.addEventListener('DOMContentLoaded', () => { 
  const toggleButton = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  // Function to switch themes
  const switchTheme = () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode', !isDarkMode);
    themeIcon.classList.toggle('fa-sun', isDarkMode);
    themeIcon.classList.toggle('fa-moon', !isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  // Load the saved theme on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeIcon.classList.add('fa-sun');
    themeIcon.classList.remove('fa-moon');
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    themeIcon.classList.add('fa-moon');
    themeIcon.classList.remove('fa-sun');
  }

  // Add click event listener to the button
  toggleButton.addEventListener('click', switchTheme);

  // Set active state for nav items
  const navItems = document.querySelectorAll('.nav-item');
  const currentPage = window.location.pathname.split('/').pop() || 'home'; // Get the current page

  navItems.forEach(item => {
    const page = item.getAttribute('data-page'); // Get the data-page attribute
    if (page === currentPage) {
      item.classList.add('active'); // Add active class
    }

    item.addEventListener('click', () => {
      document.querySelector('.nav-item.active')?.classList.remove('active');
      item.classList.add('active');
    });
  });
});

// Scroll arrow functionality
document.addEventListener('DOMContentLoaded', function () {
  const arrow = document.querySelector('.scroll-arrow');
  const footer = document.querySelector('footer');

  arrow.addEventListener('click', () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });
});

// Service visibility on scroll
document.addEventListener('DOMContentLoaded', function() {
  const services = document.querySelectorAll('.service');

  function handleScroll() {
    const triggerPoint = window.innerHeight * 0.75;

    services.forEach(service => {
      const rect = service.getBoundingClientRect();
      if (rect.top < triggerPoint && rect.bottom > 0) {
        service.classList.add('visible');
      } else {
        service.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
});

// Process box visibility on scroll
document.addEventListener('DOMContentLoaded', function () {
  const processBox = document.querySelector('.process-box');

  function checkVisibility() {
    const rect = processBox.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      processBox.classList.add('visible');
    }
  }

  // Check visibility on scroll and resize
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Initial check
  checkVisibility();
});

// Smooth scroll to sections
document.querySelector('.scroll-arrow a').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
});

// Intersection observer for intro statement
document.addEventListener('DOMContentLoaded', function () {
    const introStatement = document.querySelector('.intro-statement');
    const introContent = document.querySelector('.intro-content');
    
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // When the intro statement is scrolled out of view
                entry.target.classList.add('scrolled-out');
            } else {
                // When the intro statement is scrolled back into view
                entry.target.classList.remove('scrolled-out');
            }
        });
    }, { threshold: 0.5 });

    // Observe the elements
    observer.observe(introStatement);
    observer.observe(introContent);
});
