import {

    felino,
    canino,
    mamifero,
    reptil,
    ave
}
from "./animales.js";

let animalesObjeto = {};
let animalesArrayCards = [];
(async() => {
    try {
        const res = await fetch("animales.json");
        const { animales } = await res.json();
        animales.forEach((item) => {
            animalesObjeto[item.name] = item;
        });
    } catch (error) {
        console.log(error);
    }
})();


const formulario = document.getElementById("formulario");
const animales = document.getElementById("animales");
const animal = document.getElementById("animal");
const edad = document.getElementById("edad");
const comentariosAnimal = document.getElementById("comentariosAnimal");
const previewAnimal = document.getElementById("previewAnimal");


animal.addEventListener("change", (e) => {
    console.log(e.target.value);
    previewAnimal.innerHTML = `
    <img src="assets/imgs/${
        animalesObjeto[e.target.value].imagen
    }" alt="" class="img-fluid">
    `;
});
const pintarAnimales = () => {
    animales.innerHTML = "";
    animalesArrayCards.forEach((item) => {
        animales.innerHTML += `
        <article class="card">
            <img src="assets/imgs/${item.imagen}" alt="" class="card-img-top">
            <div class="card-body">
                <h5>${item.nombre}</h5>
                <p>${item.poder}</p>
            </div>
        </article>
        `;
    });
};
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(animal.value);
    if (animal.value === "leon") {
        const leon = new felino(
            animal.value,
            edad.value,
            comentariosAnimal.value,
            animalesObjeto[animal.value].imagen
        );
        animalesArrayCards.push(leon);
    }
    if (animal.value === "lobo") {
        const lobo = new canino(
            animal.value,
            edad.value,
            comentariosAnimal.value,
            animalesObjeto[animal.value].imagen
        );
        animalesArrayCards.push(lobo);
    }
    if (nombreanimal.value === "oso") {
        const oso = new mamifero(
            animal.value,
            edad.value,
            comentariosAnimal.value,
            animalesObjeto[animal.value].imagen
        );
        animalesArrayCards.push(oso);
    }
    if (animal.value === "serpiente") {
        const serpiente = new reptil(
            animal.value,
            edad.value,
            comentariosAnimal.value,
            animalesObjeto[animal.value].imagen
        );
        animalesArrayCards.push(serpiente);
    }
    if (animal.value === "aguila") {
        const aguila = new ave(
            animal.value,
            edad.value,
            comentariosAnimal.value,
            animalesObjeto[animal.value].imagen
        );
        animalesArrayCards.push(aguila);
    }
    pintaranimales();
});