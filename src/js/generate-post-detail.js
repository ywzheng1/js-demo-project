const generatePostDetail = (data, targetNode) => {
    console.log('generatePostDetail fired!')
    console.log(data[0])

    const content = document.querySelector(targetNode);

    // create title
    const title = document.createElement('h1');
    title.textContent = data[0].title;
    title.setAttribute('class', 'post-detail-title');
    content.appendChild(title);

    // create user
    const userElement = document.createElement('p');
    userElement.textContent = `User ID: ${data[0].id}`;
    userElement.setAttribute('class', 'post-detail-author-id');
    content.appendChild(userElement);

    // create detail
    const detailElement = document.createElement('p');
    detailElement.setAttribute('key', data[0].id)
    detailElement.textContent = data[0].body;
    detailElement.setAttribute('class', 'post-detail-body');
    content.appendChild(detailElement);

}

module.exports = generatePostDetail;