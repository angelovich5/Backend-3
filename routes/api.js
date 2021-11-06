const router= require('express').Router();

const apiDiscoduroRouter = require('./api/discoduro');
const apiMemoriaRamRouter = require('./api/memoriaram');
const apiPlacaMadresRouter = require('./api/placamadres');
const apiProcesadoresRouter = require('./api/procesadores');
const apiTarjetaVideoRouter = require('./api/tarjetavideo');
const apiUserRouter = require('./api/users');
const middlewares = require('./middlewares');

router.use('/discoduro', middlewares.checkToken, apiDiscoduroRouter);
router.use('/memoriaram', middlewares.checkToken, apiMemoriaRamRouter);
router.use('/placamadres', middlewares.checkToken, apiPlacaMadresRouter);
router.use('/procesadores', middlewares.checkToken, apiProcesadoresRouter);
router.use('/tarjetavideo', middlewares.checkToken, apiTarjetaVideoRouter);
router.use('/users', apiUserRouter)



module.exports = router;