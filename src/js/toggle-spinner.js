const toggleSpinner = (isLoading, targetNode) => {
    // store it in this scope because we need to reuse it many times
    const app = document.querySelector(targetNode);

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

module.exports = toggleSpinner;