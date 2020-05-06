'use strict';

module.exports = (sequelize, dataTypes) => {
    const managerListing = sequelize.define('managerListing', {
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
        Problem: {
            type: dataTypes.STRING(255),
        },
        Partner: {
            type: dataTypes.STRING(255),
        },
    }, {
        timestamps: false
    });

    return managerListing;
};