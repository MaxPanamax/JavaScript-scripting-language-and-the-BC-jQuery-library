// JavaScript source code
//let car1 = {
//    brand: "BMW",
//    year: "2023",
//    engine: "3.0 l",
//    price: "1 000 000 rub."
//};
//let car2 = {
//    brand: "BMW",
//    year: "2023",
//    engine: "4.0 l",
//    price: "2 000 000 rub."
//}
//let car3 = {
//    brand: "BMW",
//    year: "2022",
//    engine: "2.0 l",
//    price: "2 000 000 rub."
//};
//let car4 = {
//    brand: "BMW",
//    year: "2022",
//    engine: "4.0 l",
//    price: "3 000 000 rub."
//}
//let car5 = {
//    brand: "BMW",
//    year: "2023",
//    engine: "3.0 l",
//    price: "4 000 000 rub."
//};
//let car6 = {
//    brand: "BMW",
//    year: "2023",
//    engine: "5.0 l",
//    price: "5 000 000 rub."
//}
//let car7 = {
//    brand: "BMW",
//    year: "2022",
//    engine: "2.0 l",
//    price: "1 000 000 rub."
//};
//let car8 = {
//    brand: "BMW",
//    year: "2023",
//    engine: "4.0 l",
//    price: "5 000 000 rub."
//}
//let car9 = {
//    brand: "BMW",
//    year: "2021",
//    engine: "3.0 l",
//    price: "1 000 000 rub."
//};
//let car10 = {
//    brand: "BMW",
//    year: "2021",
//    engine: "4.0 l",
//    price: "2 000 000 rub."
//}
/*let carContainer = document.getElementById("car-container");*/
//let cars = [
//    { brand: "BMW", year: 2023, engine: "3.0 l", price: "1 000 000 rub." },
//    { brand: "BMW", year: 2023, engine: "4.0 l", price: "2 000 000 rub." },
//    { brand: "BMW", year: 2022, engine: "2.0 l", price: "2 000 000 rub." },
//    { brand: "BMW", year: 2022, engine: "4.0 l", price: "3 000 000 rub." },
//    { brand: "BMW", year: 2021, engine: "3.0 l", price: "3 000 000 rub." },
//    { brand: "BMW", year: 2021, engine: "5.0 l", price: "4 000 000 rub." },
//    { brand: "BMW", year: 2023, engine: "2.0 l", price: "4 000 000 rub." },
//    { brand: "BMW", year: 2023, engine: "3.0 l", price: "5 000 000 rub." },
//    { brand: "BMW", year: 2020, engine: "4.0 l", price: "5 000 000 rub." },
//    { brand: "BMW", year: 2020, engine: "5.0 l", price: "1 000 000 rub." }
//];
//let carCard = document.querySelector(".car-card");


//for (let car of cars) {
//    let ul = document.createElement("ul");
//    let brandLi = document.createElement("li");
//    brandLi.textContent = "�����: " + car.brand;
//    ul.appendChild(brandLi);
//    let yearLi = document.createElement("li");
//    yearLi.textContent = "��� �������: " + car.year;
//    ul.appendChild(yearLi);
//    let engineLi = document.createElement("li");
//    engineLi.textContent = "����� ���������: " + car.engine;
//    ul.appendChild(engineLi);
//    let priceLi = document.createElement("li");
//    priceLi.textContent = "����: " + car.price;
//    ul.appendChild(priceLi);
//}


//function carCard(car) {
//    let cardTemplate = `<div class="car-card">
//                            <div class="brand">${car.brand}</div>
//                            <div class="year">${car.year}</div>
//                            <div class="engine">${car.engine}</div>
//                            <div class="price">${car.price}</div>
//                        </div>`;
//    return cardTemplate;
//}


//for (let i = 0; i < cars1.length; i++) {
//    let cardTemplate1 = carCard(cars1[i]);
//    carContainer.insertAdjacentHTML("beforeend", cardTemplate1);
//}

//function carCard(car) {
//    let brandElem = document.querySelector(".brand");
//    let yearElem = document.querySelector(".year");
//    let engineElem = document.querySelector(".engine");
//    let priceElem = document.querySelector(".price");


//    brandElem.textContent = car.brand;
//    yearElem.textContent = car.year;
//    engineElem.textContent = car.engine;
//    priceElem.textContent = car.price;
//}

//for (let i = 0; i < cars1.length; i++) {
//    carCard(cars1[i]);
//}


//carCard(car2);
//carCard(car3);
//carCard(car4);
//carCard(car5);
//carCard(car6);
//carCard(car7);
//carCard(car8);
//carCard(car9);
//carCard(car10);
//let car = document.createElement(".car-card");
//let clik1 = document.querySelector(".save");
//if (clik1.clik == false) { localStorage.setItem("car", JSON.stringify(car)); }

let clik1 = document.querySelector(".save"); //������ ����������
let DIV = clik1.parentNode.parentNode; //��������� � ������������ ������� DIV
let brand = DIV.querySelector('.brand').innerHTML; //������� �����
let year = DIV.querySelector('.year').innerHTML; //������� ���
let engine = DIV.querySelector('.engine').innerHTML; //������� ����� ���������
let price = DIV.querySelector('.price').innerHTML; //������� ����
let photo = DIV.getElementsByTagName('img')[0].src; //������� ����

let selectedAuto = {
    myBrand: brand,
    myYear: year,
    myEngine: engine,
    myPrice: price,
    myPhoto: photo
}

console.log(selectedAuto);
localStorage.setItem("�ar", JSON.stringify(selectedAuto)); //������ ������� � localStorage

let objectAuto = JSON.parse(localStorage.getItem(localStorage.key("�ar"))); //�������� ������ �� localStorage � ���� �������

console.log(objectAuto);