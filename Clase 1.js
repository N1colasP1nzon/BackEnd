class Usuario {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libro = [];
        this.pets = [];
    }
    datos = () => {
        console.log(`Hola , soy ${this.nombre} ${this.apellido}`)
    }
    leerlibro = (libros) => {
        this.libro.push(libros);
    }
    nombrelibro = () => {
        console.log(this.libro);
    }
    tieneMascota = (mascota) => {
        this.pets.push(mascota);
    }
    mostrarMascotas = () => {
        console.log(this.pets);
    }
}

let usuario1 = new Usuario("Alejandro","Naranjo");
let usuario2 = new Usuario("Nicolas","Pinzon");

usuario1.datos();
usuario1.tieneMascota("Perro");
usuario1.mostrarMascotas();
usuario1.leerlibro("En la oscuridad");
usuario1.nombrelibro();

usuario2.datos();
usuario2.tieneMascota("Gato");
usuario2.mostrarMascotas();
usuario2.leerlibro("Principito");
usuario2.nombrelibro();
