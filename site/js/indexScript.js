var beancroc = "imgs/beancroc.jpg";
var beanball = "imgs/beanball.jpg";
var beandonut = "imgs/beandonut.jpg";
var beanoreo = "imgs/beanoreo.jpg";
var beanreeses = "imgs/beanreeses.jpg";
var slideshow = document.getElementById("slideshow");
var slide = 0;
slideshow.width = 500;
slideshow.height = 500;


function swapNextPhoto(){
    
    if(slide == 0){
        slideshow.src = beancroc;
    }else if(slide == 1){
        slideshow.src = beandonut;
    }else if(slide == 2){
        slideshow.src = beanoreo;
    }else if(slide == 3){
        slideshow.src = beanreeses;
    }else if(slide == 4){
        slideshow.src = beanball;
    }
    slideshow.width = 500;
    slideshow.height = 500;

    if(slide == 4){
        slide = 0;
    }else{
        slide++;
    }

    
}




document.addEventListener('DOMContentLoaded', function() {
    var slideTime = setInterval(swapNextPhoto, 3000);
});


