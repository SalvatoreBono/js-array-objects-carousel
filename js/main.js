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
for (let i = 0; i < images.length; i++) {
    //creazione variabile vuota
    let activeImg = "";
    //se i è uguale a 0 scrivere active così da poter mettere in primo piano la prima img
    if (i === 0) {
        activeImg = "active";
    }

    console.log(`${images[i].image},\n ${images[i].title},\n ${images[i].text}.`)

    //creazione carousel tramite innerHTML
    carousel.innerHTML += `<div "class=${activeImg}">
    <img src="img/${images[i].image}" alt="" />
    <div class="text-img text-end">
    <h4 "class=${activeImg}">${images[i].title}</h4>
    ${images[i].text}
    </div>
    </div>`
}

//collegamento btn
const next = document.getElementById("right");
const back = document.getElementById("left");

next.addEventListener("click", function () {
})
back.addEventListener("click", function () {
})
