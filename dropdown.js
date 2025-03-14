function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    const arrow = document.querySelector('.arrow');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    arrow.classList.toggle('active');
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
}