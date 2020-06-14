// import css from './index.scss';

// import { navigation } from './js/navigation.js';
// import { fetchPostList } from './js/fetch-posts.js';
// import { postDetail } from './js/post-detail.js';

const navigation = require('./js/navigation.js')
const fetchPostList = require('./js/fetch-posts.js');

navigation();

fetchPostList(
    'https://jsonplaceholder.typicode.com/posts?_page=0', 
    '#main-content'
);

fetchPostList(
    'https://jsonplaceholder.typicode.com/posts?_start=0&_end=5', 
    '#top-five-content'
);

// postDetail();