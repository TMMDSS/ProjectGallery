'use strict';

const images = [
    {'id': '1', 'url': './imagens/gojoSatoru1.webp'},
    {'id': '2', 'url': './imagens/gojoSatoru2.webp'},
    {'id': '3', 'url': './imagens/gojoSatoru3.webp'},
    {'id': '4', 'url': './imagens/gojoSatoru4.webp'},
    {'id': '5', 'url': './imagens/gojoSatoru5.webp'},
    {'id': '6', 'url': './imagens/gojoSatoru6.webp'},
]

const containerItems = document.querySelector('#container-items')

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
            <img class='cardImg' src = '${image.url}'
        </div>
        `
    })
}

loadImages(images, containerItems); 
let items = document.querySelectorAll('.item')



const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}


const next = () => {
    const lastItem = items[items.length -1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', next)
document.querySelector('#next').addEventListener('click', previous)




// M O D A L

let imagens = document.querySelectorAll('.cardImg')
let modal = document.querySelector('.modal')
let modalImg = document.querySelector(`#modalImg`)
let btnClose = document.querySelector('#btnClose')
let srcVal = ""


for(let i = 0; i<imagens.length;i++) {
    imagens[i].addEventListener('click', function() {

        srcVal = imagens[i].getAttribute('src')
        modalImg.setAttribute('src', srcVal)
        modal.classList.toggle('modalActive')
    }
    )
}


modal.addEventListener('click', (e) => {
    if (e.target.id == 'btnClose' ||e.target.id == 'modalContent') {
        console.log("hello world")
        modal.classList.toggle('modalActive')
    }
})