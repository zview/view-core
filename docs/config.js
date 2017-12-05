docute.init({

    // landing: 'loadding.md',  //true loading.html

    home: './site/zh/home.md',

    nav: {
        default: [
            {title: '首页', path: '/'},
            {title: '起步', path: '/start', source: '/site/zh/start.md'},
            {title: '指南', path: '/manual', source: '/site/zh/manual.md'},

            {
                title: '语言',
                type: 'dropdown',
                items: [
                    {title: '中文', path: '/'},
                    {title: 'English', path: '/english', source: '/site/en/home.md'}
                ]
            },
            /*{
                title: '关于',
                type: 'dropdown',
                items: [
                    {type: 'label', title: 'Help'},
                    {type: 'sep'}, // separator
                    {type: 'label', title: 'About'},
                    {type: 'label', title: 'Blog'},
                ]
            }*/
        ],
        english: [
            {title: 'Home', path: '/english', source: '/site/en/home.md'},
            {title: 'Getting start', path: '/english/start', source: '/site/en/start.md'},
            {title: 'Manual', path: '/english/manual', source: '/site/en/manual.md'},

            {
                title: 'Languages',
                type: 'dropdown',
                items: [
                    {title: '中文', path: '/'},
                    {title: 'English', path: '/english', source: '/site/en/home.md'}
                ]
            }
        ]
    },

    repo: 'zview/view',

    marked: {
        smartypants: true
    },

    tocVisibleDepth: 4
});
