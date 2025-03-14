document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.onclick = function() {
        document.getElementById('lightbox').style.display = 'block';
        document.getElementById('lightbox-img').src = this.src;
    }
});