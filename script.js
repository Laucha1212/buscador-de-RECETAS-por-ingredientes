//RECETAS EXISTENTES:
const recetas = [
    {
      nombre: "OMELETTE",
      ingredientes: [""],
      ingredientesOpcionales: ["queso", "tomate"],
      pasoAPaso: "Paso 1: Preparación...\nPaso 2: Cocinar...\nPaso 3: Servir...Paso 1: Preparación...\nPaso 2: Cocinar...\nPaso 3: Servir...",
      id: "omelette"
    },
    {
      nombre: "HUEVO REVUELTO",
      ingredientes: [""],
      ingredientesOpcionales: ["queso", "tomate"],
      pasoAPaso: "Paso 1: Preparación...\nPaso 2: Cocinar...\nPaso 3: Servir...",
      id: "huevorevuelto"
    },
    {
      nombre: "OMELETTE",
      ingredientes: [""],
      ingredientesOpcionales: ["queso", "tomate"],
      pasoAPaso: "Paso 1: Preparación...\nPaso 2: Cocinar...\nPaso 3: Servir...",
      id: "omelette"
    },
    {
      nombre: "HUEVO REVUELTO",
      ingredientes: [""],
      ingredientesOpcionales: ["queso", "tomate"],
      pasoAPaso: "Paso 1: Preparación...\nPaso 2: Cocinar...\nPaso 3: Servir...",
      id: "huevorevuelto"
    },
    {
      nombre: "OMELETTE",
      ingredientes: [""],
      ingredientesOpcionales: ["queso", "tomate"],
      pasoAPaso: "Paso 1: Preparación...\nPaso 2: Cocinar...\nPaso 3: Servir...",
      id: "omelette"
    },
    {
      nombre: "HUEVO REVUELTO",
      ingredientes: [""],
      ingredientesOpcionales: ["queso", "tomate"],
      pasoAPaso: "Paso 1: Preparación...\nPaso 2: Cocinar...\nPaso 3: Servir...",
      id: "huevorevuelto"
    },
    {
      nombre: "OMELETTE",
      ingredientes: [""],
      ingredientesOpcionales: ["queso", "tomate"],
      pasoAPaso: "Paso 1: Preparación...\nPaso 2: Cocinar...\nPaso 3: Servir...",
      id: "omelette"
    },
    {
      nombre: "HUEVO REVUELTO",
      ingredientes: [""],
      ingredientesOpcionales: ["queso", "tomate"],
      pasoAPaso: "Paso 1: Preparación...\nPaso 2: Cocinar...\nPaso 3: Servir...",
      id: "huevorevuelto"
    },
    // ... más recetas
];

const buscarRecetasBtn = document.getElementById("buscarRecetas");
const resultadosRecetasDiv = document.getElementById("resultadosRecetas");

//FUNCION DE EXPANSION DE RECETA SELECCIONADA
function expansionResultado(element) {
  const resultados = document.querySelectorAll('.sectionResultados');
  resultados.forEach(result => {
    if (result !== element) {
      result.classList.remove('expanded');
    }
  });

  if (!element.classList.contains('expanded')) {
    element.classList.add('expanded');
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}




//FUNCION DE ENCONTRAR RECETAS Y CREAR RESULTADOS
  buscarRecetasBtn.addEventListener("click", () => {
    const ingredientesInput = document.getElementById("ingredientesIntroducidos").value;
    const ingredientesUsuario = ingredientesInput.split(",").map(ingrediente => ingrediente.trim());
  
    const recetasCompatibles = [];
    recetas.forEach(receta => {
      const ingredientesReceta = receta.ingredientes;
      const ingredientesOpcionalesReceta = receta.ingredientesOpcionales || []; // Si no se define, será un array vacío
      const ingredientesFaltantes = ingredientesReceta.filter(ingrediente => !ingredientesUsuario.includes(ingrediente));
      const ingredientesOpcionalesFaltantes = ingredientesOpcionalesReceta.filter(ingrediente => !ingredientesUsuario.includes(ingrediente));
  
      if (ingredientesFaltantes.length === 0 || (ingredientesOpcionalesFaltantes.length === 0 && ingredientesFaltantes.length === ingredientesReceta.length)) {
        recetasCompatibles.push(receta);
      }
    });
  
    if (recetasCompatibles.length > 0) {
      let resultadosHTML = `<div class="resultados-container">`; //Apertura del contenedor de resultados
      resultadosHTML += `<h2 class="tituloRecetasPosibles">${recetasCompatibles.length} Recetas que puedes hacer</h2>`;

      recetasCompatibles.forEach(receta => {
      resultadosHTML += `<div class="sectionResultados" onclick="expansionResultado(this)">`;
        resultadosHTML += `<h3 class="nombreReceta">${receta.nombre}</h3>`

        resultadosHTML += `<div class="contenedorReceta">`;
                         
        resultadosHTML +=   `<div class="recetaImagen" id="${receta.id}BACKGROUND"></div>`;
                         
        resultadosHTML +=   `<div class="contenedorTextoResultados">`;
          resultadosHTML +=     `<span class="spanIngredientes">INGREDIENTES:</span>
                                    <p class="resultadosText resultadosTextIngredientes">
                                    ${receta.ingredientes}
                                </p>`;
                          
          resultadosHTML +=     `<span class="spanIngredientesOpcionales">INGREDIENTES OPCIONALES:</span>
                                    <p class="resultadosText resultadosTextIngredientesOpcionales">
                                    ${receta.ingredientesOpcionales}
                                </p>`;
                          
          resultadosHTML +=     `<span class="spanPreparacion">PREPARACIÓN:</span>
                                    <p class="resultadosText resultadosTextPasoAPaso">
                                    ${receta.pasoAPaso.replace(/\n/g, "<br>")}
                                </p>`;
        resultadosHTML +=   `</div>`;
                         
        resultadosHTML += `</div>`;

      resultadosHTML += `</div>`; //Cierre del contenedor de resultados
    });
      resultadosRecetasDiv.innerHTML = resultadosHTML;
      //resultadosHTML += `<div class="recetaDesplegada">${receta.nombre}${receta.ingredientes}${receta.ingredientesOpcionales}${receta.pasoAPaso}</div>`
    }
    else {
      resultadosRecetasDiv.innerHTML = "No tienes suficientes ingredientes para ninguna receta.";
    }
  });