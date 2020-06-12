import { generatePostCard } from './generate-post-card.js';
import { toggleSpinner } from './toggle-spinner.js';
import { showErrorMessage } from './error-message.js';

const fetchPostList = (api, targetNode) => {
    console.log('fetch data loaded!');

    const fetchPosts = () => {
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
            // remove spinner once we got the data
            .then(() => toggleSpinner(false, targetNode))
            .catch(error => {
                toggleSpinner(false, targetNode);
                showErrorMessage(error, targetNode);
            })
    }

    // fire fetch todo function
    fetchPosts();

    const generatePostCards = (todoData) => {
        todoData.forEach((data) => {
            // pass each post data to this function and generate cards
            generatePostCard(data, targetNode);
        });
    }
}

export { fetchPostList };