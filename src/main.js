import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');


form.addEventListener('submit', async (event) => {
    event.preventDefault();

    clearGallery();
    showLoader();

    const query = input.value.trim();
    
    if (!query) {
        iziToast.warning({
            message: 'Please enter a search term!',
            position: 'topRight',
        });
        hideLoader();
        return;
    }
  
    try {
        const data = await getImagesByQuery(query);
        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
        } else {
            createGallery(data.hits);
        }
    } catch (error) {
        iziToast.error({
            message: 'Something went wrong. Please try again later.',
            position: 'topRight',
        });
        console.log(error);
    } finally {
        hideLoader();
    }
});

