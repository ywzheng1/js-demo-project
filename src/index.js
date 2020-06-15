const navigation = require('./js/navigation.js')
const fetchPostList = require('./js/fetch-posts.js');

navigation();

// fetch main content
fetchPostList(
    'https://jsonplaceholder.typicode.com/posts?_page=0', 
    '#main-content'
);

// fetch top 5 content
fetchPostList(
    'https://jsonplaceholder.typicode.com/posts?_start=0&_end=5', 
    '#top-five-content'
);
