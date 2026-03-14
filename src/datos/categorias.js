import data from './fotos.js';
const fotos = data.fotos;
export default {
    categorias: [
        {id: 'america',nombre: 'America',numfotos: fotos['america'].length,portada: './img/america.jpg'}
    ]
}