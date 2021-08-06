const router = require('express').Router();
const { events } = require('./events');

// GET all users
router.get('/', async (req, res) => {
    try {
      const userData = await user.findAll();
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single user
  router.get('/:id', async (req, res) => {
    try {
      const userData = await user.findByPk(req.params.id, {
        // JOIN with travellers, using the Trip through table
        include: [{ model: events}]
      });
  
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a user
  router.post('/', async (req, res) => {
    try {
      const userData = await user.create(req.body);
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a user
  router.delete('/:id', async (req, res) => {
    try {
      const userData = await user.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;