/* DARKMODE *//* DARKMODE *//* DARKMODE */
       
const themePreference = localStorage.getItem('theme');

if (themePreference) {
document.body.classList.add(themePreference);
}
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
document.body.classList.toggle('dark-mode');


if (document.body.classList.contains('dark-mode')) {
localStorage.setItem('theme', 'dark-mode');
} else {
localStorage.setItem('theme', 'light-mode');
}
});
/* DARKMODE *//* DARKMODE *//* DARKMODE */