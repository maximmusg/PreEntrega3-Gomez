class Perfume {
  constructor(id, nombre, imagen, descripcion, precio, alt, genero) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = 1;
    this.alt = alt;
    this.genero = genero;
  }

  masCantidad() {
    this.cantidad++;
  }

  menosCantidad() {
    this.cantidad > 0 && this.cantidad--;
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
      "Masculino"
    );
    const perfum2 = new Perfume(
      2,
      "Gentleman Society EDP",
      "img/gent.webp",
      "Givenchy",
      87000,
      "Imagen del perfume",
      "Masculino"
    );
    const perfum3 = new Perfume(
      3,
      "The Only One 2  EDP",
      "img/dolce.webp",
      "Dolce & Gabbana",
      95000,
      "Imagen del perfume",
      "Femenino"
    );
    const perfum4 = new Perfume(
      4,
      "Good Girl EDP",
      "img/goodgirl.webp",
      "Carolina Herrera",
      88500,
      "Imagen del perfume",
      "Femenino"
    );
    const perfum5 = new Perfume(
      5,
      "Irresistible EDP RoseVelvet",
      "img/irres.webp",
      "Givenchy",
      97100,
      "Imagen del perfume",
      "Femenino"
    );
    const perfum6 = new Perfume(
      6,
      "INVICTUS VICTORY EDP",
      "img/invictus.webp ",
      "Dior",
      118300,
      "Imagen del perfume",
      "Masculino"
    );
    const perfum7 = new Perfume(
      7,
      "BLACK XS FOR HER EDP",
      "img/xsblack.webp ",
      "Paco Rabanne",
      44800,
      "Imagen del perfume",
      "Femenino"
    );
    const perfum8 = new Perfume(
      8,
      "ONE MILLION ROYAL EDP",
      "img/onemillion.webp ",
      "Paco Rabanne",
      85150,
      "Imagen del perfume",
      "Masculino"
    );
    const perfum9 = new Perfume(
      9,
      "212 VIP EDP",
      "img/212.webp ",
      "Carolina Herrera",
      68400,
      "Imagen del perfume",
      "Femenino"
    );
    const perfum10 = new Perfume(
      10,
      " STRONGER WITH YOU EDT",
      "img/arm.webp",
      "EMPORIO ARMANI",
      58900,
      "Imagen del perfume",
      "Masculino"
    );
    const perfum11 = new Perfume(
      11,
      "Acqua Di Gio EDT",
      "img/aqua.webp",
      "Armani",
      74900,
      "Imagen del perfume",
      "Femenino"
    );
    const perfum12 = new Perfume(
      12,
      "RALPH'S CLUB EDP",
      "img/ralp.webp",
      "Ralph Lauren",
      106900,
      "Imagen del perfume",
      "Masculino"
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

  // eventoFiltro() {
  //   const gen_fem = document.getElementById("gen_fem");
  //   const gen_masc = document.getElementById("gen_masc");
  //   let GeneroFemenino = "Femenino";
  //   let GeneroMasculino = "Masculino";

  //   gen_fem.addEventListener("change", () => {
  //     if (gen_fem.value == "Femenino") {
  //       GeneroFemenino = gen_fem.value;
  //       console.log(gen_fem.value);
  //     } else {
  //       gen_fem.value = "Unisex";
  //     }
  //     this.filtrarPorPrecio(GeneroFemenino, GeneroMasculino);
  //     this.mostrarDOM();
  //   });

  //   gen_masc.addEventListener("change", () => {
  //     if (gen_masc.value == "Masculino") {
  //       GeneroMasculino = gen_masc.value;
  //     } else {
  //       GeneroMasculino = "unisex";
  //     }
  //     console.log(gen_masc.value);
  //     this.filtrarPorPrecio(GeneroFemenino, GeneroMasculino);
  //     this.mostrarDOM();
  //   });
  // }

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
          <p class="card-text">${perfume.descripcion}</p>
          <p class="card-text text__price">$${perfume.precio}</p>
          <button id="agregarAlCarrito-${perfume.id}" class="btn">Agregar al carrito</button>
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
        const { id, nombre, imagen, descripcion, precio, alt } = producto;
        let nuevoProducto = new Perfume(
          id,
          nombre,
          imagen,
          descripcion,
          precio,
          alt
        );
        listaAuxiliar.push(nuevoProducto);
      });
      this.listaCarrito = listaAuxiliar;
    }
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
            <p class="card-text">${perfume.descripcion}</p>
            <p class="card-text">Cantidad:
            <button class="btn" id="disminuir-${perfume.id}" ><i class="fa-solid fa-minus"></i></button>
            <span class="numeroCantidad" >${perfume.cantidad}</span>
            <button class="btn" id="aumentar-${perfume.id}" ><i class="fa-solid fa-plus"></i></button>
            
            </p>
            <p class="card-text">Precio: ${perfume.precio}</p>
          </div>
        </div>
      </div>
    </div>
      `;
    });

    this.eAumentarCantidad();
    this.eDisminuirCantidad();
    this.mostrarTotalCarrito();
  }

  eAumentarCantidad() {
    this.listaCarrito.forEach((perfume) => {
      const btn_suma = document.getElementById(`aumentar-${perfume.id}`);
      btn_suma.addEventListener("click", () => {
        perfume.masCantidad();
        this.mostrarDOM();
      });
    });
  }

  eDisminuirCantidad() {
    this.listaCarrito.forEach((perfume) => {
      const btn_resta = document.getElementById(`disminuir-${perfume.id}`);
      btn_resta.addEventListener("click", () => {
        perfume.menosCantidad();
        this.mostrarDOM();
      });
    });
  }

  totalCarrito() {
    return this.listaCarrito.reduce(
      (acum, perfume) => acum + perfume.precio * perfume.cantidad,
      0
    );
  }

  mostrarTotalCarrito() {
    const total__Carrito = document.getElementById("total__Carrito");
    total__Carrito.innerText = `Precio Total: $${this.totalCarrito()}`;
  }

  vaciarCarrito() {
    this.listaCarrito = [];
    this.storage();
    this.mostrarDOM();
  }
}

//se crearon productos

//se crea un arreglo que muestre los productos

//instanciar la lista de productos
const carrito = new Carrito();
const listp = new ControlPerfumes();
listp.cargarProductos();
carrito.getStorage();
carrito.mostrarDOM();

//agregar perfumes a la lista

listp.mostrarDOM();
listp.eventoFiltro();
