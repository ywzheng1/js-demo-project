// import { generatePostDetail } from './generate-post-detail.js';
// import { toggleSpinner } from './toggle-spinner.js';
// import { showErrorMessage } from './error-message.js';

const generatePostDetail = require('./generate-post-detail.js');
const toggleSpinner = require('./toggle-spinner.js');
const showErrorMessage = require('./error-message.js');

const fetchPost = (api, targetNode) => {
    console.log('fetch data loaded!');

    const fetchPostDetail = () => {
        toggleSpinner(true, targetNode);

        // some requests was blocked by the reason:
        // No 'Access-Control-Allow-Origin' header is present on the requested resource
        // one thing that will work: 
        // if you send your request through a CORS proxy
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        fetch(proxyurl + api)
            .then(response => response.json())
            .then(data => generatePostDetail(data, targetNode))
            // remove spinner once we got the data
            .then(() => toggleSpinner(false, targetNode))
            .catch(error => {
                toggleSpinner(false);
                showErrorMessage(error, targetNode);
            })
    }

    // fire fetch todo function
    fetchPostDetail();

}

module.exports = fetchPost;