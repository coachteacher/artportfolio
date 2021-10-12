window.onload = function(){  
    const portfolioSection = document.getElementById('portfolioSection');
    const aboutSection = document.getElementById('aboutSection');
    const cvSection = document.getElementById('cvSection');
    const contactSection = document.getElementById('contactSection');
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

    //site navigation
    const navLinks = document.querySelectorAll('.navLinks')
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
                const portfolioLink = document.getElementById('portfolioSectionLink');
                const aboutLink = document.getElementById('aboutSectionLink');
                const cvLink = document.getElementById('cvSectionLink');
                const contactLink = document.getElementById('contactSectionLink');
        
                switch(e.target){
                    case portfolioLink:
                        portfolioSection.style.visibility = 'visible';
                        aboutSection.style.visibility = 'hidden';
                        cvSection.style.visibility = 'hidden';
                        contactSection.style.visibility = 'hidden';
                        currentPaintGallery.style.visibility = 'hidden';
                        currentDrawGallery.style.visibility = 'hidden';
                        olderWorkGallery.style.visibility = 'hidden';
                        studiesGallery.style.visibility = 'hidden';
                        break;
                    case aboutLink:
                        portfolioSection.style.visibility = 'hidden';
                        aboutSection.style.visibility = 'visible';
                        cvSection.style.visibility = 'hidden';
                        contactSection.style.visibility = 'hidden';
                        currentPaintGallery.style.visibility = 'hidden';
                        currentDrawGallery.style.visibility = 'hidden';
                        olderWorkGallery.style.visibility = 'hidden';
                        studiesGallery.style.visibility = 'hidden';
                        break;
                    case cvLink:
                        portfolioSection.style.visibility = 'hidden';
                        aboutSection.style.visibility = 'hidden';
                        cvSection.style.visibility = 'visible';
                        contactSection.style.visibility = 'hidden';
                        currentPaintGallery.style.visibility = 'hidden';
                        currentDrawGallery.style.visibility = 'hidden';
                        olderWorkGallery.style.visibility = 'hidden';
                        studiesGallery.style.visibility = 'hidden';
                        break;
                    case contactLink:
                        portfolioSection.style.visibility = 'hidden';
                        aboutSection.style.visibility = 'hidden';
                        cvSection.style.visibility = 'hidden';
                        contactSection.style.visibility = 'visible';
                        currentPaintGallery.style.visibility = 'hidden';
                        currentDrawGallery.style.visibility = 'hidden';
                        olderWorkGallery.style.visibility = 'hidden';
                        studiesGallery.style.visibility = 'hidden';
                    }
                })
            })

    //portfolio navigation
    const portfolioLinks = document.querySelectorAll('.portfolioLinks');
    portfolioLinks.forEach(link => {
        link.addEventListener('click', (e) => {           
            const currentPaintLink = document.getElementById('recentPaintingsLink');
            const currentDrawLink = document.getElementById('recentDrawingsLink');
            const olderWorkLink = document.getElementById('olderWorkLink');
            const studiesLink = document.getElementById('studiesWorkLink');
            const paintingsSpan = document.getElementById('paintingsSpan');
            const drawingsSpan = document.getElementById('drawingsSpan');
            const olderSpan = document.getElementById('olderSpan');
            const studiesSpan = document.getElementById('studiesSpan');

            switch(e.target){
                case currentPaintLink:
                case paintingsSpan:
                    currentPaintGallery.style.visibility = 'visible';
                    break;
                case currentDrawLink:
                case drawingsSpan:
                    currentDrawGallery.style.visibility = 'visible';
                    break;
                case olderWorkLink:
                case olderSpan:
                    olderWorkGallery.style.visibility = 'visible';
                    break;
                case studiesLink:
                case studiesSpan:
                    studiesGallery.style.visibility = 'visible';
            }
        })
    }) 
    //gallery navigation
    pImages.forEach(img => {
        img.addEventListener('click', (e) => {
            currentPaintCurrentImage.src = e.target.src;
            pImages.forEach(img => (img.style.opacity = 1));
            e.target.style.opacity = 0.6;
            paintingInfo.innerHTML = e.target.nextElementSibling.innerHTML;
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

};
