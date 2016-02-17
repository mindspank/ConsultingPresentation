/* global Reveal */
'use strict';

var config = {
	host: 'localhost',
	prefix: '/',
	port: 4848,
	isSecure: false
};
window.require.config({
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
});

Reveal.addEventListener('testslide', function() {
    require(["js/qlik"], function ( qlik ) {
        var app = qlik.openApp('TestScript.qvf', config);
        app.getObject('mashup','kEFjgJ');
    });
});

define([''], function() {
    
})