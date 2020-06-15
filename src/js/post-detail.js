const navigation = require('./navigation.js');
const fetchPost  = require('./fetch-post.js');

navigation();

console.log('postDetail loaded');

// get current url
const url = window.location.href;
// get postid from url so we can post to fetch data function to fetch post detail
const postId = url.split('=')[1]

// fetch post detail base on the post id
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


