'use strict';

module.exports = (sequelize, dataTypes) => {
    const gluedListing = sequelize.define('gluedListing', {
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

    return gluedListing;
};