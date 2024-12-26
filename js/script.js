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

const slides = document.querySelector('.slides'); // Блок слайдов
const dots = document.querySelectorAll('.dot'); // Точки управления
let currentIndex = 0; // Индекс текущего слайда

// Функция для вычисления ширины слайда в зависимости от ширины экрана
function getSlideWidth() {
   if (window.innerWidth <= 1004.89) {
      return 1004.89; // Сдвиг на 1004.89px при ширине экрана меньше 1004.89px
   }
   return 1440; // Сдвиг на 1440px по умолчанию
}

// Обновление слайдера
function updateSlider(index) {
   const slideWidth = getSlideWidth(); // Получаем ширину слайда в зависимости от ширины экрана
   slides.style.transform = `translateX(${-index * slideWidth}px)`; // Сдвиг слайдов
   dots.forEach(dot => dot.classList.remove('active')); // Убираем активный класс у всех точек
   dots[index].classList.add('active'); // Добавляем активный класс к текущей точке
}

// Автоматическое переключение слайдов
function autoSlide() {
   currentIndex = (currentIndex + 1) % dots.length; // Зацикливание слайдов
   updateSlider(currentIndex);
}

// Обработчик кликов по точкам
dots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
      currentIndex = index; // Устанавливаем текущий индекс
      updateSlider(currentIndex); // Обновляем слайдер
   });
});

// Обновление слайдера при изменении размера окна
window.addEventListener('resize', () => {
   updateSlider(currentIndex); // Пересчитываем положение слайда при изменении размера окна
});

// Инициализация
updateSlider(currentIndex); // Запуск слайдера
setInterval(autoSlide, 30000);

const slidesbecome = document.querySelector('.slides-become'); // Блок слайдов
const dotsbecome = document.querySelectorAll('.dot-become'); // Точки управления
let becomecurrentIndex = 0; // Индекс текущего слайда

// Функция для вычисления ширины слайда в зависимости от ширины экрана
function getSlideWidthbecome() {
   if (window.innerWidth <= 1004.89) {
      return 1004.89; // Сдвиг на 1004.89px при ширине экрана меньше 1004.89px
   }
   return 1440; // Сдвиг на 1440px по умолчанию
}

// Обновление слайдера
function updateSliderbecome(indexbecome) {
   const becomeslideWidth = getSlideWidthbecome(); // Получаем ширину слайда в зависимости от ширины экрана
   slidesbecome.style.transform = `translateX(${-indexbecome * becomeslideWidth}px)`; // Сдвиг слайдов
   dotsbecome.forEach(dotbecome => dotbecome.classList.remove('active')); // Убираем активный класс у всех точек
   dotsbecome[indexbecome].classList.add('active'); // Добавляем активный класс к текущей точке
}

// Автоматическое переключение слайдов
function autoSlidebecome() {
   becomecurrentIndex = (becomecurrentIndex + 1) % dotsbecome.length; // Зацикливание слайдов
   updateSliderbecome(becomecurrentIndex);
}

// Обработчик кликов по точкам
dotsbecome.forEach((dotbecome, indexbecome) => {
   dotbecome.addEventListener('click', () => {
      becomecurrentIndex = indexbecome; // Устанавливаем текущий индекс
      updateSliderbecome(becomecurrentIndex); // Обновляем слайдер
   });
});

// Обновление слайдера при изменении размера окна
window.addEventListener('resize', () => {
   updateSliderbecome(currentIndex); // Пересчитываем положение слайда при изменении размера окна
});

// Инициализация
updateSliderbecome(currentIndex); // Запуск слайдера
setInterval(autoSlidebecome, 30000);