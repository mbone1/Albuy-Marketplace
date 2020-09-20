 module.exports = function(sequelize, DataTypes) {
     const ForSale = sequelize.define("ForSale", {
         albumName: {
             type: DataTypes.STRING,
             defaultValue: 'unknown',
             //  allowNull: false,
         },
         albumCoverM: {
             type: DataTypes.STRING,
             //  allowNull: false,
             defaultValue: 'unknown',
         },
         artist: {
             type: DataTypes.STRING,
             //  allowNull: false,
             defaultValue: 'unknown',
         },
         releaseDate: {
             type: DataTypes.STRING,
             //  allowNull: false,
             defaultValue: 'unknown',
         },
         genres: {
             type: DataTypes.STRING,
             //  allowNull: false,
             defaultValue: 'unknown',
         },
         price: {
             type: DataTypes.STRING,
             //  allowNull: false,
             defaultValue: 'unknown',
         }
     });
     return ForSale;
 };