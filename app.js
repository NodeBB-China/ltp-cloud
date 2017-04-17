"use strict";
const queryString = require("query-string");
const request = require("request");
const request_url = "http://api.ltp-cloud.com/analysis/";
let queryform = {
    text : "",
    api_key : "",
    format : "json",
    has_key : "true",
    pattern : "ws"
}
let nlp = {};
nlp.configure = (settings) => {
    queryform.api_key = settings.api_key;
}
nlp.cut = (text,callback) => {
    let form = queryform;
    form.text = text;
    let url = request_url + "?"+ queryString.stringify(form);
    //console.log(url);
    request(url,function (error, response, body) {
        if(error){
            callback(error);
        }
        if(response.statusCode == 200){
            //callback(null,body);
            //console.log(response);
            body = JSON.parse(body);
            body = body[0][0];
            let seg = [];
            let length = body.length;
            for(let i = 0;i < length; i++){
                seg[i] = body[i].cont;
            }
            //console.log(`seg is ${seg}`);
            if(seg.length == 0){
                callback(null,false);
            }else{
                callback(null,seg);
            } 
        }else{
            callback(null,false);
        }
    })
}
module.exports = nlp;