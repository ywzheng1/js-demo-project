const generatePostCard = (data, targetNode) => {
    console.log('generatePostCard fired!')
    console.log(data)

    const content = document.querySelector(targetNode);

    const div = document.createElement('div');
    div.setAttribute('class', 'post-card');
    div.setAttribute('key', data.id)

    const openCard = (id) => {
        // redirect page to post-detail.html
        window.location.href = `./src/page/post-detail.html?id=${id}`;
    }
    // Using callback on 'onclick' event 
    // to have prevent function fired on page load
    div.onclick = () => openCard(data.id)

    div.textContent = data.title;

    content.appendChild(div);
}

export { generatePostCard };