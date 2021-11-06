const router = require('express').Router();

const  { Procesadores } = require ('../../db');

router.get('/', async (req, res)=> {
    const procesadores= await Procesadores.findAll();
    res.json(procesadores);
})

router.post('/', async (req,res)=>{
    const procesadores= await Procesadores.create(req.body)
    res.json(procesadores);
})
router.put('/:procesadoresId', async (req,res)=>{
    await Procesadores.update(req.body, {
        where: { id: req.params.procesadoresId }
    })
    res.json({success: 'se ha modificado'});
})
router.delete('/:procesadoresId', async (req,res)=>{
    await Procesadores.destroy({
        where: { id: req.params.procesadoresId }
    })
    res.json({ success: 'Se ha borrado'})
})
module.exports = router;