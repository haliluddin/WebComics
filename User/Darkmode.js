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