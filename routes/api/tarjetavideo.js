const router = require('express').Router();

const  { TarjetaVideo } = require ('../../db');

router.get('/', async (req, res)=> {
    const tarjetavideo= await TarjetaVideo.findAll();
    res.json(tarjetavideo);
})

router.post('/', async (req,res)=>{
    const tarjetavideo= await TarjetaVideo.create(req.body)
    res.json(tarjetavideo);
})
router.put('/:tarjetavideoId', async (req,res)=>{
    await TarjetaVideo.update(req.body, {
        where: { id: req.params.tarjetavideoId }
    })
    res.json({success: 'se ha modificado'});
})
router.delete('/:tarjetavideoId', async (req,res)=>{
    await TarjetaVideo.destroy({
        where: { id: req.params.tarjetavideoId }
    })
    res.json({ success: 'Se ha borrado'})
})
module.exports = router;