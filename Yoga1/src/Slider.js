function Slider (){
    let sliderIndex = 1,
    sliders = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

showSlides(sliderIndex);
function showSlides (n){
    if (n>sliders.length){
        sliderIndex = 1;
    }
    if (n<1){
        sliderIndex = sliders.length;
    }

    sliders.forEach((item) => item.style.display = 'none');

    dots.forEach((item) => item.classList.remove('dot-active'));

    sliders[sliderIndex-1].style.display = 'block';
    dots[sliderIndex-1].classList.add('dot-active');
}

function plusSlide (n){
    showSlides(sliderIndex+=n);
}
function currentSlide (n){
    showSlides(sliderIndex=n);
}
prev.addEventListener('click',()=>{
    plusSlide(-1);
});
next.addEventListener('click',()=>{
    plusSlide(1);
});

dotsWrap.addEventListener('click',(event)=>{
    for(let i = 0;i<dotsWrap.length+1;i++){
        if(event.target.classList.contains('dot')&& event.target == dots[i-1]){
            currentSlide(i);
        }
    }
});
}

module.exports = Slider;