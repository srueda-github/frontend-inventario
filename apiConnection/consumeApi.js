const url = "https://inventario-g397.onrender.com/api/categorias";
const urlpro = "http://127.0.0.1:5000/api/productos";

export const obtainCategories = async () => {
  try {
    const resultado = await fetch(url);
    const categorias = await resultado.json();
    return categorias;
  } catch (error) {
    console.error("Error obteniendo categorías:", error);
    return [];
  }
};

export const obtainProducts = async () => {
  try {
    const resultado = await fetch(urlpro);
    const productos = await resultado.json();
    return productos;
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
};
