const recetas = [
    {
        nombre: "omelette",
        ingredientes: ["huevo"]
    },
    {
        nombre: "carne al horno con papas",
        ingredientes: ["carne", "papa"]
    },
    // ... más recetas
];

//solicitar ingredientes
const ingredientesUsuario = prompt("Ingresa los ingredientes separados por comas").split(",").map(ingrediente => ingrediente.trim());

//Comparar ingredientes y mostrar las recetas coincidentes:
const recetasCompatibles = [];

recetas.forEach(receta => {
  const ingredientesReceta = receta.ingredientes;
  const ingredientesFaltantes = ingredientesReceta.filter(ingrediente => !ingredientesUsuario.includes(ingrediente));

  if (ingredientesFaltantes.length === 0) {
    recetasCompatibles.push(receta.nombre);
  }
});

if (recetasCompatibles.length > 0) {
  console.log("Recetas que puedes hacer:", recetasCompatibles);
} else {
  console.log("No tienes suficientes ingredientes para ninguna receta.");
}

//mostrar en pantalla
texto = document.getElementById("texto")
texto.textContent = "Recetas que puedes hacer:  " + recetasCompatibles;