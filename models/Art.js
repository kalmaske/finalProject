const Sequelize = require('sequelize');
const sequelize = new Sequelize('media_db', 'root', 'Newchapter_2017');

var artTable = sequelize.define("artTable", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        artImage:{
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

    