'use strict';
module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        created: {
            type: dataTypes.DATE,
            defaultValue: dataTypes.NOW
        }
    }, {
        timestamps: false
    });

    return User;
};