document.addEventListener("DOMContentLoaded", function () {
    let cliks= 0
    const siButton = document.getElementById('si-button');
    const noButton = document.getElementById('no-button');

    noButton.addEventListener('click', () => {
        
            alert("¡Genial! Espero que todo salga bien.");
        });

    document.addEventListener("mousemove", function (event) {
        const buttonRect = noButton.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Verifica si el mouse está cerca del botón
    if (
        mouseX >= buttonRect.left &&
        mouseX <= buttonRect.right &&
        mouseY >= buttonRect.top &&
        mouseY <= buttonRect.bottom
    ) {
        // Cambiar la posición del botón de 'No' aleatoriamente
        noButton.style.transform = `translate(${Math.random() * 100}px, ${Math.random() * 100}px)`;
    }
    });

});