const express =require('express')
const router = express.Router()

const UserRoute= require('./api/Routes/UserRoute')
const ChatRoute= require('./api/Routes/ChatRoute')
const AuthRoute= require('./api/Routes/AuthRoute.js')
const PostRoute= require('./api/Routes/PostRoute.js')
const MessageRoute= require('./api/Routes/MessageRoute.js')
const UploadRoute= require('./api/Routes/UploadRoute')
const FriendRoute= require('./api/Routes/FriendRoute')
const StoryRoute= require('./api/Routes/StoryRoute.js')
const EventRoute= require('./api/Routes/EventRoute.js')
const NotificationRoute= require('./api/Routes/NotificationRoute.js')


router.use('/auth',AuthRoute)
router.use('/post',PostRoute)
router.use('/chat',ChatRoute)
router.use('/user',UserRoute)  
router.use('/message',MessageRoute) 
router.use('/upload',UploadRoute)
router.use('/friend',FriendRoute)
router.use('/story',StoryRoute)
router.use('/event',EventRoute) 
router.use('/notification',NotificationRoute) 


module.exports = router