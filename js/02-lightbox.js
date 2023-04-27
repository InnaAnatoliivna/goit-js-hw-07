import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const galleryNextList = document.querySelector(".gallery");

const galleryNextItem = galleryItems
    .map(
        (item) =>
            `<li class="gallery__item">
                <a class="gallery__link" href="large-image.jpg">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>
            </li>`
    )
    .join("");

galleryNextList.insertAdjacentHTML('beforeend', galleryNextItem);


galleryNextList.addEventListener('click', openSelectedImage);

function openSelectedImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }

    const selectedImage = event.target;
    console.log(selectedImage);

    new SimpleLightbox(galleryNextList, selectedImage, { /* options */ });///??????
};




