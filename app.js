//옛날 문법
// const express = require('express');
//babel이 최신ES6문법을 변환해 줌
import express from 'express';
import morgan from 'morgan'; //logger
import helmet from 'helmet'; //보안
import cookieParcer from 'cookie-parser'; //사용자 인증같은 곳에서 쿠키검사
//bodyParcer덕분에 포스트의 경우에도 req.body를 콘솔에서 볼 수 있다.
import bodyParcer from 'body-parser'; //사용자가 웹사이트로 전달하는 정보들을 검사. request정보에서 form이나 json 형태로 된 body를 검사
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from './routes';
import { localsMiddleware } from './middlewares';

const app = express();

////미들웨어
//// 미들웨들은 순서대로 읽히고 적용되므로 순서가 매우매우 중요!!
app.use(helmet()); //helmet은 보안
app.set('view engine', 'pug'); // app settings
app.use(cookieParcer()); //cookie
//form을 다룸.
//우리 서버에게 유저가 보낼 데이터 종류를 알려줌.
//서버가 이해해야 처리하니까.
//보통의 form이라면 옵션으로 .urlencoded
//json이라면 .json 등등
app.use(bodyParcer.urlencoded({ extended: true }));
app.use(bodyParcer.json());
app.use(morgan('dev')); //morgan은 로깅 미들웨어

app.use(localsMiddleware);

////라우터
//반드시 .use로 해야 라우터를 인식함!(라우터 통채로 인식해야 해서..)
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
////라우터
////미들웨어

export default app;
