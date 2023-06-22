// JavaScript source code
//const carFromStorage = JSON.parse(localStorage.getItem("car"));

//const carousel = document.querySelector(".carousel");
//const carouselInner = carousel.querySelector(".carousel-inner");

//const div = document.createElement("div");
//div.classList.add("carousel-item", "active");

//const img = document.createElement("img");
//img.classList.add("d-block", "w-100");
//img.src = carFromStorage.image;
//div.appendChild(img);

//const caption = document.createElement("div");
//caption.classList.add("carousel-caption", "d-none", "d-md-block");
//caption.innerHTML = `<h3>${carFromStorage.make} ${carFromStorage.model}</h3><p>${carFromStorage.year}</p>`;
//div.appendChild(caption);

//carouselInner.appendChild(div);



// Получить элемент карты автомобиля
const carCard = document.querySelector('.car-card');

// Клонировать элемент карты автомобиля
const clonedCard = carCard.cloneNode(true);

// Добавьте клонированную карточку к другому элементу на странице
const otherElement = document.querySelector('.car-container');
otherElement.appendChild(clonedCard);


//Вот разбивка того, что делает каждая строка кода:

//const carCard = document.querySelector('.car-card');: При этом выбирается элемент карточки автомобиля на текущей странице, используя имя его класса.
//const clonedCard = carCard.cloneNode(true);: С помощью этого метода создается глубокая копия элемента карточки автомобиля.При передаче в качестве аргумента все дочерние элементы карточки автомобиля также будут клонированы.cloneNodetrue
//const otherElement = document.querySelector('.other-element');: При этом выбирается элемент на другой странице, куда вы хотите добавить клонированную карточку.Замените на соответствующий селектор для целевого элемента..other - element
//otherElement.appendChild(clonedCard);: клонированная карточка добавляется к другому элементу на странице с помощью метода.appendChild
//Примечание: Обязательно включите этот код JavaScript в целевую HTML - страницу, на которую вы хотите скопировать карточку автомобиля.