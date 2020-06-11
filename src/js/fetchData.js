const fetchData = () => {
    console.log('fetch data component loaded!');

    // store it in this scope because we need to reuse it many times
    const app = document.querySelector('#app');

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
        fetch('https://jsonplaceholder.typicode.com/posts')
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

    // Create a list item for each todo
    // and append it to the list
    const generateTodo = (todoData) => {
        todoData.forEach((data) => {
            const li = document.createElement('li');
            li.textContent = data.title;
            list.appendChild(li);
        });
        app.appendChild(list);
    }
}

export { fetchData };