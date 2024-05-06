/* ADS *//* ADS *//* ADS *//* ADS *//* ADS */
let subBtn = document.getElementById("subscribe");
let subscribe = false;

subBtn.addEventListener('click' , () => { 
if (subscribe) {
  subBtn.innerText="Subscribed ✓"
  subBtn.style = "background-color: #02767c;border-radius: 30px; padding:8px;"
  subscribe = false
}
else{
  subBtn.innerText="Subscribe +"
  subBtn.style = " background-color: black; color: white; border: white 2px solid;border-radius: 30px; padding:8px;transition: background-color 0.15s;font-size: 16px;border: none;"
  subscribe = true
}
})

function toggleDropdown(id) {
        var dropdown = document.getElementById(id);
        if (dropdown.style.display === 'none') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
        }
        function goFront(){
        document.getElementById('id03').style.display = 'none';
        document.getElementById('id04').style.display = 'block';
        }
        function goBack() {
        document.getElementById('id04').style.display = 'none';
        document.getElementById('id03').style.display = 'none';
        }
/* ADS *//* ADS *//* ADS *//* ADS *//* ADS */


/* Coinshop Modal *//* Coinshop Modal *//* Coinshop Modal *//* Coinshop Modal */
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
} /* Coinshop Modal *//* Coinshop Modal *//* Coinshop Modal *//* Coinshop Modal */



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
