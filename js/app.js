
// On scroll navbar menu Highlight
const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120; // Adjust if needed
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // Optional: when clicking, instantly highlight the active link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
// On scroll navbar menu Highlight End

// Tag Start ==========================
const collapseButton = document.getElementById('collapse-button');
const tagList = document.getElementById('tag-list');
const tagItems = document.querySelectorAll('.tag-item');
const submitButton = document.getElementById('submit-button');
const clearButton = document.getElementById('clear-button');
const buttonContainer = document.querySelector('.button-container');

collapseButton.addEventListener('click', (event) => {
  tagList.classList.toggle('collapsed');
  buttonContainer.classList.toggle('collapsed'); /* Toggle collapsed class on buttons container */
  collapseButton.textContent = tagList.classList.contains('collapsed') ? 'v' : '^';
});

tagItems.forEach(tagItem => {
  tagItem.addEventListener('click', () => {
    tagItem.classList.toggle('selected');
  });
});

submitButton.addEventListener('click', () => {
  const selectedTags = document.querySelectorAll('.tag-item.selected');
  const selectedValues = Array.from(selectedTags).map(tag => tag.textContent);
  console.log('Selected tags:', selectedValues);
});

clearButton.addEventListener('click', () => {
  tagItems.forEach(tagItem => {
    tagItem.classList.remove('selected');
  });
});
// Tag End ==========================

// Filter toggler Start ==========================
const toggleButton = document.getElementById("filter-toggle");
const slideContainer = document.getElementById("side-filter");

toggleButton.addEventListener("click", () => {
  slideContainer.classList.toggle("expanded");
});
// Filter toggler End ==========================

// Quantity counter Start ============================

// Quantity counter End ============================

// Jquery Start ==========================
$(document).ready(function() {
  // Show all items initially
  $('.service-item').fadeIn();

  $('.filter-btn').on('click', function() {
    var filterValue = $(this).attr('data-filter');

    $('.filter-btn').removeClass('c-active');
    $(this).addClass('c-active');

    if (filterValue == 'all') {
      $('.service-item').fadeIn();
    } else {
      $('.service-item').hide();
      $('.' + filterValue).fadeIn();
    }
  });
});
// Jquery End ============================





