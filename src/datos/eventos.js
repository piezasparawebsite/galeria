import fotos from 'datos/fotos.js';
const contenedorCat = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

contenedorCat.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.closest('a')) {
        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';
    }
});