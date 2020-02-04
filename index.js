//babel이 최신ES6문법을 변환해 줌
import express from 'express';
// const express = require('express');
const app = express();
const port = 3000;

//호이스팅주의!
const handleProfile = (req, res) => {
  res.send('You are on my profile with nodemon!');
};

const betweenMiddleware1 = (req, res, next) => {
  console.log("I'm between 1");
  next();
};

const betweenMiddleware2 = (req, res, next) => {
  console.log("I'm between 2");
  next();
};

const betweenMiddlewareAll1 = (req, res, next) => {
  console.log("I'm between everywhere 1");
  next();
};

const betweenMiddlewareAll2 = (req, res, next) => {
  console.log("I'm between everywhere 2");
  next();
};

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(betweenMiddlewareAll1); //미들웨어 use한 순서대로 적용! 루팅할 곳 이전에 써 줄것!
app.use(betweenMiddlewareAll2);
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/profile', betweenMiddleware1, betweenMiddleware2, handleProfile);
