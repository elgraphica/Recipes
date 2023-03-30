const images = document.querySelectorAll('.section-1-imgs img')

let i = 1

setInterval(() => {
    i++

    const image = document.querySelector('.section-1-imgs .change')

    image.classList.remove('change')

    if(i > images.length) {
        images[0].classList.add('change') 
        i = 1
    }else {
        image.nextElementSibling.classList.add('change')
    }




}, 5000)