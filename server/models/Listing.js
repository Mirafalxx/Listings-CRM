'use strict';

module.exports = (sequelize, dataTypes) => {
    var Listing = sequelize.define('Listing', {
        // listingID: {
        //     type: dataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        ProductASIN: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        ProductName: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        Brand: {
            type: dataTypes.STRING(255)
        },
        Partner: {
            type: dataTypes.STRING(255)
        },
    }, {
        timestamps: false
    });

    // Listing.associate = function (models) {
    //     models.Listing.hasMany(models.User);
    // };
    return Listing;
};












































// module.exports = (sequelize, dataTypes) => {
//     const Listing = sequelize.define('Listing', {
//         Product_ASIN: {
//             type: dataTypes.STRING(255),
//             allowNull: false
//         },
//         Product_name: {
//             type: dataTypes.STRING(255),
//             allowNull: false
//         },
//         Product_brand: {
//             type: dataTypes.STRING(255),
//             allowNull: false
//         },
//         Product_partner: {
//             type: dataTypes.STRING(255),
//             allowNull: false
//         }
//     });
//     return Listing;
// };



























































































// module.exports = (sequelize, dataTypes) => {
//     return (Listing = sequelize.define("Listing", {
//         Product_ASIN: {
//             type: dataTypes.STRING(255),
//             allowNull: false
//         },
//         Product_name: {
//             type: dataTypes.STRING(255),
//             allowNull: false
//         },
//         Product_brand: {
//             type: dataTypes.STRING(255),
//             allowNull: false
//         },
//         Product_partner: {
//             type: dataTypes.STRING(255),
//             allowNull: false
//         }
//     }));
// };