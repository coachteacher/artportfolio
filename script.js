window.onload = function(){   
    //clicking to get the lightbox
    let modal = document.getElementById('simpleModal');
    let modalBtn = document.getElementById('modalBtn');
    let closeBtn = document.querySelector('.closeBtn');

    modalBtn.addEventListener('click', openModal);
    modalBtn.addEventListener('mouseover', textDarken);
    modalBtn.addEventListener('mouseout', textInvisible);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', clickOutside);

        function openModal(){
            modal.style.display = "block";
        }
    
        function textDarken(){
            document.getElementById('recentPaintings').style.color = "black";
        }
        
        function textInvisible(){
            document.getElementById('recentPaintings').style.color = "transparent";
        }
    
        function closeModal(){
            modal.style.display = "none";
        }

        function clickOutside(e){
            if(e.target == modal){
            modal.style.display = "none";
            }
        }
    
    //image slider
    let sliderImages = document.querySelectorAll('.slide');
    let arrowRight = document.querySelector('.arrow-right');
    let arrowLeft = document.querySelector('.arrow-left');
    let current = 0;

    function reset(){
        for(i = 0; i < sliderImages.length; i++){
            sliderImages[i].style.display = 'none';
        }
    };
    
    //initialize slider
    function startSlide(){
        reset();
        sliderImages[0].style.display = 'block';
    }

    //show previous
    function slideLeft(){
        reset();
        sliderImages[current - 1].style.display = 'block';
        current--;
    }

    //left arrow click
    arrowLeft.addEventListener('click', function(){
        if(current === 0){
            current = sliderImages.length;
        }
        slideLeft();
    });

    //show next
    function slideRight(){
        reset();
        sliderImages[current + 1].style.display = 'block';
        current++;
    }

    //right arrow click
    arrowRight.addEventListener('click', function(){
        if(current === sliderImages.length -1){
            current = -1;
        }
        slideRight();
    });
    
    startSlide();
};