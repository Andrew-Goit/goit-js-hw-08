// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(SimpleLightbox);
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function createGallery(galleryItems) {
    return galleryItems.map(item =>
    `<li>
        <a class="gallery__item" 
            href="${item.original}">
            <img class="gallery__image" 
            src="${item.preview}" 
            alt="${item.description}" />
        </a>
    </li>`
      ).join('');
  }

  galleryRef.insertAdjacentHTML('beforeend', createGallery(galleryItems));

  new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
  });
