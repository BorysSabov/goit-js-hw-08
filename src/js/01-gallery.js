// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const addGalleryPic = document.querySelector('.gallery');

const createGalleryEl = galleryItems
  .map(
    item =>
      ` <li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      />
   </a>
</li>`
  )
  .join('');

addGalleryPic.innerHTML = createGalleryEl;

new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});
