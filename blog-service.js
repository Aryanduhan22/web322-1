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





const fs = require('fs');
const path = require('path');

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'data', fileName), 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

const getPublishedPosts = async () => {
  const posts = await readFile('posts.json');
  return posts.filter(post => post.published === true);
};

const getAllPosts = async () => {
  return await readFile('posts.json');
};

const getAllCategories = async () => {
  return await readFile('categories.json');
};

module.exports = {
  getPublishedPosts,
  getAllPosts,
  getAllCategories
};
