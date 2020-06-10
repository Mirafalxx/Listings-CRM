'use strict';

module.exports = (sequelize, dataTypes) => {
    const forbiddenBrand = sequelize.define('forbiddenBrand', {
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
    return forbiddenBrand;
};