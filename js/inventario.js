import { obtainCategories, obtainProducts } from "./../apiConnection/consumeApi.js";

document.addEventListener("DOMContentLoaded", () => {
  getCategories();
  getProducts();
});

async function getCategories() {
  const categoriesObtained = await obtainCategories();
  const container = document.querySelector("#categoryBody");
  categoriesObtained.forEach((category) => {
    const { CategoriaID, CategoriaNombre, Descripcion, Imagen } = category;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${CategoriaID}</td>
      <td>${CategoriaNombre}</td>
      <td>${Descripcion}</td>
      <td><img src="${Imagen}" width="300px" class="cuenta"></td>
      <td><button class="btn color3">Details</button></td>
      <td><button class="btn color2">Edit</button></td>
      <td><button class="btn color5">Delete</button></td>
    `;
    container.appendChild(row);
  });
}

async function getProducts() {
  const productsObtained = await obtainProducts();
  const container = document.querySelector("#productBody");
  productsObtained.forEach((product) => {
    const { ProductoID, ProductoNombre, CategoriaNombre, PrecioUnitario, UnidadesStock } = product;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${ProductoID}</td>
      <td>${ProductoNombre}</td>
      <td>${CategoriaNombre}</td>
      <td>${PrecioUnitario}</td>
      <td>${UnidadesStock}</td>
      <td><button class="btn color3">Details</button></td>
      <td><button class="btn color2">Edit</button></td>
      <td><button class="btn color5">Delete</button></td>
    `;
    container.appendChild(row);
  });
}
