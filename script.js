let menu = document.querySelector('#mods'); // Отримуємо елемент <select>
menu.addEventListener('change', function() {
    let selectedValue = menu.value; // Отримуємо вибране значення
    if (selectedValue) {
        let targetElement = document.getElementById(selectedValue); // Знаходимо елемент за id
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Прокручуємо до елемента
        }
    }
});