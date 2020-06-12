import css from './index.scss';

import { navigation } from './js/navigation';
import { fetchPostList } from './js/fetch-posts';

navigation();
fetchPostList(
    'https://jsonplaceholder.typicode.com/posts?_page=0', 
    '#main-content'
);

fetchPostList(
    'https://jsonplaceholder.typicode.com/posts?_start=0&_end=5', 
    '#top-five-content'
);