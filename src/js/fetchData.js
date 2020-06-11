import { generatePostCard } from './generatePostCard';

const fetchData = () => {
    console.log('fetch data component loaded!');

    // store it in this scope because we need to reuse it many times
    const app = document.querySelector('#main-content');

    // loading
    const toggleSpinner = (isLoading) => {
        if (isLoading) {
            const div = document.createElement('div');
            // give id because we want to remove this element later on
            div.setAttribute('id', 'spinner');
            div.textContent = 'loading ....';
            app.appendChild(div);
        } else {
            const spinner = document.getElementById('spinner');
            spinner.parentNode.removeChild(spinner);
        }
    }

    // when fetch fails, show some error message
    const showErrorMessage = () => {
        const div = document.createElement('div');
        div.textContent = 'Something went wrong, please try again later';
        app.appendChild(div);
    }

    const fetchTodo = () => {
        toggleSpinner(true);

        // fetch todo list from this end point
        /**
         * different routes:
         * GET /posts?_page=7
         * GET /posts?_page=7&_limit=20
         * GET /posts?_start=20&_end=30
         * GET /posts/1/comments?_start=20&_end=30
         * GET /posts/1/comments?_start=20&_limit=10
         */
        fetch('https://jsonplaceholder.typicode.com/posts?_page=0')
            .then(response => response.json())
            .then(data => generateTodo(data))
            // remove spinner once we got the data
            .then(() => toggleSpinner(false))
            .catch(error => {
                toggleSpinner(false);
                showErrorMessage();
            })
    }

    // fire fetch todo function
    fetchTodo();

    // Create an unordered list
    const list = document.createElement('ul');

    const generateTodo = (todoData) => {
        todoData.forEach((data) => {
            // pass each post data to this function and generate cards
            generatePostCard(data);
        });
    }
}

export { fetchData };