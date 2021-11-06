const router = require('express').Router();

const  { MemoriaRam } = require ('../../db');

router.get('/', async (req, res)=> {
    const memoriaram= await MemoriaRam.findAll();
    res.json(memoriaram);
})

router.post('/', async (req,res)=>{
    const memoriaram= await MemoriaRam.create(req.body)
    res.json(memoriaram);
})
router.put('/:memoriaramId', async (req,res)=>{
    await MemoriaRam.update(req.body, {
        where: { id: req.params.memoriaramId }
    })
    res.json({success: 'se ha modificado'});
})
router.delete('/:memoriaramId', async (req,res)=>{
    await MemoriaRam.destroy({
        where: { id: req.params.memoriaramId }
    })
    res.json({ success: 'Se ha borrado'})
})
module.exports = router;