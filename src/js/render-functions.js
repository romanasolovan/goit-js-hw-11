import SimpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightBox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images.map(image => {
        return `
        <li class="gallery-item">
        <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" width="360" height="200"/>
        </a>
        <div class="info-list">
        <div class="info-item">
        <p class="info-item-title">Likes</p>
        <p class="info-item-text">${image.likes}</p>
        </div>
        <div class="info-item">
        <p class="info-item-title">Views</p>
        <p class="info-item-text">${image.views}</p>
        </div>
        <div class="info-item">
        <p class="info-item-title">Comments</p>
        <p class="info-item-text">${image.comments}</p>
        </div>
        <div class="info-item">
        <p class="info-item-title">Downloads</p>
        <p class="info-item-text">${image.downloads}</p>
        </div>
        </div>
        </li>
        `;
    }).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('is-hidden');
}

export function hideLoader() {
    loader.classList.add('is-hidden');
}