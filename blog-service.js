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
