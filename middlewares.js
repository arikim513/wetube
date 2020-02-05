import routes from './routes';

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'Wetube';
  res.locals.routes = routes;
  next(); //안 써주면 다음 미들웨어로 안 넘어감!! 주의!!
};
