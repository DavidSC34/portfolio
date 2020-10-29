document.addEventListener('DOMContentLoaded', () => {
    // alert("Funciona");
    cargarPortafolio();

});

function cargarPortafolio() {
    // alert("Hola desde la funcion");
    fetch('datos.json')
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((datos) => {
            // console.log(datos);
            let html = '';
            datos.portafolio.forEach(portafolio => {
                //Crear el template
                html += `
                    <div class="elemento">
                        <img src="img/${portafolio.id}.jpg">
                        <div class="contenido">
                            <h3>${portafolio.nombre}</h3>
                            <p>${portafolio.desc}</p>
                        </div>
                    </div>
                `;
            });
            //DEspues de crear el template, inyectar al HTML
            document.querySelector('#listado').innerHTML = html;
        });

}