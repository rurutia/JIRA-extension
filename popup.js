$(document).ready(function(){
    $('#cpf-local').click(function() {
        chrome.tabs.create({url: 'http://localhost/udr'});
        // chrome.tabs.executeScript(null, {file: "content_script.js"});
    });

    $('#cpf-borabora').click(function() {
        chrome.tabs.create({url: 'https://10.64.33.101/udr'});
    });

    $('#jasper-local').click(function() {
        chrome.tabs.create({url: 'http://localhost:8180/jasperserver/login.html'});
    });

    $('#jasper-borabora').click(function() {
        chrome.tabs.create({url: 'http://10.64.33.101:8060/jasperserver/login.html'});
    });

    $('#wiki-rest-api-31').click(function() {
        chrome.tabs.create({url: 'http://im-wiki.objectconsulting.com.au:8080/display/31doc/CPF+3.1+REST+API+Summary'});
    });

    $('#wiki-rest-api-33').click(function() {
        chrome.tabs.create({url: 'http://im-wiki.objectconsulting.com.au:8080/display/33Doc/CPF+3.3+Patient+Record+API'});
    });


    $('#wiki-dev-env-setup').click(function() {
        chrome.tabs.create({url: 'http://im-wiki.objectconsulting.com.au:8080/display/devdoc/Developer+Eclipse+Setup+-+JBoss+Edition+(CPF+3.0+and+beyond)'});
    });

    $('#frame-name').click(function() {
        var btn = $('#frame-name');
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          btn.html(btn.html() === 'disable' ? 'enable' : 'disable');
          console.log(btn.html());
          chrome.tabs.sendMessage(tabs[0].id, {frameName: btn.html()});
        });
    });
    // chrome.tabs.query({'active': true}, function(tabs) {
    //   chrome.tabs.update(tabs[0].id, {url: 'http://localhost:8080/angular-note/'});
    // });

    // $('body').fadeOut('slow', 'linear', function() {
    //     window.close();
    // });
});
