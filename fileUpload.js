"use strict";
var formidable = require('formidable');

/*需求大厅详情页*/
exports.uploadFiles = function (req, res,next) {
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';        //设置编辑
    form.uploadDir = "D:/BaiduYunDownload/ZN_JZ/upload"; //设置上传目录
    form.keepExtensions = true;     //保留后缀

    form.parse(req, function(err, fields, files) {
        if(err){
            res.writeHead(500);
            res.end(JSON.stringify({status:false,info:err}));
        }else{
            res.writeHead(200);
            res.write(JSON.stringify({status:true,info:files.file}));
            res.end();
        }
    });
};