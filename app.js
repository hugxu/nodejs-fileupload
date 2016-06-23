(function () {
    "use strict";
    var express = require('express'),
        bodyParser = require('body-parser'),
        app = express(),
        fileUpload = require("./server/fileUpload");

    app.use(bodyParser());
    app.use(express.static(__dirname + '/web'));// {maxAge: 31557600000}
    app.engine('html', require('ejs').renderFile);

    app.post('/api/upload', fileUpload.uploadFiles);//文件上传

    //create server
    app.listen(7070, function () {

    });
})();

