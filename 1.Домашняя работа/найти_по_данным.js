// JavaScript source code
const form = document.getElementById('form');
let X7 = {
    name: 'bmw',
    color: 'red',
    volume:'3'
}
let X6 = {
    name: 'bmw',
    color: 'black',
    volume: '4'
}
let X5 = {
    name: 'bmw',
    color: 'green',
    volume: '5'
}
let Q8 = {
    name: 'audi',
    color: 'red',
    volume: '3'
}
let Q7 = {
    name: 'audi',
    color: 'black',
    volume: '3'
}
let Q5 = {
    name: 'audi',
    color: 'green',
    volume: '3'
}
let M = {
    name: 'mercedes',
    color: 'red',
    volume: '3'
}
let GLS = {
    name: 'mercedes',
    color: 'black',
    volume: '4'
}
let G = {
    name: 'mercedes',
    color: 'green',
    volume: '5'
}
let cars = {
    G, GLS, M, Q8, Q7, Q5, X5, X6, X7
}
function findCar(event) {
    event.preventDefault();
    let findName = document.getElementById('name').value;
    let findColor = document.getElementById('color').value;
    let findVolume = document.getElementById('volume').value;
    for (let obj in cars) {
        if (findName == cars[obj].name && findColor == cars[obj].color && findVolume == cars[obj].volume)
            console.log(obj);
    }
}
form.addEventListener('submit', findCar);