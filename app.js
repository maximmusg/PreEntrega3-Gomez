class Perfume {
  constructor(id, nombre, imagen, marca, precio, alt, genero, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.marca = marca;
    this.precio = precio;
    this.cantidad = 1;
    this.alt = alt;
    this.genero = genero;
    this.descripcion = descripcion;
  }

  masCantidad() {
    this.cantidad++;
  }

  menosCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }
}

class ControlPerfumes {
  constructor() {
    this.listadoPerfumes = [];
  }

  cargarProductos() {
    const perfum1 = new Perfume(
      1,
      "212 Heroes EDT",
      "img/212l.webp",
      "Carolina Herrera",
      66100,
      "Imagen del perfume",
      "Masculino",
      "Siéntete siempre joven con 212 Heroes, un fresco aroma masculino que celebra la juventud, la libertad y la autenticidad. Esta fragancia innovadora y vegana, que viene en un atrevido envase con forma de monopatín representación de un elenco de creativos, es una prueba de que nada es más heroico que ser auténtico."
    );
    const perfum2 = new Perfume(
      2,
      "Gentleman Society EDP",
      "img/gent.webp",
      "Givenchy",
      87000,
      "Imagen del perfume",
      "Masculino",
      "Givenchy redefine al caballero moderno con su nueva fragancia masculina, Gentleman Society. Una muestra del exclusivo saber hacer de Givenchy, que se compone de materias primas excepcionales. Un Eau de Parfum que reinventa las reglas. Las notas frescas y aromáticas de la Salvia se combinan con el absoluto de flor de Narciso silvestre. Una expresión floral única que contrasta con las facetas oscuras e intensas de un cuarteto de Vetiver de Haití, Uruguay y Madagascar. Las esencias de Cedro y Sándalo se funden con una vainilla adictiva y sensual trazando una inolvidable estela."
    );
    const perfum3 = new Perfume(
      3,
      "The Only One 2 EDP",
      "img/dolce.webp",
      "Dolce & Gabbana",
      95000,
      "Imagen del perfume",
      "Femenino",
      "El cautivador maridaje entre la violeta y el café se reinterpreta evocando una rosa roja empolvada, como símbolo del amor y la seducción. Las notas de salida de las bayas rojas se combinan con un corazón de aroma de rosas que aporta un aura cálida y sensual a la esencia. Las notas dulces y suaves de las habas tonka en la base aumentan su capacidad adictiva."
    );
    const perfum4 = new Perfume(
      4,
      "Good Girl EDP",
      "img/goodgirl.webp",
      "Carolina Herrera",
      88500,
      "Imagen del perfume",
      "Femenino",
      "La fragancia GOOD GIRL está inspirada por la visión única de Carolina Herrera de la dualidad de la mujer moderna: audaz y sexy, elegante y enigmática, buena y mala. Siempre forzando y traspasando los límites, la misteriosa sensualidad de GOOD GIRL hace que sea una fragancia moderna y sofisticada a la vez."
    );
    const perfum5 = new Perfume(
      5,
      "Irresistible EDP RoseVelvet",
      "img/irres.webp",
      "Givenchy",
      97100,
      "Imagen del perfume",
      "Femenino",
      "Una irresistible atracción piel a piel donde la ternura es la nueva adicción. Una fragancia femenina con suculentas grosellas negras, que realzan la feminidad aterciopelada de la rosa, la flor característica de Irresistible. Un Iris que acaricia esta nueva faceta de rosa con su textura empolvada. Una fragancia de mujer cautivante que encarna la gracia empoderada. Irresistible Givenchy invita a dejarse llevar y a ser una misma."
    );
    const perfum6 = new Perfume(
      6,
      "INVICTUS VICTORY EDP",
      "img/invictus.webp ",
      "Dior",
      118300,
      "Imagen del perfume",
      "Masculino",
      "En este intenso duelo, dos fuerzas se desafían: frescura y sensualidad. Paco Rabanne reúne dos asociaciones exclusivas para garantizar un efecto de larga duración. Una declaración de intenciones sorprendente con un suplemento de frescura: la vivacidad del limón recubierta por un todopoderoso incienso. "
    );
    const perfum7 = new Perfume(
      7,
      "BLACK XS FOR HER EDP",
      "img/xsblack.webp ",
      "Paco Rabanne",
      44800,
      "Imagen del perfume",
      "Femenino",
      "Black XS for Her, de Paco Rabanne. Siguiendo solo tu instinto. Rompiendo las reglas. Capturando el momento.Black XS for Her: una flor narcótica negra. Sensual, inquietante, rebelde. En exceso."
    );
    const perfum8 = new Perfume(
      8,
      "ONE MILLION ROYAL EDP",
      "img/onemillion.webp ",
      "Paco Rabanne",
      85150,
      "Imagen del perfume",
      "Masculino",
      "La leyenda renace con una inesperada combinación de revitalizante lavanda, vibrante madera de cedro y sensual benjuí, para una fragancia que es tan desafiante como tú. Una mezcla llamativa de frescura y madera que choca con una sensualidad distintiva para liberar lo que te hace ser únicamente tú."
    );
    const perfum9 = new Perfume(
      9,
      "212 VIP EDP",
      "img/212.webp ",
      "Carolina Herrera",
      68400,
      "Imagen del perfume",
      "Femenino",
      "212 VIP es una fragancia inspirada en las nuevas generaciones de VIP, mentes creativas que reescriben las reglas de Nueva York con confianza, actitud y personalidad. 212 VIP: una fragancia de personalidad, tanto explosiva como magnética. Una pulsación fragante que combina estilo y actitud, un eau de parfum de fiesta."
    );
    const perfum10 = new Perfume(
      10,
      " STRONGER WITH YOU EDT",
      "img/arm.webp",
      "EMPORIO ARMANI",
      58900,
      "Imagen del perfume",
      "Masculino",
      "Viví el poder del amor incondicional con el nuevo perfume tendencia de Emporio Armani. Stronger with you, un perfume para vivir emociones intensas. Juntos somos más fuertes."
    );
    const perfum11 = new Perfume(
      11,
      "Acqua Di Gio EDT",
      "img/aqua.webp",
      "Armani",
      74900,
      "Imagen del perfume",
      "Femenino",
      "Una fragancia deliciosa, como el paraíso en la piel. Un frasco contorneado de vidrio esmerilado verde celadón. Un floral acuático en un cóctel dulce y salado. ACQUA DI GIO es el perfume perfecto para la mujer de espíritu libre, despreocupada y luminosa."
    );
    const perfum12 = new Perfume(
      12,
      "RALPH'S CLUB EDP",
      "img/ralp.webp",
      "Ralph Lauren",
      106900,
      "Imagen del perfume",
      "Masculino",
      "Ralph's Club de Ralph Lauren es una fragancia de la familia olfativa Amaderada para Hombres. Ralph's Club se lanzó en 2021. La Nariz detrás de esta fragrancia es Dominique Ropion. Las Notas de Salida son esclarea y lavanda; la Nota de Corazón es cedro de Virginia; la Nota de Fondo es vetiver."
    );

    this.agregar(perfum1);
    this.agregar(perfum2);
    this.agregar(perfum3);
    this.agregar(perfum4);
    this.agregar(perfum5);
    this.agregar(perfum6);
    this.agregar(perfum7);
    this.agregar(perfum8);
    this.agregar(perfum9);
    this.agregar(perfum10);
    this.agregar(perfum11);
    this.agregar(perfum12);
  }

  eventoFiltro() {
    const selectGenero = document.getElementById("select_genero");
    selectGenero.addEventListener("change", () => {
      const generoSeleccionado = selectGenero.value;
      this.filtrarPorGenero(generoSeleccionado);
      this.mostrarDOM();
    });
  }

  filtrarPorGenero(genero) {
    this.listadoPerfumes = [];
    this.cargarProductos();
    this.listadoPerfumes = this.listadoPerfumes.filter((perfume) => {
      return perfume.genero === genero || genero === "unisex";
    });
  }

  agregar(perfume) {
    this.listadoPerfumes.push(perfume);
  }

  mostrarDOM() {
    let productContainer = document.getElementById("productContainer");

    productContainer.innerHTML = "";

    this.listadoPerfumes.forEach((perfume) => {
      productContainer.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${perfume.imagen}" class="card-img-top" alt="${perfume.alt}">
        <div class="card-body card__body">
          <h5 class="card-title">${perfume.nombre}</h5>
          <p class="card-text">${perfume.marca}</p>
          <p class="card-text text__price">$${perfume.precio}</p>
          <div class="card__buttons">
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-keyboard="true" id="verDetalle-${perfume.id}" class="btn btn-card">Ver Detalles</button>
            <button id="agregarAlCarrito-${perfume.id}" class="btn btn-card">Agregar al carrito</button>
          </div>
        </div>
    </div>
      `;
    });

    this.listadoPerfumes.forEach((perfume) => {
      const btnAgregarAlCarrito = document.getElementById(
        `agregarAlCarrito-${perfume.id}`
      );
      btnAgregarAlCarrito.addEventListener("click", () => {
        carrito.agregar(perfume);
        carrito.storage();
        carrito.mostrarDOM();
      });
    });

    const vaciarCarritoButton = document.getElementById("vaciar__carrito");
    vaciarCarritoButton.addEventListener("click", () => {
      carrito.vaciarCarrito(); // Llamar a la función para vaciar el carrito
      carrito.storage();
    });

    this.listadoPerfumes.forEach((perfume) => {
      const btnVerDetalle = document.getElementById(`verDetalle-${perfume.id}`);
      btnVerDetalle.addEventListener("click", () => {
        descripcion.agregar(perfume);
        descripcion.mostrarDOM();
      });
    });
  }
}

class Carrito {
  constructor() {
    this.listaCarrito = [];
  }

  agregar(perfume) {
    let existe = this.listaCarrito.some((perf) => perf.id == perfume.id);

    if (existe) {
      let perf = this.listaCarrito.find((perf) => perf.id == perfume.id);
      perf.masCantidad();
    } else {
      this.listaCarrito.push(perfume);
    }

    this.storage();
  }

  eliminar(perfume) {
    let index = this.listaCarrito.findIndex((perf) => perf.id == perfume.id);
    this.listaCarrito.splice(index, 1);
  }

  storage() {
    let listaCarritoJSON = JSON.stringify(this.listaCarrito);
    localStorage.setItem("listaCarrito", listaCarritoJSON);
  }

  getStorage() {
    let listaCarritoJSON = localStorage.getItem("listaCarrito");
    if (listaCarritoJSON) {
      let NuevalistaCarrito = JSON.parse(listaCarritoJSON);
      let listaAuxiliar = [];

      NuevalistaCarrito.forEach((producto) => {
        const {
          id,
          nombre,
          imagen,
          marca,
          precio,
          alt,
          genero,
          descripcion,
          cantidad,
        } = producto;
        let nuevoProducto = new Perfume(
          id,
          nombre,
          imagen,
          marca,
          precio,
          alt,
          genero,
          descripcion
        );
        nuevoProducto.cantidad = cantidad;
        listaAuxiliar.push(nuevoProducto);
      });
      this.listaCarrito = listaAuxiliar;
    }
  }

  eAumentarCantidad() {
    this.listaCarrito.forEach((perfume) => {
      const btn_suma = document.getElementById(`aumentar-${perfume.id}`);
      btn_suma.addEventListener("click", () => {
        perfume.masCantidad();
        this.storage();
        this.mostrarDOM();
      });
    });
  }

  eDisminuirCantidad() {
    this.listaCarrito.forEach((perfume) => {
      const btn_resta = document.getElementById(`disminuir-${perfume.id}`);
      btn_resta.addEventListener("click", () => {
        perfume.menosCantidad();
        this.storage();
        this.mostrarDOM();
      });
    });
  }

  mostrarDOM() {
    let carritoCont = document.getElementById("carritoCont");
    carritoCont.innerHTML = "";

    this.listaCarrito.forEach((perfume) => {
      carritoCont.innerHTML += `
      <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${perfume.imagen}" class="img-fluid rounded-start" alt="${perfume.alt}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Perfume: ${perfume.nombre}</h5>
            <p class="card-text">${perfume.marca}</p>
            <p class="card-text">Cantidad:
              <button class="btn" id="disminuir-${perfume.id}" ><i class="fa-solid fa-minus"></i></button>
              <span class="numeroCantidad" >${perfume.cantidad}</span>
              <button class="btn" id="aumentar-${perfume.id}" ><i class="fa-solid fa-plus"></i></button>
              <button class="btn btn-danger numeroCantidad" id="eliminar-${perfume.id}" ><i class="fa-solid fa-trash"></i></button>
            </p>
            <p class="card-text">Precio: ${perfume.precio}</p>
          </div>
        </div>
      </div>
    </div>
      `;
    });

    this.listaCarrito.forEach((perfume) => {
      const btnEliminarDelCarrito = document.getElementById(
        `eliminar-${perfume.id}`
      );
      btnEliminarDelCarrito.addEventListener("click", () => {
        carrito.eliminar(perfume);
        carrito.storage();
        carrito.mostrarDOM();
      });
    });

    this.eAumentarCantidad();
    this.eDisminuirCantidad();
    this.mostrarTotalCarrito();
  }

  totalCarrito() {
    return this.listaCarrito.reduce(
      (acum, perfume) => acum + perfume.precio * perfume.cantidad,
      0
    );
  }

  mostrarTotalCarrito() {
    const total__Carrito = document.getElementById("total__Carrito");
    if (this.totalCarrito() == 0) {
      total__Carrito.innerHTML = `<p> -- El Carrito se encuentra vacío! -- </p>`;
    } else {
      total__Carrito.innerText = `Precio Total: $${this.totalCarrito()}`;
    }
  }

  vaciarCarrito() {
    this.listaCarrito = [];
    this.storage();
    this.mostrarDOM();
  }
}

class Descripcion {
  constructor() {
    this.listaDetalle = [];
  }

  agregar(perfume) {
    this.listaDetalle.length = 1;
    this.listaDetalle.push(perfume);
  }

  mostrarDOM() {
    let contenedorDescripcion = document.getElementById("desc_cont");
    contenedorDescripcion.innerHTML = "";

    this.listaDetalle.forEach((perfume) => {
      let marca__perfume = document.getElementById("marca__perfume");
      marca__perfume.innerText = perfume.marca;
      let contenedorDescripcion = document.getElementById("desc_cont");
      contenedorDescripcion.innerHTML += `
      <img src="${perfume.imagen}" class="card-img-top w-50 d-flex mx-auto" alt="${perfume.alt}" />
      <h3 class="card-title mb-3 text-center color__text">${perfume.nombre}</h3>
      <p class="card-text fs-6 fw-bolder">${perfume.descripcion}</p>
      `;
    });
  }
}

//se crearon productos

//se crea un arreglo que muestre los productos

//instanciar la lista de productos
const carrito = new Carrito();
const descripcion = new Descripcion();
const listp = new ControlPerfumes();
listp.cargarProductos();
carrito.getStorage();
carrito.mostrarDOM();

//agregar perfumes a la lista

listp.mostrarDOM();
listp.eventoFiltro();
