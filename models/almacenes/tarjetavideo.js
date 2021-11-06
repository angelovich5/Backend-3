module.exports = (sequelize, type) => {
    return sequelize.define('tarjetavideo',{
        id: {
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        Mark: type.STRING,
        Name: type.STRING,
        Amount: type.INTEGER,
        Charact: type.STRING
    })
}