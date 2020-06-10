'use strict';

module.exports = (sequelize, dataTypes) => {
    const variationListing = sequelize.define('variationListing', {
        OriginalAsin: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        OriginalName: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        NewAsin: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        NewName: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
    }, {
        timestamps: false
    });

    return variationListing;
};