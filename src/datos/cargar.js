import categorias from './categorias.js';

const dataCat = categorias; 
const contenedor = document.getElementById('categorias');

dataCat.categorias.forEach((categoria) => {
    const categoriaNew = document.createElement ('a');
    const plantilla = `
        <img class="categoria__img" src="${categoria.portada}" alt="" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${categoria.nombre}</p>
            <p class="categoria__numero-fotos">${categoria.numfotos} fotos</p>
        </div>
    `;
    categoriaNew.innerHTML = plantilla;
    categoriaNew.classList.add('categoria');
    categoriaNew.href = '#';
    categoriaNew.dataset.categoria = categoria.id;
    contenedor.append(categoriaNew);
});
    
