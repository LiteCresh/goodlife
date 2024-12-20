const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const login = document.querySelector('.actyv__login');
const input = document.querySelector('.search__input');
const navigation = document.querySelector('.menu__navigation');

// Функція для оновлення стану елементів при кліку
function toggleMenu() {
    if (header.style.height === '253px') {
        header.style.height = ''; // Повертаємо початковий стиль
        login.classList.remove('active');
        input.classList.remove('active');
        navigation.classList.remove('active');
    } else {
        header.style.height = '253px'; // Задаємо нову висоту
        login.classList.add('active');
        input.classList.add('active');
        navigation.classList.add('active');
    }
}

// Функція для скидання стилів, якщо ширина більша за 1004.89px
function resetMenuOnResize() {
    if (window.innerWidth > 1004.89) {
        header.style.height = ''; // Повертаємо початкову висоту
        login.classList.remove('active');
        input.classList.remove('active');
        navigation.classList.remove('active');
    }
}

// Додаємо слухач події на кнопку
menuButton.addEventListener('click', toggleMenu);

// Додаємо слухач події на зміну розміру вікна
window.addEventListener('resize', resetMenuOnResize);