'use strict';
const nameKeyLocalStorage = 'active-slide-info';
$(document).ready(function () {
    var owl = $(".owl-carousel"); 
    $(".owl-carousel").owlCarousel({
        items: 2, 
        margin: 50, 
        loop: true, 
        responsive: true, 
        responsive: {
            0: { 
                items: 1
            },
            400: {
                items: 3
            },
            800: {
                items: 2
            }
        },
        onInitialized: (event) => console.log(`Количество слайдов: ` + event.item.count)
    });
    owl.on('changed.owl.carousel', function (event) {
      
        console.log(event);
        var obj = {
            name: event.property.name,
            value: event.property.value,
            pageIndex: event.page.index,
            pageSize: event.page.size,
            toString: function () {
                return `name: ${this.name};\nvalue: ${this.value};\npageIndex: ${this.pageIndex};\npageSize: ${this.pageSize}`;
            }
        }
        localStorage.setItem(nameKeyLocalStorage, obj.toString());
    });
    $('.customNextBtn').click(function () { 
        owl.trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function () {
        owl.trigger('prev.owl.carousel');
    })
});
