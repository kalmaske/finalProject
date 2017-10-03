var photoTable = sequelize.define("photoTable", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        Images:{
            type:DataType.MEDIUMBLOB,
            allowNull:false,

        },
        caption: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [1]
        }
    },

    {
        timestamps: false
    });