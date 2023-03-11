/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Aryan Duhan Student ID: 148819212 Date: 1st feb 2023
*
*  Online (Cyclic) Link: ________________________________________________________
*
********************************************************************************/ 



var express = require("express");
var app = express();
const fs = require('fs');
app.use(express.static('public')); 
var blog = require("./blog-service.js");
var HTTP_PORT = process.env.PORT || 8080;
const path = require('path');


// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/abou t", (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
    res.send("Hello World<br /><a href='/about'>Go to the about page</a>");
});

// setup another route to listen on /about
app.get("/about", function(req,res){
    res.send("<h3>About</h3>");
});
app.get('/blog', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'posts.json'), 'utf-8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        const posts = JSON.parse(data).filter(post => post.published === true);
        res.send(posts);
      }
    });
  });
  
  app.get('/posts', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'posts.json'), 'utf-8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(JSON.parse(data));
      }
    });
  });
  
  
  app.get('/categories', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'categories.json'), 'utf-8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(JSON.parse(data));
      }
    });
  });

  app.use((req, res) => {
    res.status(404).send('Page Not Found');
  });

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);