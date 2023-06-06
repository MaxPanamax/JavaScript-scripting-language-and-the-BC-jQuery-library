// JavaScript source code
// Получаем элементы DOM
const thumbnailImages = document.querySelectorAll('.thumbnail-image');
const fullImage = document.querySelector('.full-image');
const defaultImage = 'http://554a875a-71dc-4f5f-b6bf-ae8967f137d5.selcdn.net/thumbs2/a5441fd4-3b2b-11ec-9195-728dc54269ee.800x600.jpg';

// Загружаем миниатюры
thumbnailImages.forEach(image => {
    image.src = image.dataset.src;
    image.addEventListener('error', () => {
        // При ошибке загрузки показываем дефолтную картинку
        image.src = defaultImage;
    });
});

// Обработчик клика на миниатуре
thumbnailImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        // Заменяем увеличенную картинку на выбранную миниатюру
        fullImage.src = image.src;
        // Обновляем рамку у выбранной миниатюры
        thumbnailImages.forEach(thumbnail => {
            if (thumbnail.classList.contains('active')) {
                thumbnail.classList.remove('active');
            }
        });
        image.classList.add('active');
    });
});

// При загрузке страницы первую картинку отображаем в увеличенном размере
fullImage.src = thumbnailImages[0].src;
thumbnailImages[0].classList.add('active');
