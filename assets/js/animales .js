class animales {
    constructor(nombre, edad, comentario, imagen) {
        this.nombre = nombre;
        this.edad = edad;
        this.comentario = comentario;
        this.imagen = imagen;



    }

}

class felino extends animales {
    aumentarEdad() {}
}
class canino extends animales {
    aumentarEdad() {}
}
class mamifero extends animales {
    aumentarEdad() {}
}
class reptil extends animales {
    aumentarEdad() {}
}
class ave extends animales {
    aumentarEdad() {}
}

export { felino, canino, mamifero, reptil, ave };