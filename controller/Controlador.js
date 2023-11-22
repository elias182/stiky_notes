class NotaController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.controller = this;
        this.notaPresionada = false;
    }

    iniciarArrastreNota(event) {
        this.model.setPosicion(event.clientX, event.clientY);
        this.notaPresionada = true;
        document.addEventListener('mousemove', (e) => this.moverNota(e));
    }

    moverNota(event) {
        if (this.notaPresionada) {
            const { x, y } = this.model.posicion;
            const offsetX = event.clientX - x;
            const offsetY = event.clientY - y;
            this.view.notaElemento.style.left = (event.clientX - offsetX) - 20+"px";
            this.view.notaElemento.style.top = (event.clientY - offsetX) - 20+"px";
            this.model.setPosicion(event.clientX, event.clientY);
        }
    }

    finalizarArrastreNota() {
        this.notaPresionada = false;
    }

    eliminarNota() {
        this.view.view.removeChild(this.view.notaElemento);
        this.view.view = null;
        // También deberíamos eliminar la instancia del modelo si es necesario
    }
}
