let sliderImages = document.querySelectorAll(".slide"),
    arrow_right = document.querySelector("#arrow-right"),
    arrow_left = document.querySelector("#arrow-left"),
    current = 0;

function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

// initialize the slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

// show previous 
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// show next 
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}


// left arrow click
arrow_left.addEventListener('click', function(){
    if (current === 0 ){
        current = sliderImages.length;
    }
    slideLeft();
})


// right arrow click
arrow_right.addEventListener('click', function(){
    if (current === sliderImages.length - 1 ){
        current = -1;
    }
    slideRight();
})


startSlide();