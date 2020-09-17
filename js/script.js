// slider

let sliderIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots')
    dots = document.querySelectorAll('.dot');

    showSlide(sliderIndex)
    
    function showSlide(n){
        if(n>slides.length){
            sliderIndex = 1
        }
        if(n<1){
            sliderIndex = slides.length
        }
        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[sliderIndex-1].style.display = 'block';
        dots[sliderIndex-1].classList.add ('dot-active');
    }

    function plusSlides(n){
        showSlide(sliderIndex += n)
    }
    function currentSlide(n){
        showSlide(sliderIndex = n);
    }
    
    prev.addEventListener('click',function(){
        plusSlides(-1);
    })
    next.addEventListener('click',function(){
        plusSlides(1);
    })

    dotsWrap.addEventListener('click',function(event){
        for( let i=0;i<dots.length + 1 ;i++){
            if(event.target.classList.contains('dot')&&event.target == dots[i-1]){
                currentSlide(i);
        }
    }
})

// tabs

let headerWrap = document.querySelector('.info-header'),
    headerTab = document.querySelectorAll('.info-header-tab'),
    headerTabImg = document.querySelectorAll('.header-tab-logo'),
    tab = document.querySelectorAll('.info-tabcontent');

function hideActive(){
    for(let a = 0;a<headerTab.length;a++){
        if(headerTab[a].style.top == 50+'px'){
            headerTab[a].style.top = 0+'px';
        }
        if(headerTab[a].classList.contains('info-header-tab-active')){
            headerTab[a].classList.remove('info-header-tab-active');
        }
    }
}
function activeHeaderTab(){
         for(let i= 0;i<headerTab.length;i++){
            headerTabImg[i].addEventListener('click',function(){
                hideActive();
                headerTab[i].style.top = 50+'px';

            })
        }
}
activeHeaderTab();

function hideTab(n){
        tab[n].classList.remove('info-tabcontent-hide');
        tab[n].classList.add('info-tabcontent-show')
}
hideTab(1);

function hideTabAll(){
    tab.forEach(function(item){
        item.classList.remove('info-tabcontent-show');
        item.classList.add('info-tabcontent-hide');
    })
}
function showTab(b){
    if(tab[b].classList.contains('info-tabcontent-hide')){
        tab[b].classList.remove('info-tabcontent-hide');
        tab[b].classList.add('info-tabcontent-show')
    }
}

for(let i = 0;i<headerTab.length;i++){
    headerTabImg[i].addEventListener('click',function(){
        hideTabAll();
        showTab(i);
    })
}


