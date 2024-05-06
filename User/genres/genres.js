/* Coinshop Modal */
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
} /* Coinshop Modal */
    
    
    
    /* Profile */
    function dropdown() {
    var dropdown = document.getElementById('dropdown-content');
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
    }

    function dropdown1() {
    var dropdown = document.getElementById('dropdown-content1');
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
    } /* Profile */


/* DARKMODE *//* DARKMODE *//* DARKMODE */
       
const themePreference = localStorage.getItem('theme');

if (themePreference) {
  document.body.classList.add(themePreference);
}

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  
  const themeIcon = document.getElementById('theme-icon');
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light-mode');
  }
});

// Set initial toggle state
if (themePreference === 'dark-mode') {
  themeToggle.checked = true;
  const themeIcon = document.getElementById('theme-icon');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
}


/* DARKMODE *//* DARKMODE *//* DARKMODE */