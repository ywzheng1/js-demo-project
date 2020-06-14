const showErrorMessage = (error, targetNode) => {
    const app = document.querySelector(targetNode);
    const div = document.createElement('div');
    div.textContent = 'Something went wrong, please try again later. Error: ' + error;
    app.appendChild(div);
}

module.exports = showErrorMessage;