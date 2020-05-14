'use strict';

module.exports = (sequelize, dataTypes) => {
    const bannedBrand = sequelize.define('bannedBrand', {
        Brand: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        Status: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return bannedBrand;
};