require.config({
    paths: {
        reveal: '../bower_components/reveal.js/js/reveal'
    }
})

require(['reveal'], function(Reveal) {
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
            { src: 'js/loadhtmlslides.js', condition: function() { return !!document.querySelector( '[data-html]' ); } }
        ]
    });
})