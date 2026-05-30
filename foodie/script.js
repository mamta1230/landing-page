const cards = document.querySelectorAll(".menu-card");

cards.forEach(card => {

    card.addEventListener("mousemove",(e)=>{

        const x = e.offsetX;
        const y = e.offsetY;

        const rotateY =
        (x - card.offsetWidth/2)/15;

        const rotateX =
        -(y - card.offsetHeight/2)/15;

        card.style.transform=
        `rotateY(${rotateY}deg)
         rotateX(${rotateX}deg)
         translateY(-15px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=
        "rotateY(0deg) rotateX(0deg)";

    });

});
