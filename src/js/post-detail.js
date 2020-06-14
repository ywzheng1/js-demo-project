// import css from '../index.scss';
// import { fetchPost } from './fetch-post.js';
// import { navigation } from './navigation.js';

const navigation = require('./navigation.js');
const fetchPost = require('./fetch-post.js');


navigation();

console.log('postDetail loaded');

const url = window.location.href;
// get postid from url so we can post to fetch data function
// to fetch post detail
const postId = url.split('=')[1]
console.log(postId);

fetchPost(
    `https://jsonplaceholder.typicode.com/posts?id=${postId}`, 
    '#post-detail-content'
)


// handle go back button

const handleGoBack = () => {
    console.log('go back clicked')
    window.location.href = '/';
}

const goBackBtn = document.querySelector('#go-back-btn')
goBackBtn.onclick = () => handleGoBack()


