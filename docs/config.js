docute.init({

    // landing: 'loadding.md',  //true loading.html

    home: 'site/zh/home.md',

    nav: {
        default: [
            { title: '首页', path: '/' },
            { title: '起步', path: '/start', source: 'site/zh/start.md' },
            { title: '指南', path: '/manual', source: 'site/zh/manual.md' },

            {
                title: '语言',
                type: 'dropdown',
                items: [
                    { title: '简体中文', path: '/' },
                    { title: '繁体中文', path: '/' },
                    { type: 'sep' },
                    { title: 'English', path: '/english', source: 'site/en/home.md' },
                ]
            },
        ],
        english: [
            { title: 'Home', path: '/english', source: 'site/en/home.md' },
            { title: 'Getting start', path: '/english/start', source: 'site/en/start.md' },
            { title: 'Manual', path: '/english/manual', source: 'site/en/manual.md' },

            {
                title: 'Languages',
                type: 'dropdown',
                items: [
                    { title: '简体中文', path: '/' },
                    { title: '繁体中文', path: '/' },
                    { type: 'sep' },
                    { title: 'English', path: '/english', source: 'site/en/home.md' }
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
