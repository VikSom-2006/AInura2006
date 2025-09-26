// Ждем, пока вся HTML-структура страницы будет загружена
document.addEventListener('DOMContentLoaded', function() {

    // Находим все навигационные ссылки
    const navLinks = document.querySelectorAll('nav a');

    // Находим все секции, которые представляют собой "страницы"
    const pageSections = document.querySelectorAll('.page-section');

    // Функция для переключения страниц
    function switchPage(event) {
        // Предотвращаем стандартное действие ссылки (переход по href="#")
        event.preventDefault();

        // Получаем целевую страницу из data-атрибута кликнутой ссылки
        // 'this' в данном контексте - это ссылка, по которой кликнули
        const targetPageId = this.dataset.page + '-page'; // Например, "profile" -> "profile-page"

        // 1. Убираем класс 'active' со всех ссылок
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // 2. Добавляем класс 'active' только той ссылке, по которой кликнули
        this.classList.add('active');

        // 3. Скрываем все секции-страницы
        pageSections.forEach(section => {
            section.classList.add('hidden');
        });

        // 4. Показываем нужную секцию
        const targetSection = document.getElementById(targetPageId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    }

    // Добавляем обработчик клика на каждую навигационную ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', switchPage);
    });

});