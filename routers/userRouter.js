import express from 'express';
import routes from '../routes';
import { changePassword, editProfile, userDetail, users } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

//default는 파일!!!통채로 export하겠다는 의미.
//default있으면 import쪽에서 {}없이 그래로 변수명 사용.
//default없으면 그 변수 딱 하나만 export하겠다는 의미.
//default없으면 import쪽에서 {변수명(export해준 것만 가능)} 해주어야 함!
export default userRouter;
