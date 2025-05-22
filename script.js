document.addEventListener('DOMContentLoaded', () => {
    const acceptButton = document.getElementById('accept');
    const rejectButton = document.getElementById('reject');

    acceptButton.addEventListener('click', () => {
        alert('Você aceitou o pedido de namoro! ❤️');
    });

    // Remove o alerta do botão de rejeitar
    rejectButton.addEventListener('click', () => {
        alert('Você recusou o pedido de namoro. 😢');
    });

    // Função para mover o botão para um local aleatório
    function moveButton() {
        const padding = 20;
        const x = Math.random() * (window.innerWidth - rejectButton.offsetWidth - padding);
        const y = Math.random() * (window.innerHeight - rejectButton.offsetHeight - padding);
        rejectButton.style.position = 'fixed';
        rejectButton.style.left = `${x}px`;
        rejectButton.style.top = `${y}px`;
    }

    // Detecta se o mouse está perto do botão
    document.addEventListener('mousemove', (e) => {
        const rect = rejectButton.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const distX = Math.abs(mouseX - (rect.left + rect.width / 2));
        const distY = Math.abs(mouseY - (rect.top + rect.height / 2));
        const distance = Math.sqrt(distX ** 2 + distY ** 2);

        if (distance < 100) { // 100px de distância para fugir
            moveButton();
        }
    });
});