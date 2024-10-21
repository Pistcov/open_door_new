function toggleButton() {
    const button = document.getElementById('toggleButton');
    const background = document.getElementById('background');

    // Меняем состояние кнопки на неактивное
    button.disabled = true;

    // Меняем фон на "занято"
    background.classList.remove('free');
    background.classList.add('busy');
}
