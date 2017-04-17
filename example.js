"use strict";
const nlp = require('./app.js');
nlp.configure({
    api_key : ""
});
nlp.cut("我爱你，我真的十分爱你!",(err,data) => {
    console.log(data)
})