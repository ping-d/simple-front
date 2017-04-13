requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: './',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        // require.js plugins
        text: '../../lib/requirejsPlugin/requirejs-text/text',
        domReady: '../../lib/requirejsPlugin/requirejs-domready/domReady',
        i18n: '../../lib/requirejsPlugin/requirejs-i18n/i18n',
        json:'../../lib/requirejsPlugin/requirejs-json/json',
        css: '../../lib/requirejsPlugin/require-css/css',
        jquery:"../../lib/jquery-3.1.1",

        router:"../common-component/router/router"

    }
});

var routeMap = [
    {key:"/",value:"page1/page1"},
    {key:"/page2",value:"page2/page2"},
]
// Start the main app logic.
requirejs(['jquery','router'],
    function   ($,router) {
        router.init(".app-container",routeMap);

    });





