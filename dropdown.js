function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    const arrow = document.querySelector('.arrow');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    arrow.classList.toggle('active');
}