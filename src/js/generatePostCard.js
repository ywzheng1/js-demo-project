const generatePostCard = (data) => {
    const content = document.querySelector('#main-content');

    console.log('generatePostCard loaded!')
    console.log(data)

    const div = document.createElement('div');
    div.setAttribute('class', 'post-card');
    div.textContent = data.title;

    content.appendChild(div);
}

export { generatePostCard };