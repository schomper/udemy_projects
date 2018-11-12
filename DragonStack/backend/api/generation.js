/**
 * API for generations
 */
const {Router} = require('express');

const router = new Router();

/** 
 * Get the latest generation
 */
router.get('/', (req, res) => {
    res.json({ generation: req.app.locals.engine.generation });
});

module.exports = router;