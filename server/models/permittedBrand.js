'use strict';

module.exports = (sequelize, dataTypes) => {
    const permittedBrand = sequelize.define('permittedBrand', {
        Brand: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return permittedBrand;
};