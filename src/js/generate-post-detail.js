const generatePostDetail = (data, targetNode) => {
    console.log('generatePostDetail fired!')
    console.log(data[0])

    const content = document.querySelector(targetNode);

    // title
    const title = document.createElement('h2');
    title.setAttribute('class', 'post-card');
    title.textContent = `Title: ${data[0].title}`;
    content.appendChild(title);

    // user
    const userElement = document.createElement('p');
    userElement.setAttribute('class', 'post-card');
    userElement.textContent = `User ID: ${data[0].userId}`;
    content.appendChild(userElement);

    // detail
    const detailElement = document.createElement('p');
    detailElement.setAttribute('class', 'post-card');
    detailElement.setAttribute('key', data[0].id)
    detailElement.textContent = data[0].body;
    content.appendChild(detailElement);

}

export { generatePostDetail };