const navigation = () => {
    console.log('navigation loaded');
    const navContent = [
        {
            title: 'Link 1',
            link: 'google.com'
        },
        {
            title: 'Link 2',
            link: 'amazon.com'
        }
    ]

    const nav = document.querySelector('#sidebar');

    navContent.forEach(content => {
        const aTag = document.createElement('a');
        aTag.textContent = content.title;
        aTag.href = content.link;
        aTag.setAttribute('class', 'nav-link');
        nav.appendChild(aTag);
    })
}

export { navigation };