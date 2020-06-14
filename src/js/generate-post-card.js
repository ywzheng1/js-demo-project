const generatePostCard = (data, targetNode) => {
    console.log('generatePostCard fired!')
    console.log(data)

    const content = document.querySelector(targetNode);

    
    const div = document.createElement('div');
    div.setAttribute('class', 'post-card');
    div.setAttribute('key', data.id)
    // div.textContent = data.title;
    
    const markUp = `
        <div class='post-card-image'></div>
        <div class='post-card-content'>
            <p>${data.title}</p>
            <a>View Detail</a>
        </div>
    `
    div.innerHTML = markUp;

    const openCard = (id) => {
        // redirect page to post-detail.html
        window.location.href = `./page/post-detail.html?id=${id}`;
    }
    // Using callback on 'onclick' event 
    // to have prevent function fired on page load
    div.onclick = () => openCard(data.id)

    content.appendChild(div);
}

module.exports = generatePostCard;