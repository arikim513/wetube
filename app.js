//옛날 문법
// const express = require('express');
//babel이 최신ES6문법을 변환해 줌
import express from 'express';
import morgan from 'morgan'; //logger
import helmet from 'helmet'; //보안
import cookieParcer from 'cookie-parser';
import bodyParcer from 'body-parser';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from './routes';

const app = express();

////미들웨어
app.use(cookieParcer()); //cookie
//form을 다룸.
//우리 서버에게 유저가 보낼 데이터 종류를 알려줌.
//서버가 이해해야 처리하니까.
//보통의 form이라면 옵션으로 .urlencoded
//json이라면 .json 등등
app.use(bodyParcer.urlencoded({ extended: true }));
app.use(bodyParcer.json());
app.use(helmet()); //helmet은 보안
app.use(morgan('dev')); //morgan은 로깅 미들웨어
////미들웨어

////라우터
//반드시 .use로 해야 라우터를 인식함!(라우터 통채로 인식해야 해서..)
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
////라우터

export default app;
