
module.exports = (sequelize, DataTypes) =>{

	const conversation = sequelize.define('Conversation',{

		// uid:{
		// 	type:DataTypes.STRING(1234),
		// 	allowNull:false
		// },
		
		// uid:{
		// 	type:DataTypes.UUID,
		// 	defaultValue:DataTypes.UUIDV4
		// },

		userid1:{
			type:DataTypes.STRING(1234),
			allowNull:false,
		},

		userid2:{
			type:DataTypes.STRING(1234),
			allowNull:false,
		}
	})

	return conversation

}


