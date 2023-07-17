const images = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const carousel = document.querySelector(".carousel-custom");
let indexImg = 0;
for (let i = 0; i < images.length; i++) {
    //creazione variabile vuota
    let activeImg = "";
    //se i è uguale a 0 scrivere active così da poter mettere in primo piano la prima img
    if (i === 0) {
        activeImg = "active";
    }

    //creazione carousel tramite innerHTML
    carousel.innerHTML += `<div class="${activeImg} index-img">
    <img src="img/${images[i].image}" alt="" />
    <div class="text-img text-end">
    <h4 class="${activeImg}">${images[i].title}</h4>
    ${images[i].text}
    </div>
    </div>`
}

//collegamento btn
const next = document.getElementById("right");
const back = document.getElementById("left");

const allImg = document.querySelectorAll(".index-img");
next.addEventListener("click", function () {
    //rimuovo l'active
    allImg[indexImg].classList.remove("active");
    //incremento il contatore
    indexImg++;

    //se il contatore arriva al massimo del numero delle img,  ritorna alla img 0
    if (indexImg > allImg.length - 1) {
        indexImg = 0
    }
    //Siccome adesso il contatore è aumentato di uno 1 assegno la classe active 
    allImg[indexImg].classList.add("active");
})

back.addEventListener("click", function () {
    allImg[indexImg].classList.remove("active");
    indexImg--;
    //Se indexImg è minore di 0, indexImg deve essere uguale alla massimo numero delle img
    if (indexImg < 0) {
        indexImg = allImg.length - 1;
    }
    allImg[indexImg].classList.add("active");
})
