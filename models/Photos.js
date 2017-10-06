module.exports = function(sequelize, DataTypes) {
    var photoTable = sequelize.define(
      "photoTable", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        Images:{
            type:DataTypes.BLOB('medium'),
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
    return photoTable
};