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



// �������� ������� ����� ����������
const carCard = document.querySelector('.car-card');

// ����������� ������� ����� ����������
const clonedCard = carCard.cloneNode(true);

// �������� ������������� �������� � ������� �������� �� ��������
const otherElement = document.querySelector('.car-container');
otherElement.appendChild(clonedCard);


//��� �������� ����, ��� ������ ������ ������ ����:

//const carCard = document.querySelector('.car-card');: ��� ���� ���������� ������� �������� ���������� �� ������� ��������, ��������� ��� ��� ������.
//const clonedCard = carCard.cloneNode(true);: � ������� ����� ������ ��������� �������� ����� �������� �������� ����������.��� �������� � �������� ��������� ��� �������� �������� �������� ���������� ����� ����� �����������.cloneNodetrue
//const otherElement = document.querySelector('.other-element');: ��� ���� ���������� ������� �� ������ ��������, ���� �� ������ �������� ������������� ��������.�������� �� ��������������� �������� ��� �������� ��������..other - element
//otherElement.appendChild(clonedCard);: ������������� �������� ����������� � ������� �������� �� �������� � ������� ������.appendChild
//����������: ����������� �������� ���� ��� JavaScript � ������� HTML - ��������, �� ������� �� ������ ����������� �������� ����������.