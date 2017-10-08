module.exports = function(sequelize, DataTypes) {
    var vidTable = sequelize.define(
      "vidTable", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        video:{
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

    return vidTable;
};