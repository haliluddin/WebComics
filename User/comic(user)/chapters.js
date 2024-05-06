

let subBtn = document.getElementById("subscribe");
let subscribe = false;
subBtn.addEventListener('click' , () => { 
if (subscribe) {
  subBtn.innerText="Subscribed ✓"
  subBtn.style = "padding: 8px 15px 8px 15px;font-size: 16px;color: rgb(107, 107, 107);background-color: #ececec;border-radius: 50px;border: none;outline: none;font-weight: normal;"
  subscribe = false
}
else{
  subBtn.innerText="Subscribe +"
  subBtn.style = "padding: 8px 15px 8px 15px;font-size: 16px;color: rgb(107, 107, 107);background-color: #ececec;border-radius: 50px;border: none;outline: none;font-weight: normal;"
  subscribe = true
}
})



let subBt = document.getElementById("sub");
let sub = false;
subBt.addEventListener('click' , () => { 
if (sub) {
  subBt.innerText="✓"
  subBt.style = "background-color: black;font-size: 23px;font-weight: bold;width:20px;height: 20px;border-radius: 50%;border: none;outline: none; text-align: center;align-items: center;color: white;"
  sub = false
}
else{
  subBt.innerText="+"
  subBt.style = "background-color: black;font-size: 30px;font-weight: bold;width:20px;height: 20px;border-radius: 50%;border: none;outline: none; text-align: center;align-items: center;color: white;"
  sub = true
}
})


        document.addEventListener('DOMContentLoaded', function () {
            const heartIcons = document.querySelectorAll('.heart-icon');
            heartIcons.forEach(function (icon) {
                icon.addEventListener('click', function () {
                    icon.classList.toggle('fa-regular');
                    icon.classList.toggle('fa-solid');

                    if (icon.classList.contains('fa-solid')) {
                        icon.style.color = '#00ADB5'; // Set color to teal when solid
                    } else {
                        icon.style.color = ''; // Reset color when not solid
                    }
                });
            });
        });

    
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
        document.getElementById('id05').style.display = 'none';
        document.getElementById('id06').style.display = 'none';
        document.getElementById('id07').style.display = 'none';
        document.getElementById('id08').style.display = 'none';
        }

        function replies(id) {
        var dropdown = document.getElementById(id);
        if (dropdown.style.display === 'none') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
        }

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