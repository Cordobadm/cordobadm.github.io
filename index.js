const habilidades = [
  {
    nombre: "Inglés",
    nivel: "50%",
  },
  {
    nombre: "Html",
    nivel: "85%",
  },
  {
    nombre: "Css",
    nivel: "80%",
  },
  {
    nombre: "JavaScript",
    nivel: "90%",
  },
];

const habilidades1 = [
  {
    nombre: "DOM Manipulation",
    nivel: "82%",
  },
  {
    nombre: "Json",
    nivel: "90%",
  },
  {
    nombre: "Ajax",
    nivel: "80%",
  },
  {
    nombre: "React",
    nivel: "85%",
  },
];

function agregarHabilidades() {
  for (const skin of habilidades) {
    $("#tiposHabilidades").append(`
    
    <p>${skin.nombre}
      <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: ${skin.nivel}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        ${skin.nivel}
      </div>
      </div>
    </p>
    
    `);
  }

  for (const skin of habilidades1) {
    $("#tiposHabilidades1").append(`
    
    <p>${skin.nombre}
      <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: ${skin.nivel}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        ${skin.nivel}
      </div>
      </div>
    </p>
    
    `);
  }
}

//EXPERIENCIA
const cartaExperiencia = () => {
  const URLGETEXP = "experiencia.json";

  $.getJSON(URLGETEXP, (data) => {
    for (const experiencia of data) {
      $("#cartaExp").append(`
      <div class="card col-12 col-md-6 text-white">
        <div
          class="item-backgound-image"
          style="
            background-image: url(https://pcredcom.com/blog/wp-content/uploads/2020/06/tipos-de-computadoras.jpg);
          "
        >
          <div class="item-color-backgound">
            <div class="card-img-overlay">
              <h5 class="card-title">Lugar: ${experiencia.titulo}</h5>
              <p class="card-text">Cargo: ${experiencia.cargo}</p>
              <p class="card-text">Tiempo: ${experiencia.duracion}</p>
              <button class="btn btnMostrar">Discripcion</button>
              <p class="mostrarDescripcion card-text" style="display: none">
              ${experiencia.descripcion}
              </p>
              <button class="btn btnOcultar" style="display: none">Ocultar</button>
            </div>
          </div>
        </div>
      </div>
  `);
    }

    let botones = document.querySelectorAll(".btnMostrar");
    let botonOcultar = document.getElementsByClassName("btnOcultar");
    let mostrarDesc = document.querySelectorAll(".mostrarDescripcion");

    for (let i = 0; i < botones.length; i++) {
      botones[i].addEventListener("click", () => {
        $(botones[i]).hide();
        $(botonOcultar[i]).show();
        $(mostrarDesc[i]).slideDown(600);
      });
    }

    for (let i = 0; i < botonOcultar.length; i++) {
      botonOcultar[i].addEventListener("click", () => {
        $(botonOcultar[i]).hide();
        for (let o = 0; o < botones.length; o++) {
          $(mostrarDesc[i]).hide();
          $(botones[i]).show();
        }
      });
    }
  });
};

//EDUACION
const cartaEduacion = () => {
  const URLGETFORMACION = "formacion.json";

  $.getJSON(URLGETFORMACION, (data) => {
    for (const formacion of data) {
      $("#cartaEducacion").append(`<div class="card col-12 col-md-4">
      <div class="card-formacion">
        <p class="card-duracion">${formacion.duracion}</p>
        <h4 class="card-insti">Institucion: ${formacion.lugar}</h4>
        <p class="card-titulo">Titulo:</h6>
        <p class="card-titulo">${formacion.titulo}</h6>
        
      </div>
    </div>`);
    }
  });
};


agregarHabilidades();
cartaExperiencia();
cartaEduacion();

// Boton GOTOP

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".go-top-container").classList.add("show");
  } else {
    document.querySelector(".go-top-container").classList.remove("show");
  }
};

document.querySelector(".go-top-container").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
