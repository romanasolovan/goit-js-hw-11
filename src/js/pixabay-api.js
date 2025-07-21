import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51420403-5f20d185bf97c75fff06f9d5f';

export async function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 20,
    };

    const response = await axios.get(BASE_URL, { params });
    return response.data;
};