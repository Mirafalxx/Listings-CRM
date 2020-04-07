'use strict';

module.exports = (sequelize, dataTypes) => {
    var PartnersListing = sequelize.define('PartnersListing', {
        listingID: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ProductASIN: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        ProductName: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        Partner: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return PartnersListing;
};