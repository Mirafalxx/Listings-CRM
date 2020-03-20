'use strict';

module.exports = (sequelize, dataTypes) => {
    var gluedListing = sequelize.define('gluedListing', {
        OriginallistingID: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        OriginalProductASIN: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        OriginalProductName: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        NewProductASIN: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        NewProductName: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
    }, {
        timestamps: false
    });


    return gluedListing;
};