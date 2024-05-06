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
themeToggle.addEventListener('click', () => {
document.body.classList.toggle('dark-mode');


if (document.body.classList.contains('dark-mode')) {
localStorage.setItem('theme', 'dark-mode');
} else {
localStorage.setItem('theme', 'light-mode');
}
});
/* DARKMODE *//* DARKMODE *//* DARKMODE */



/* DELETE *//* DELETE *//* DELETE */
function goFront(){
    document.getElementById('id03').style.display = 'none';
    document.getElementById('id04').style.display = 'block';
    }
    function goBack() {
    document.getElementById('id04').style.display = 'none';
    document.getElementById('id03').style.display = 'none';
    }
/* DELETE *//* DELETE *//* DELETE */