import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulGallery = document.querySelector('.gallery');

function createGalleryMarkup (items) {
    return items
    .map(
        (item) => `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
          />
        </a>
      </li>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
ulGallery.innerHTML = addGalleryMarkup;

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 	'bottom',
    captionDelay: 250,

} );



console.log(galleryItems);
