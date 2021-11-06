const router = require('express').Router();

const  { Discoduro } = require ('../../db');

router.get('/', async (req, res)=> {
    const discoduro= await Discoduro.findAll();
    res.json(discoduro);
})

router.post('/', async (req,res)=>{
    const discoduro= await Discoduro.create(req.body)
    res.json(discoduro);
})
router.put('/:discoduroId', async (req,res)=>{
    await Discoduro.update(req.body, {
        where: { id: req.params.discoduroId }
    })
    res.json({success: 'se ha modificado'});
})
router.delete('/:discoduroId', async (req,res)=>{
    await Discoduro.destroy({
        where: { id: req.params.discoduroId }
    })
    res.json({ success: 'Se ha borrado'})
})
module.exports = router;