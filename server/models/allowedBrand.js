'use strict';

module.exports = (sequelize, dataTypes) => {
    const allowedBrand = sequelize.define('allowedBrand', {
        Brand: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return allowedBrand;
};