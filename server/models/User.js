'use strict';

module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    userID: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    login: {
      type: dataTypes.STRING(120),
      allowNull: false
    },
    password: {
      type: dataTypes.STRING(120),
      allowNull: false
    },
    created: {
      type: dataTypes.DATE,
      defaultValue: sequelize.NOW
    }

  }, {
    timestamps: false

  });
  User.associate = function (models) {
    models.User.belongsTo(models.Listing, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: true
      }
    });
  };
  return User;
};







































// 'use strict';
// module.exports = (sequelize, dataTypes) => {
//   const User = sequelize.define('User', {
//     login: {
//       type: dataTypes.STRING(255),
//       allowNull: false
//     },
//     password: {
//       type: dataTypes.STRING(255),
//       allowNull: false
//     },
//     created: {
//       type: dataTypes.DATE,
//       defaultValue: sequelize.NOW
//     }

//   }, {
//     timestamps: false
//   });



//   return User;
// };






















// module.exports = (sequelize, dataTypes) => {
//   return (User = sequelize.define(
//     "User", {
//       login: {
//         type: dataTypes.STRING(255),
//         allowNull: false
//       },
//       password: {
//         type: dataTypes.STRING(255),
//         allowNull: false
//       },
//       created: {
//         type: dataTypes.DATE,
//         defaultValue: sequelize.NOW
//       }
//     }, {
//       timestamps: false
//     }
//   ));
// };





















// module.exports = (sequelize, dataTypes) => {
//   const Users = sequelize.define(
//     "Users",
//     {
//       email: {
//         type: dataTypes.STRING(255),
//         allowNull: false
//       },
//       password: {
//         type: dataTypes.STRING(255),
//         allowNull: false
//       },
//       created: {
//         type: dataTypes.DATE,
//         defaultValue: sequelize.NOW
//       }
//     },
//     {
//       timestamps: false
//     }
//   );
//   Users.beforeSave((user, options) => {
//     if (user.changed("password")) {
//       user.password = bcrypt.hashSync(
//         user.password,
//         bcrypt.genSaltSync(10),
//         null
//       );
//     }
//   });
//   Users.prototype.comparePassword = function(passw, cb) {
//     bcrypt.compare(passw, this.password, function(err, isMatch) {
//       if (err) {
//         return cb(err);
//       }
//       cb(null, isMatch);
//     });
//   };
//   URLSearchParams.associate = function(models) {
//     // associations can be defined here
//   };
//   return Users;
// };