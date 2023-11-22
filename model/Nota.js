class NotaModel {
    constructor(titulo, contenido) {
        this.titulo = titulo;
        this.contenido = contenido;
        this.fecha = new Date().toLocaleString();
        this.posicion = { x: 0, y: 0 };
    }

    setPosicion(x, y) {
        this.posicion = { x, y };
    }

    guardarEnLocalStorage() {
        const notas = JSON.parse(localStorage.getItem('notas')) || [];
        notas.push(this);
        localStorage.setItem('notas', JSON.stringify(notas));
    }

    cargarDesdeLocalStorage() {
        const notas = JSON.parse(localStorage.getItem('notas')) || [];
        return notas.map(nota => new NotaModel(nota.titulo, nota.contenido));
    }
}