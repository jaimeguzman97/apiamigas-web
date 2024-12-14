import { productos } from '../bd/item.json';


export const getProductsByName = (name = '') => {
  
    name = name.toLocaleLowerCase().trim();

    if(name.length === 0) return [];

    return productos.filter( product => product.nombre.toLocaleLowerCase().trim().includes(name)
    );
}
