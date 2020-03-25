const express = require('express');
const path = require('path');
const http = require('http');
const app= express();

var cors = require('cors');
app.use(cors());
app.get('/', function(req,res) {
 res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/about', function(req,res) {
 res.sendFile(path.join(__dirname + '/about.html'));
});
app.get('/sitemap', function(req,res) {
 res.sendFile(path.join(__dirname + '/sitemap.html'));
});
app.get('/api/products', function(req,res) {
    res.sendFile(path.join(__dirname + '/products.json'));
   });
app.listen(3000, function()
{
    console.log('Example app listening on port 3000?');
}
);