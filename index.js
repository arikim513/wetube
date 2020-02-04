//babel이 최신ES6문법을 변환해 줌
import express from 'express';
// const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.get('/', (req, res) => res.send('Hello World!'));
