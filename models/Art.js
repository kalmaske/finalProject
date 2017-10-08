module.exports = function(sequelize, DataTypes) {
    var artTable = sequelize.define(
      "artTable", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        artImage:{
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
    return artTable;
}