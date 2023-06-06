// JavaScript source code
'use strict';

let ticket = document.querySelector('.place');
let buy = document.getElementById('buy');

const keyPlaces = "Места"; 
let freeArrayPlaces = []; 
const infoMessage = "МЕСТ НЕТ";  
function getPlaces(){ 
    if (localStorage.getItem(keyPlaces)==null) { 
        freeArrayPlaces = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        localStorage.setItem(keyPlaces, JSON.stringify(freeArrayPlaces));
    }
    else{
        freeArrayPlaces = JSON.parse(localStorage.getItem(keyPlaces)); 
    }

    if (freeArrayPlaces.length===0){
        ticket.innerText = infoMessage;
    }
    else{
        for (let i = 0; i < freeArrayPlaces.length; i++){ 
            let div = document.createElement('div');
            div.classList.add('numberPlace');
            div.innerHTML = freeArrayPlaces[i];
            ticket.appendChild(div);
        }
    }
}

getPlaces();

class User{
    #yearBirthDay
    #FIO
    #userArrPlaces
    #numberTicket

    constructor(yearBirthDay, fio, userArrPlaces){
        this.#yearBirthDay = yearBirthDay;
        this.#FIO = fio;
        this.#userArrPlaces = userArrPlaces;
    }

    checkInfo(){
        let yearNow = (new Date()).getFullYear();
        let age = yearNow - this.#yearBirthDay;
        if (age < 18 || this.#yearBirthDay===undefined || Number.isNaN(this.#yearBirthDay)){
            alert('Нет 18 лет! В покупке отказано!');
            return false;
        }
        if (this.#userArrPlaces.length === 0){
            alert('Не выбрали места!');
            return false;
        }
        if (this.#FIO.length===0) {
            alert('Не ввели своё ФИО!');
            return false;
        }
        this.#numberTicket = Math.floor(Math.random() * 1000); 
        return true;
    }

    getFIO(){
        return this.#FIO;
    }

    getNumberPlaces(){
        return this.#userArrPlaces;
    }

    getNumberTicket(){
        return this.#numberTicket;
    }

    showInfo(){
        alert(`Фамилия: ${this.#FIO}\nМеста: ${this.#userArrPlaces}\nНомер билета: ${this.#numberTicket}`);
    }
}

ticket.addEventListener('click', function(event){ 
    let clickElement = event.target;
    if (clickElement.classList.contains('numberPlace'))
    {
        if (clickElement.classList.contains('chooisePlace')){
            clickElement.classList.remove('chooisePlace');
        }
        else{
            clickElement.classList.add('chooisePlace');
            console.log(clickElement.innerText);
        }
    }
    if (document.querySelectorAll('.chooisePlace').length>0){
        document.querySelector('.forms').style.display = "flex"; 
    }
    else{
        document.querySelector('.forms').style.display = "none"; 
    }
});

buy.addEventListener('click',function(event){
    let yearBirthDay = (new Date(document.getElementById('birthDay').value)).getUTCFullYear();
    let fio = (document.getElementById('FIO')).value;
    let arrPlacesDIV = document.querySelectorAll('.chooisePlace');
    let userArrPlaces = [];
    for (let i = 0; i < arrPlacesDIV.length; i++){
        userArrPlaces.push(+arrPlacesDIV[i].innerText);
    }
    let user = new User(yearBirthDay, fio,  userArrPlaces);
    if (user.checkInfo()==false){
        event.preventDefault();
    }
    else{
        user.showInfo();
        let newArrayFreePlaces = freeArrayPlaces.filter(function(x){
            return userArrPlaces.indexOf(x) < 0;
        });
        localStorage.setItem(keyPlaces, JSON.stringify(newArrayFreePlaces));

        let obj = {
            "ФИО": user.getFIO(),
            "Места": user.getNumberPlaces()
        };
        localStorage.setItem(user.getNumberTicket(),JSON.stringify(obj)); 
    }
});