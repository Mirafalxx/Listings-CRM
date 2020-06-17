'use strict';

module.exports = (sequelize, dataTypes) => {
    const stats = sequelize.define('stats', {
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        count: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        department: {
            type: dataTypes.STRING(255),
            allowNull: false
        }

    }, {
        timestamps: false
    });
    return stats;
};