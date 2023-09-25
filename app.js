class Perfume {
  constructor(id, nombre, imagen, marca, precio, alt, genero, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.marca = marca;
    this.precio = precio;
    this.alt = alt;
    this.genero = genero;
    this.descripcion = descripcion;
    this.cantidad = 1;
  }
  //Para sumar cantidad
  masCantidad() {
    this.cantidad++;
  }

  //Para restar cantidad
  menosCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }
}

class ControlPerfumes {
  constructor() {
    this.listadoPerfumes = [];
    this.listaFiltro = [];
  }

  //se crearon productos
  async cargarMostrarProductos() {
    let listaPerfumesJSON = await fetch("perfumes.json");
    let listaPerfumesJS = await listaPerfumesJSON.json();

    // id, nombre, imagen, marca, precio, alt, genero, descripcion

    listaPerfumesJS.forEach((perfume) => {
      let nuevoPerfume = new Perfume(
        perfume.id,
        perfume.nombre,
        perfume.imagen,
        perfume.marca,
        perfume.precio,
        perfume.alt,
        perfume.genero,
        perfume.descripcion,
        perfume.cantidad
      );
      this.agregar(nuevoPerfume);
    });

    this.listaFiltro = [...this.listadoPerfumes];

    this.mostrarDOM();
  }

  //Filtro por genero
  eventoFiltro() {
    const selectGenero = document.getElementById("select_genero");
    selectGenero.addEventListener("change", () => {
      const generoSeleccionado = selectGenero.value;

      this.filtrarPorGenero(generoSeleccionado);
      this.mostrarDOM();
    });
  }

  filtrarPorGenero(genero) {
    // this.listadoPerfumes = [];
    // this.cargarMostrarProductos();
    // this.listadoPerfumes = this.listadoPerfumes.filter((perfume) => {
    //   return perfume.genero === genero || genero === "unisex";
    // });
    if (genero === "todos") {
      this.listadoPerfumes = [...this.listaFiltro];
      this.mostrarDOM();
    } else {
      const productosFiltrados = this.listaFiltro.filter((perfume) => {
        return perfume.genero === genero || genero === "unisex";
      });
      this.listadoPerfumes = productosFiltrados;
      this.mostrarDOM();
    }
  }

  agregar(perfume) {
    this.listadoPerfumes.push(perfume);
  }

  // mostrar Toastify -----------------------------------------------------------------------------------------------------------

  mostrarToastify(nombrePerfume, marcaPerfume) {
    Toastify({
      text: `Se agrego ( 1 ) cantidad de ${nombrePerfume} By ${marcaPerfume} al carrito!`,
      duration: 2000,
      destination: "/",
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "black",
        color: "aquamarine",
      },
    }).showToast();
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

    //Boton para agregar al carrito
    this.listadoPerfumes.forEach((perfume) => {
      const btnAgregarAlCarrito = document.getElementById(
        `agregarAlCarrito-${perfume.id}`
      );
      btnAgregarAlCarrito.addEventListener("click", () => {
        const nombrePerfume = ` --- ${perfume.nombre} `;
        const marcaPerfume = `${perfume.marca} --- `;
        carrito.agregar(perfume);
        carrito.storage();
        carrito.mostrarDOM();
        this.mostrarToastify(nombrePerfume, marcaPerfume);
      });
    });

    //boton para vaciar carrito
    const vaciarCarritoButton = document.getElementById("vaciar__carrito");

    vaciarCarritoButton.addEventListener("click", () => {
      carrito.vaciarCarrito();
      carrito.storage();
    });

    //boton para ver detalle del perfume
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

  //Agregar perfume al carrito
  agregar(perfume) {
    const carritoOculto = document.getElementById("carritoOcultar");
    carritoOculto.style.display = "block";
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

  //localStorage
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

  //Boton aumentar cantidad en el carrito
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

  //Boton disminuir cantidad en el carrito
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

  eFinalizarCompra() {
    const finalizarCompraBtn = document.getElementById("finalizarCompraBtn");
    finalizarCompraBtn.addEventListener("click", async () => {
      localStorage.removeItem("listaCarrito");
      this.listaCarrito = [];
      this.mostrarDOM();

      const { value: email } = await Swal.fire({
        title: "Para continuar ingrese su dirección de Email",
        input: "email",
        inputLabel: "Recibirá las instrucciones por correo.",
        inputPlaceholder: "email",
        validationMessage: "El correo no es válido.",
      });

      if (email) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Compra realizada con éxito!",
          text: "Recibirá un correo electrónico con las instrucciones de su compra.",
          showConfirmButton: false,
          timer: 5000000,
          backdrop: "rgba(127, 255, 212, 0.3)",
        });
      }
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

    //Boton para eliminar producto del carrito

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

  //para ver el total  del carrito

  totalCarrito() {
    return this.listaCarrito.reduce(
      (acum, perfume) => acum + perfume.precio * perfume.cantidad,
      0
    );
  }

  mostrarTotalCarrito() {
    const total__Carrito = document.getElementById("total__Carrito");
    if (this.totalCarrito() == 0) {
      //Si el carrito esta vacio no me muestra el boton de finalizar compra
      finalizarCompraBtn.style.display = "none";
      total__Carrito.innerHTML = `
      <img src="img/images.png" />
      <p> -- El Carrito se encuentra vacío! -- </p>
      `;
    } else {
      //Al agregarse productos , vuelve a aparecer el boton
      finalizarCompraBtn.style.display = "block";
      total__Carrito.innerText = `Precio Total: $${this.totalCarrito()} USD`;
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

//instanciar la lista de productos
const carrito = new Carrito();
const descripcion = new Descripcion();
const listp = new ControlPerfumes();

carrito.eFinalizarCompra();
carrito.getStorage();
carrito.mostrarDOM();

listp.cargarMostrarProductos();
listp.eventoFiltro();
