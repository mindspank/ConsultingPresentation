/* global SenseSearchResult */
/* global SenseSearchInput */
/* global senseSearch */
var requireconfig = {
    paths: {
        reveal: 'http://localhost:9000/bower_components/reveal.js/js/reveal',
        qsocks: 'http://localhost:9000/node_modules/qsocks/qsocks.bundle',
        config: 'http://localhost:9000/js/config'
    },
    
    baseUrl: 'https://branch.qlik.com/resources'
}

// Stashing global object
var win = this;

require.config(requireconfig);

require(['reveal', 'js/qlik', 'config'], function(Reveal, qlik, config) {
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,

        transition: 'slide', // none/fade/slide/convex/concave/zoom

        dependencies: [
            { src: 'bower_components/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
            { src: 'bower_components/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: 'bower_components/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
            { src: 'bower_components/reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( '[data-html]' ) || !!document.querySelector( 'pre code' ) || !!document.querySelector( '[data-markdown]' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
            { src: 'bower_components/reveal.js/plugin/zoom-js/zoom.js', async: true },
            { src: 'bower_components/reveal.js/plugin/notes/notes.js', async: true },
            { src: 'js/loadhtmlslides.js', condition: function() { return !!document.querySelector( '[data-html]' ); } },
            { src: 'js/slideactions.js'}
        ]
    });
    
    Reveal.addEventListener('ready', function( event ) {

        /**
         * Search slide
         */
        Reveal.addEventListener('search', function() {

            var app = qlik.openApp(config.apps.search, config.qlik);
            app.model.waitForOpen.promise.then(function() {
                
                senseSearch.connectWithCapabilityAPI(app);
                
                var slide = document.querySelector('[data-state=search]');
                var searchinput = new win.SenseSearchInput("searchinput");
                var searchresults = new win.SenseSearchResult("searchresults");

                slide.appendChild(searchinput.element).appendChild(searchresults.element);
                
                var resultOptions = {
                    "fields":[{
                        "dimension": "FullName",
                        "suppressNull": true
                    },{
                        "dimension": "trigram",
                        "suppressNull": false
                    },{
                        "dimension": "Office",
                        "suppressNull": false
                    },{
                        "dimension": "Manager",
                        "suppressNull": false
                    }],
                    "sortOptions": {
                        "FullName": {
                            "name": "A-Z",
                            "order": 1,
                            "field": "FullName",
                            "sortType": "qSortByAscii"
                        }
                    },
                    "defaultSort": "FullName"
                };
                
                var inputOptions = {
                    "searchFields": ["FullName","Trigram","Office","Manager","Country"],
                    "suggestFields": ["FullName","Trigram","Office","Manager","Country"]
                };
            
                searchinput.object.attach(inputOptions);
                searchresults.object.attach(resultOptions);

            });

        });
        
    });
            
})