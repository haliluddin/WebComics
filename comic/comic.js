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