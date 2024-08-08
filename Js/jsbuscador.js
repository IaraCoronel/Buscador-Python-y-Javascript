// Esto lo busqué porque no sabía muy bien como hacerlo funcionar, esta es la idea:
document.addEventListener('DOMContentLoaded', () => {
    const pages = [
        //Se pueden poner las páginas que quieras
        { name: "Minecraft", url: "minecraft.html" },
        { name: "Mario Bros", url: "mariobros.html" },
        { name: "Otro ejemplo...", url: "Otroejemplo.html" },
        ];
    const input = document.getElementById('searchInput');
    const results = document.getElementById('results');
    //Este sirve para agregar la lista:
    input.addEventListener('input', () => {
        const query = input.value.toLowerCase(); 
        results.innerHTML = ''; //Este hace que muestre solo una opción y no varias
         //Se usa un condicional
        if (query) {
            const filtered = pages.filter(p => p.name.toLowerCase().includes(query)); //este busca la página "filtrando"     
            // Si hay páginas filtradas, las muestra
            if (filtered.length) {
                filtered.forEach(p => {
                    const div = document.createElement('div'); // Crea un nuevo div para cada resultado
                    div.className = 'result-item'; // Añade la clase para los estilos
                    div.textContent = p.name; // Muestra el nombre de la página
                     div.onclick = () => window.location.href = p.url; //redirige a la página
                        results.appendChild(div); // Añade el div de resultado al contenedor
                });
                results.style.display = 'block'; // Muestra el contenedor de resultados
            } else {
                results.style.display = 'none'; // Si no hay resultados, lo oculta
            }
        } else {
            results.style.display = 'none'; // Si no hay consulta, oculta los resultados
        }
    });
    document.addEventListener('click', e => { //cierra los resultados cuando haces clic afuera
        if (e.target !== input && e.target !== results) {
            results.style.display = 'none'; // Oculta los resultados
        }
    });
});