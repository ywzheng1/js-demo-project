import { fetchData } from './fetch-data.js';

console.log('postDetail loaded');

const url = window.location.href;
// get postid from url so we can post to fetch data function
// to fetch post detail
const postId = url.split('=')[1]
console.log(postId);

fetchData(
    `https://jsonplaceholder.typicode.com/posts?id=${postId}`, 
    '#post-detail-content'
)
