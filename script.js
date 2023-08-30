const recetas = [
    {
      nombre: "OMELETTE",
      ingredientes: ["h"],
      ingredientesOpcionales: ["queso", "tomate"],
      pasoAPaso: "Paso 1: Preparación...\nPaso 2: Cocinar...\nPaso 3: Servir...",
      id: "omelette"
    },
    {
      nombre: "HUEVO REVUELTO",
      ingredientes: ["h"],
      ingredientesOpcionales: ["queso", "tomate"],
      pasoAPaso: "Paso 1: Preparación...\nPaso 2: Cocinar...\nPaso 3: Servir...",
      id: "huevorevuelto"
    },
    // ... más recetas
  ];
  
  const buscarRecetasBtn = document.getElementById("buscarRecetas");
  const resultadosRecetasDiv = document.getElementById("resultadosRecetas");
  
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

      let resultadosHTML = ``;
      resultadosHTML += `<div class="prueba"><h2 class="tituloRecetasPosibles">Recetas que puedes hacer:</h2></div>`;
      
      recetasCompatibles.forEach(receta => {
        resultadosHTML += `<div class="sectionResultados">`
        // resultadosHTML += `<h2 class="tituloRecetasPosibles">Recetas que puedes hacer:</h2>`;
        resultadosHTML += `<div class="contenedorReceta">`
        resultadosHTML += `<h3 class="nombreReceta">${receta.nombre}</h3>`;
        //resultadosHTML += `<img src="${receta.imagen}" alt="${receta.nombre}">`;
        resultadosHTML += `<div class="recetaImagen" id="${receta.id}BACKGROUND"></div>">`;
        resultadosHTML += `<p>Ingredientes: <br> ${receta.ingredientes}</p>`;
        resultadosHTML += `<p>Ingredientes opcionales: <br>${receta.ingredientesOpcionales}</p>`;
        resultadosHTML += `<p>${receta.pasoAPaso.replace(/\n/g, "<br>")}</p>`;
        resultadosHTML += `</div>`
        resultadosHTML += `</div>`
    });
      resultadosRecetasDiv.innerHTML = resultadosHTML;
    } else {
      resultadosRecetasDiv.innerHTML = "No tienes suficientes ingredientes para ninguna receta.";
    }
  });
  