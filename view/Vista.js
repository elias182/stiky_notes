class NotaView {
    constructor(view) {
        this.view = view;
        this.controller = null;
        this.notaElemento = null;
        
    }

    

    crearNotaElemento(titulo, contenido) {
        // Código para crear el elemento div y otros elementos
        this.notaElemento = document.createElement('div');
        this.notaElemento.classList.add('nota');
        this.notaElemento.style.left = '0px';
        this.notaElemento.style.top = '0px';
        this.notaElemento.style.position = 'absolute'; // Añadido para asegurar la posición absoluta

        const tituloDiv = document.createElement('div');
        tituloDiv.textContent = titulo;
        tituloDiv.style.fontFamily = 'Arial, sans-serif'; // Ajusta según tus preferencias
        tituloDiv.style.fontSize = '18px'; // Ajusta según tus preferencias
        tituloDiv.style.fontWeight = 'bold'; // Ajusta según tus preferencias
        tituloDiv.style.padding = '10px'; // Ajusta según tus preferencias
        tituloDiv.style.backgroundColor = 'orange';
        tituloDiv.style.color = 'white';
        tituloDiv.style.width = '100%'; // Ajuste al tamaño del div
        tituloDiv.style.overflow = 'hidden'; // Oculta cualquier exceso de contenido
        tituloDiv.addEventListener('dblclick', () => this.editarElemento(tituloDiv));

        const contenidoDiv = document.createElement('div');
        contenidoDiv.textContent = contenido;
        contenidoDiv.style.fontFamily = 'Arial, sans-serif'; // Ajusta según tus preferencias
        contenidoDiv.style.fontSize = '14px'; // Ajusta según tus preferencias
        contenidoDiv.style.padding = '10px'; // Ajusta según tus preferencias
        contenidoDiv.style.backgroundColor = 'orange';
        contenidoDiv.style.color = 'white';
        contenidoDiv.style.width = '100%'; // Ajuste al tamaño del div
        contenidoDiv.style.overflow = 'hidden'; // Oculta cualquier exceso de contenido
        contenidoDiv.addEventListener('dblclick', () => this.editarElemento(contenidoDiv));

        const fechaDiv = document.createElement('div');
        fechaDiv.textContent = `Creado el: ${new Date().toLocaleString()}`;
        fechaDiv.style.fontFamily = 'Arial, sans-serif'; // Ajusta según tus preferencias
        fechaDiv.style.fontSize = '12px'; // Ajusta según tus preferencias
        fechaDiv.style.padding = '10px'; // Ajusta según tus preferencias
        fechaDiv.style.backgroundColor = 'orange';
        fechaDiv.style.color = 'white';
        fechaDiv.style.width = '100%'; // Ajuste al tamaño del div
        fechaDiv.style.overflow = 'hidden'; // Oculta cualquier exceso de contenido

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btnEliminar');
        btnEliminar.addEventListener('click', () => this.controller.eliminarNota());

        this.notaElemento.appendChild(tituloDiv);
        this.notaElemento.appendChild(contenidoDiv);
        this.notaElemento.appendChild(fechaDiv);
        this.notaElemento.appendChild(btnEliminar);

        // Añadir eventos
        this.notaElemento.addEventListener('mousedown', (e) => this.controller.iniciarArrastreNota(e));
        this.notaElemento.addEventListener('mouseup', () => this.controller.finalizarArrastreNota());
        // ...

        return this.notaElemento;
    }

    editarElemento(elemento) {
        const textoOriginal = elemento.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = textoOriginal;
        input.style.width = '50%';
        input.style.fontFamily = 'Arial, sans-serif'; // Ajusta según tus preferencias
        input.style.fontSize = '14px'; // Ajusta según tus preferencias

        input.addEventListener('blur', () => {
            elemento.textContent = input.value;
            // Aquí puedes realizar acciones adicionales, como actualizar el modelo, si es necesario.
        });

        elemento.textContent = '';
        elemento.appendChild(input);
        input.focus();
    }
}