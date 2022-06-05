

class Carrito {

    comprarProducto(event) {
        event.preventDefault();

        const button = event.target;
        const card = button;
        if(card = button.closest('.card-producto')){

            const producto = event.target.parentElement.parentElement;
            this.leerDatos(producto);
        }
        

    }
}