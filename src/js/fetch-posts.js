const generatePostCard = require('./generate-post-card.js');
const toggleSpinner    = require('./toggle-spinner.js');
const showErrorMessage = require('./error-message.js');

const fetchPostList = (api, targetNode) => {
    console.log('fetch data loaded!');

    const fetchPosts = () => {
        // display loading message when fetch function started
        toggleSpinner(true, targetNode);

        // these endpoints are availabel to fetch posts
        /**
         * different routes:
         * GET /posts?_page=7
         * GET /posts?_page=7&_limit=20
         * GET /posts?_start=20&_end=30
         * GET /posts/1/comments?_start=20&_end=30
         * GET /posts/1/comments?_start=20&_limit=10
         */
        
        fetch(api)
            .then(response => response.json())
            .then(data => generatePostCards(data))
            // remove loading message once we got the data
            .then(() => toggleSpinner(false, targetNode))
            .catch(error => {
                // remove loading message and display error message
                toggleSpinner(false, targetNode);
                showErrorMessage(error, targetNode);
            })
    }

    // fire fetch posts function
    fetchPosts();

    // generate post cards list
    const generatePostCards = (posts) => {
        // call generatePostCard function on each post
        // to generate cards
        posts.forEach((post) => {
            // pass each post data to this function and generate cards
            generatePostCard(post, targetNode);
        });
    }
}

module.exports = fetchPostList;