const router = require('express').Router();

const  { PlacaMadres } = require ('../../db');

router.get('/', async (req, res)=> {
    const placamadres= await PlacaMadres.findAll();
    res.json(placamadres);
})

router.post('/', async (req,res)=>{
    const placamadres= await PlacaMadres.create(req.body)
    res.json(placamadres);
})
router.put('/:placamadresId', async (req,res)=>{
    await PlacaMadres.update(req.body, {
        where: { id: req.params.placamadresId }
    })
    res.json({success: 'se ha modificado'});
})
router.delete('/:placamadresId', async (req,res)=>{
    await PlacaMadres.destroy({
        where: { id: req.params.placamadresId }
    })
    res.json({ success: 'Se ha borrado'})
})
module.exports = router;