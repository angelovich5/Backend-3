module.exports = (sequelize, type) => {
    return sequelize.define('discoduro', {
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