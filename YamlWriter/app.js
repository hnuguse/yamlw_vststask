var tl = require('vso-task-lib');
var yamlwriter = require('@hnuguse/yamlw/yamlw');
var fs = require('fs');

(function () {
    'use strict';
    
    var file = tl.getInput('file', true);
    var set = tl.getInput('set', true);
    var isExternalSet = tl.getInput('external', false) == 'true';

    console.log(`File: ${file} (exists: ${fs.existsSync(file)})`);
    console.log(`Settings: ${set}`);
    console.log(`Use external settings file: ${isExternalSet}`);    

    var result = yamlwriter(file, set, isExternalSet);
    console.log(`Result:\n ${result}`);    
}());