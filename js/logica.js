document.addEventListener("DOMContentLoaded", function () {

    const noButton = document.getElementById('no-button');
    noButton,addEventListener("click", () => {
        alert("no jodas")
    })

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