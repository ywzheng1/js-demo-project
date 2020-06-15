const navigation = () => {

    console.log('navigation loaded');

    const navContent = [
        // {
        //     title: 'Most Popular',
        //     link: './src/page/most-popular.html'
        // },
        {
            title: 'Fake Link',
            link: '/'
        },
        {
            title: 'Fake Link 2',
            link: '/'
        },
        {
            title: 'Fake Link 3',
            link: '/'
        }
    ]

    const nav = document.querySelector('#navigation');

    // loop through navContent array and display navigation
    navContent.forEach(content => {
        const aTag = document.createElement('a');
        aTag.textContent = content.title;
        aTag.href = content.link;
        aTag.setAttribute('class', 'nav-link');
        nav.appendChild(aTag);
    })


}

module.exports = navigation;

// export { navigation };