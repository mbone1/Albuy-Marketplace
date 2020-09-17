module.exports = function (sequelize, DataTypes) {
    const forSale = sequelize.define("for_sale", {
        album_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        release_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        spotify_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genres: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        }
    });
    return forSale;
};