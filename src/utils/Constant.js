const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

export const API_URL = `https://api.unsplash.com/search/photos?page=1&per_page=15&orientation=landscape&client_id=${apiKey}`;

export const USER_API_URL = 'https://jsonplaceholder.typicode.com/users';