module.exports = function(sequelize, DataTypes) {
    var writingTable = sequelize.define(
      "writingTable", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },
        blog: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [100000]
        }
    },

    {
        timestamps: false
    });

    return writingTable;
};