window.onload = function(){  
    const portfolioSection = document.getElementById('portfolioSection');
    const aboutSection = document.getElementById('aboutSection');
    const cvSection = document.getElementById('cvSection');
    const contactSection = document.getElementById('contactSection');
    const portfolioLink = document.getElementById('portfolioSectionLink');
    const aboutLink = document.getElementById('aboutSectionLink');
    const cvLink = document.getElementById('cvSectionLink');
    const contactLink = document.getElementById('contactSectionLink');
    const currentPaintLink = document.getElementById('paintingsLink');
    const currentDrawLink = document.getElementById('drawingsLink');
    const olderWorkLink = document.getElementById('oldWorkLink');
    const studiesLink = document.getElementById('studiesLink');
    const currentPaintGallery = document.getElementById('currentPaintingLightBox');
    const currentDrawGallery = document.getElementById('currentDrawingLightBox');
    const olderWorkGallery = document.getElementById('olderWorkLightBox');
    const studiesGallery = document.getElementById('studiesLightBox');
    
    //event listeners
    portfolioLink.addEventListener('click', () =>{
        portfolioSection.style.visibility = 'visible';
        aboutSection.style.visibility = 'hidden';
        cvSection.style.visibility = 'hidden';
        contactSection.style.visibility = 'hidden';
    })
    aboutLink.addEventListener('click', () =>{
        portfolioSection.style.visibility = 'hidden';
        aboutSection.style.visibility = 'visible';
        cvSection.style.visibility = 'hidden';
        contactSection.style.visibility = 'hidden';
    })
    cvLink.addEventListener('click', () =>{
        portfolioSection.style.visibility = 'hidden';
        aboutSection.style.visibility = 'hidden';
        cvSection.style.visibility = 'visible';
        contactSection.style.visibility = 'hidden';
    })
    contactLink.addEventListener('click', () =>{
        portfolioSection.style.visibility = 'hidden';
        aboutSection.style.visibility = 'hidden';
        cvSection.style.visibility = 'hidden';
        contactSection.style.visibility = 'visible';
    })
    currentPaintLink.addEventListener('click', () => {
        currentPaintGallery.style.visibility = 'visible';
        portfolioSection.style.visibility = 'hidden';
    })
    currentDrawLink.addEventListener('click', () =>{
        currentDrawGallery.style.visibility = 'visible';
        portfolioSection.style.visibility = 'hidden';
    })
    olderWorkLink.addEventListener('click', () => {
        olderWorkGallery.style.visibility = 'visible';
        portfolioSection.style.visibility = 'hidden';
    })
    studiesLink.addEventListener('click', () =>{
        studiesGallery.style.visibility = 'visible';
        portfolioSection.style.visibility = 'hidden';
    })






    /*
    //clicking to get the lightbox
    const modal = document.getElementById('simpleModal');
    const modalBtn = document.getElementById('modalBtn');
    const closeBtn = document.querySelector('.closeBtn');
    

    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', clickOutside);

        function openModal(){
            modal.style.display = "block";
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
    
    startSlide();*/
};