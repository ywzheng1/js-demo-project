const navigation = () => {

    console.log('navigation loaded');

    const navContent = [
        {
            title: 'Link 1',
            link: '1'
        },
        {
            title: 'Link 2',
            link: '//amazon.com'
        },
        {
            title: 'Link 3',
            link: './src/page/post-detail.html'
        }
    ]

    const nav = document.querySelector('#sidebar');

    navContent.forEach(content => {
        const aTag = document.createElement('a');
        aTag.textContent = content.title;
        aTag.href = content.link;
        // aTag.onclick = redirect;
        aTag.setAttribute('class', 'nav-link');
        nav.appendChild(aTag);
    })


}

export { navigation };