
import express from 'express';
import { register, update,getUser, login, getUserById, deleteUser} from '../controls/user.mjs'


//const { register, update, deleteUser,getUser}= controls

 const Router = express.Router();
 



Router.get('/',getUser)

Router.get('/:user_id',getUserById)

Router.post('/auth/login',login)
Router.post('/auth/register',register)

Router.delete('/:user_id',deleteUser)

Router.put('/:user_id',update)





export default Router;
