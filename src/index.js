import css from './index.scss';

import { navigation } from './js/navigation';
import { fetchData } from './js/fetch-data';

navigation();
fetchData(
    'https://jsonplaceholder.typicode.com/posts?_page=0', 
    '#main-content'
);