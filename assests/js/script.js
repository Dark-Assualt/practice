var menu = document.getElementById("menu");
var box = document.getElementById("nav");
menu.addEventListener('click', () => {
    box.classList.toggle("menuActive");
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


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
        let img = document.createElement("img");
        img.src = image.link;
        img.alt = image.name;
        swipe.appendChild(img);
        container.appendChild(swipe);
    })

    var features = [
        {
            heading: "Drill Milling Machine",
            url: "https://images.pexels.com/photos/50691/drill-milling-milling-machine-drilling-50691.jpeg?auto=compress&cs=tinysrgb&w=300",
        },
        {
            heading: "Pistons",
            url: "https://images.pexels.com/photos/190539/pexels-photo-190539.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
            heading: "Gears",
            url: "https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
            heading: "Mining",
            url: "https://images.pexels.com/photos/1579356/pexels-photo-1579356.jpeg?auto=compress&cs=tinysrgb&w=300"
        }
    ]
    var contain_feature = document.querySelector(".features")
    features.forEach((feature) => {
        let con_f = document.createElement("Div");
        con_f.classList.add("feature", "flex");
        let explain = document.createElement("Div");
        explain.classList.add("explain");
        let img = document.createElement("img");
        img.src = feature.url;
        img.alt = feature.heading;
        let heading = document.createElement("h2")
        heading.classList.add("heading")
        heading.innerHTML = feature.heading
        let details= document.createElement("p")
        details.classList.add("detail")
        details.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse enim deserunt nihil eveniet praesentium, libero inventore tenetur doloribus dignissimos fuga aperiam quidem mollitia, totam in ad est placeat similique reprehenderit fugiat magni quas sit molestias! Sit animi recusandae unde."
       console.log(details)
        explain.appendChild(heading)
        explain.append(details)
        con_f.appendChild(img)
        con_f.append(explain)
        contain_feature.appendChild(con_f)
    })
})