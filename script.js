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
    const currentPaintCurrentImage = document.getElementById('currentP-img');
    const currentDrawCurrentImage = document.getElementById('currrentD-img');
    const olderWorkCurrentImage = document.getElementById('currentO-img');
    const studiesCurrentImage = document.getElementById('currentS-img');
    const pImages = document.querySelectorAll('.p-images img');
    const dImages = document.querySelectorAll('.d-images img');
    const oImages = document.querySelectorAll('.o-images img');
    const sImages = document.querySelectorAll('.s-images img');
    const paintingInfo = document.getElementById('paintingImageInfo');

    //event listeners
    portfolioLink.addEventListener('click', () =>{
        portfolioSection.style.visibility = 'visible';
        aboutSection.style.visibility = 'hidden';
        cvSection.style.visibility = 'hidden';
        contactSection.style.visibility = 'hidden';
        currentPaintGallery.style.visibility = 'hidden';
        currentDrawGallery.style.visibility = 'hidden';
        olderWorkGallery.style.visibility = 'hidden';
        studiesGallery.style.visibility = 'hidden';
    })
    aboutLink.addEventListener('click', () =>{
        portfolioSection.style.visibility = 'hidden';
        aboutSection.style.visibility = 'visible';
        cvSection.style.visibility = 'hidden';
        contactSection.style.visibility = 'hidden';
        currentPaintGallery.style.visibility = 'hidden';
        currentDrawGallery.style.visibility = 'hidden';
        olderWorkGallery.style.visibility = 'hidden';
        studiesGallery.style.visibility = 'hidden';
    })
    cvLink.addEventListener('click', () =>{
        portfolioSection.style.visibility = 'hidden';
        aboutSection.style.visibility = 'hidden';
        cvSection.style.visibility = 'visible';
        contactSection.style.visibility = 'hidden';
        currentPaintGallery.style.visibility = 'hidden';
        currentDrawGallery.style.visibility = 'hidden';
        olderWorkGallery.style.visibility = 'hidden';
        studiesGallery.style.visibility = 'hidden';
    })
    contactLink.addEventListener('click', () =>{
        portfolioSection.style.visibility = 'hidden';
        aboutSection.style.visibility = 'hidden';
        cvSection.style.visibility = 'hidden';
        contactSection.style.visibility = 'visible';
        currentPaintGallery.style.visibility = 'hidden';
        currentDrawGallery.style.visibility = 'hidden';
        olderWorkGallery.style.visibility = 'hidden';
        studiesGallery.style.visibility = 'hidden';
    })
    currentPaintLink.addEventListener('click', () => {
        currentPaintGallery.style.visibility = 'visible';
    })
    currentDrawLink.addEventListener('click', () =>{
        currentDrawGallery.style.visibility = 'visible';
    })
    olderWorkLink.addEventListener('click', () => {
        olderWorkGallery.style.visibility = 'visible';
    })
    studiesLink.addEventListener('click', () =>{
        studiesGallery.style.visibility = 'visible';
    })
    pImages.forEach(img => {
        img.addEventListener('click', (e) => {
            currentPaintCurrentImage.src = e.target.src;
            pImages.forEach(img => (img.style.opacity = 1));
            e.target.style.opacity = 0.6;
        });
    })
    dImages.forEach(img => {
        img.addEventListener('click', (e) => {
            currentDrawCurrentImage.src = e.target.src;
            dImages.forEach(img => (img.style.opacity = 1));
            e.target.style.opacity = 0.6;
        });
    })
    oImages.forEach(img => {
        img.addEventListener('click', (e) => {
            olderWorkCurrentImage.src = e.target.src;
            oImages.forEach(img => (img.style.opacity = 1));
            e.target.style.opacity = 0.6;
        });
    })
    sImages.forEach(img => {
        img.addEventListener('click', (e) => {
            studiesCurrentImage.src = e.target.src;
            sImages.forEach(img => (img.style.opacity = 1));
            e.target.style.opacity = 0.6;
        });
    })
    //functions
    




};