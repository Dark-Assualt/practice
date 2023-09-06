var menu = document.getElementById("menu");
var box = document.getElementById("nav");
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
menu.addEventListener('click', () => {
    box.classList.toggle("menuActive");
})

document.addEventListener("DOMContentLoaded", () => {
    var images=[
        {
            name: "controller Fifa",
            link:"https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
        },
        {
            name:"space-invasion",
            link: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg",
        },
        {
            name: "NES Controller",
            link: "https://images.pexels.com/photos/1637436/pexels-photo-1637436.jpeg",
        },
        {
            name: "Switch",
            link: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg",
        },
        {
            name: "SetUp",
            link: "https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg",
        },
        {
            name: "cereal",
            link: "https://images.pexels.com/photos/12719131/pexels-photo-12719131.jpeg",
        },
        {
            name: "Sony PS1",
            link: "https://images.pexels.com/photos/4219929/pexels-photo-4219929.jpeg",
        },
        {
            name: "VR",
            link: "https://images.pexels.com/photos/3945664/pexels-photo-3945664.jpeg",
        },
        {
            name: "PS collection",
            link: "https://images.pexels.com/photos/7870812/pexels-photo-7870812.jpeg",
        },
        {
            name: "Gameboy",
            link: "https://images.pexels.com/photos/2263815/pexels-photo-2263815.jpeg",
        },
    ]

    
        images.forEach((image) => {
        var container = document.querySelector(".moving");
        var swipe = document.createElement("Div");
        swipe.className += "swiper-slide";
        console.log("swipe")
        var img = document.createElement("img");
        img.src = image.link;
        img.alt = image.name;
        swipe.appendChild(img);
        container.appendChild(swipe);
    })
})