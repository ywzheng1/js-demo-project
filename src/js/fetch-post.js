const generatePostDetail = require('./generate-post-detail.js');
const toggleSpinner      = require('./toggle-spinner.js');
const showErrorMessage   = require('./error-message.js');

const fetchPost = (api, targetNode) => {

    console.log('fetch data loaded!');

    const fetchPostDetail = () => {
        // while fetch post started, display a loading message
        toggleSpinner(true, targetNode);

        // some requests was blocked by the reason:
        // No 'Access-Control-Allow-Origin' header is present on the requested resource
        // one thing that will work: 
        // if you send your request through a CORS proxy
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        fetch(proxyurl + api)
            .then(response => response.json())
            .then(data => generatePostDetail(data, targetNode))
            // remove loading message once we got the data
            .then(() => toggleSpinner(false, targetNode))
            .catch(error => {
                // remove loading message then display error message
                toggleSpinner(false);
                showErrorMessage(error, targetNode);
            })
    }

    // fire fetch post function
    fetchPostDetail();

}

module.exports = fetchPost;