const obrasGallery = document.querySelector('.obras-gallery');
const galleryImages = document.querySelectorAll('.obras-item-img');
const wrap = document.querySelector('.wrap');
// New modal
const modal = document.createElement('div');
modal.classList.add('modal');
wrap.appendChild(modal);

galleryImages.forEach(galleryImg => {
    // Modal image and modal text
    const image = galleryImg.firstElementChild;
    const imgText = galleryImg.lastElementChild;
    image.addEventListener('click', (e) => {

        modal.classList.add('modal-active');
        // Wrap figure tag tag
        const figModalWrap = document.createElement('div');
        figModalWrap.classList.add('fig-modal-wrap');
        // Figure tag
        const figModal = document.createElement('figure');
        figModal.classList.add('fig-modal');
        // Image tag
        const imgModal = document.createElement('img');
        imgModal.classList.add('img-modal');
        imgModal.setAttribute('src', e.target.src);
        // Prevent duplicate images
        while(modal.firstChild){
            modal.removeChild(modal.firstChild);
        }
        // Insert all
        figModal.appendChild(imgModal);
        figModalWrap.append(figModal);
        figModalWrap.appendChild(imgText);
        modal.appendChild(figModalWrap);
        imgText.classList.add('img-text')
    })
    
})
// Close modal
modal.addEventListener('click', (e) => {
    if(e.target !== e.currentTarget) return;
        modal.classList.remove('modal-active');
})

