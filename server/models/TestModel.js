'use strict';

module.exports = (sequelize, dataTypes) => {
    var TestModel = sequelize.define('TestModel', {

        ProductASIN: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
    }, {
        timestamps: false
    });

    // Listing.associate = function (models) {
    //     models.Listing.hasMany(models.User);
    // };
    return TestModel;
};