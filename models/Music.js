module.exports = function(sequelize, DataTypes) {
    var musicTable = sequelize.define(
      "musicTable", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        track:{
            type:DataTypes.BLOB('long'),
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

    return musicTable;
};