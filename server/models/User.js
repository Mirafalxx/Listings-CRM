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
        role: {
            type: dataTypes.STRING,
        },
        department: {
            type: dataTypes.STRING,
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