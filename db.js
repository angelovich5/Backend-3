const Sequelize = require ('sequelize');

const ProcesadorAlm= require ('./models/almacenes/procesadores');
const PlacaMadreAlm= require ('./models/almacenes/placamadres');
const MemoriaRamAlm= require ('./models/almacenes/memoriaram');
const DiscoduroAlm= require ('./models/almacenes/discoduro');
const TarjetaVideoAlm= require ('./models/almacenes/tarjetavideo');
const UserModel = require('./models/users');

const sequelize = new Sequelize('Yo2XnypAgH','Yo2XnypAgH','7ioK7CNZOF', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const Procesadores = ProcesadorAlm(sequelize, Sequelize);
const PlacaMadres = PlacaMadreAlm(sequelize, Sequelize);
const MemoriaRam = MemoriaRamAlm(sequelize, Sequelize);
const Discoduro = DiscoduroAlm(sequelize, Sequelize);
const TarjetaVideo = TarjetaVideoAlm(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({force:false})
.then(()=> {
    console.log('Tablas sincronizadas')
});

module.exports= {
    Procesadores,
    PlacaMadres,
    MemoriaRam,
    Discoduro,
    TarjetaVideo,
    User
};