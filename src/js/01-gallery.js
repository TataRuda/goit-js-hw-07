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
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
ulGallery.innerHTML = addGalleryMarkup;

/* const newStringGallery = galleryItems.reduce((acc, { preview, description, original }) => {
    return (acc += `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`)
}, ''); 
   
ulGallery.innerHTML = newStringGallery; */


ulGallery.addEventListener("click", onImageClick);

function onImageClick(event) {
    blockStandartAction(event);
  
if (event.target.nodeName !== "IMG") {
return;
}

const instance = basicLightbox.create(`
<img src="${event.target.dataset.source}" width="800" height="600">
`)
instance.show();

ulGallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
        instance.close();
    }
});
function blockStandartAction(event) {
    event.preventDefault();
}
} 

console.log(galleryItems);

