var musicTable = sequelize.define("musicTable", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        track:{
            type:DataType.LONGBLOB,
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