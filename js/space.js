document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("inputBuscar");
    
    const contenedor = document.getElementById("contenedor");
    const boton = document.getElementById("btnBuscar");

    function mostrarDatos(datos) {
        datos.collection.items.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('resultado');
            div.innerHTML = `
                <h1>${item.data[0].title}</h1>
                <img src="${item.links[0].href}" alt="Descripción de la imagen">
                <p>Descripción: ${item.data[0].description}</p>
                <p>Fecha: ${item.data[0].date_created}</p>
            `;
            contenedor.appendChild(div);
        });
    }

    boton.addEventListener("click", () => {
        const contenedor = document.getElementById("contenedor");
        const valorInput = input.value;
        contenedor.innerHTML = "";
        fetch(`https://images-api.nasa.gov/search?q=${valorInput}`)
            .then(response => response.json())
            .then(data => {
                mostrarDatos(data);
            })
            .catch(error => {
                console.error(error);
            });
    });
});
