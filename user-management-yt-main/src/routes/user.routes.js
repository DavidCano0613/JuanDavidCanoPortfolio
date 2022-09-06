import {Router} from 'express'

const userRouter = Router()
 
userRouter.post('/register',async()=>{})
userRouter.post('/login',async()=>{})
userRouter.get('/profile',async()=>{})
userRouter.patch('/update-data',async()=>{})
userRouter.patch('/update-email',async()=>{})
userRouter.patch('/update-password',async()=>{})
userRouter.delete('/unregister',async()=>{})

export default userRouter;