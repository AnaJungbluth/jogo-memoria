const emojis = [
    "❤️",
    "❤️",
    "😘",
    "😘",
    "😒",
    "😒",
    "😥",
    "😥",
    "🤤",
    "🤤",
    "😤",
    "😤",
    "🤯",
    "🤯",
    "🥸",
    "🥸"
]

const images = [
    "src/imgs/victory1.png",
    "src/imgs/victory2.png",
    "src/imgs/victory3.png"
];

const randomImage = images[Math.floor(Math.random() * images.length)];

let openCards = []
let randomEmojis = emojis.sort(()=>(
    Math.random()> 0.5) 
    ? 2 
    : -1
)

for(let i=0; i < emojis.length; i++){
    
    let box = document.createElement("div") 
    box.className = "item"
    box.innerHTML = randomEmojis[i]
    box.onclick  = handleClick;

    document.querySelector(".game").appendChild(box)
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen")
        openCards.push(this)
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500)
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    }else{
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }

    openCards = []

    if(document.querySelectorAll(".boxMatch").length == emojis.length){
        Swal.fire({
            title: "Vitória!",
            imageUrl: randomImage,
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: "victory image"
        });
    }
}