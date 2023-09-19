const { Sequelize, DataTypes } = require('sequelize')
const config = require('./config/config.js')
// Load Sequelize Config
const sequelize = new Sequelize(config)


const db = {}

db.sequelize = sequelize
db.DataTypes = DataTypes

// All Models 

db.User = require("./UserModel/UserModel.js")(sequelize,DataTypes)
db.Messages = require("./ChatModel/MessageModel.js")(sequelize,DataTypes)
db.Conversations = require("./ChatModel/ConversationModel.js")(sequelize,DataTypes)
db.Friend = require("./UserModel/FriendModel.js")(sequelize,DataTypes)
db.Posts = require("./PostModel/PostModel.js")(sequelize,DataTypes)
db.Comments = require("./PostModel/CommentModel.js")(sequelize,DataTypes)
db.PostReaction = require("./PostModel/PostReactionModel.js")(sequelize,DataTypes)
db.Story = require("./OtherModels/StoryModel.js")(sequelize,DataTypes)
db.Events = require("./OtherModels/EventModel.js")(sequelize,DataTypes)
db.Notification = require("./UserModel/NotificationModel.js")(sequelize,DataTypes)
db.passwordReset = require("./UserModel/passwordResetModel.js")(sequelize,DataTypes)
//  ============ All Models Relationship ============


//  User -x- Friends
db.User.hasMany(db.Friend)
db.Friend.belongsTo(db.User)
  
//  User -x- Conversations
db.User.hasMany(db.Conversations)
db.Conversations.belongsTo(db.User,{as:'user1'})
db.Conversations.belongsTo(db.User,{as:'user2'})


// Conversation -x- Messages
db.Conversations.hasMany(db.Messages)
db.Messages.belongsTo(db.Conversations)

//  User -x- Posts
db.User.hasMany(db.Posts)
db.Posts.belongsTo(db.User)

// User -x- Stories
db.User.hasMany(db.Story)
db.Story.belongsTo(db.User)

//  User -x- Events
db.User.hasMany(db.Events)
db.Events.belongsTo(db.User)

//  User -x- Notifictions
// db.User.hasMany(db.Notification)
// db.Notification.belongsTo(db.User)

//  User -x- Reset Password
db.User.hasOne(db.passwordReset)
db.passwordReset.belongsTo(db.User)

//  Post -x- Comments
db.Posts.hasMany(db.Comments)
db.Comments.belongsTo(db.Posts)

// Post -x- Reactions
db.Posts.hasMany(db.PostReaction)
db.PostReaction.belongsTo(db.Posts)




module.exports = db

require('./seeds.js')

