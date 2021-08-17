const router = require('express').Router();
const { events } = require('./events');
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(404).json({ message: "Invalid email or password" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(404).json({ message: "Invalid email or password" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "Welcome" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


// GET all Users
router.get('/', async (req, res) => {
    try {
      const UserData = await User.findAll();
      res.status(200).json(UserData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single User
  router.get('/:id', async (req, res) => {
    try {
      const UserData = await User.findByPk(req.params.id, {
        // JOIN with travellers, using the Trip through table
        include: [{ model: events}]
      });
  
      if (!UserData) {
        res.status(404).json({ message: 'No User found with this id!' });
        return;
      }
  
      res.status(200).json(UserData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a User
  router.post('/', async (req, res) => {
    try {
      const UserData = await User.create(req.body);
      res.status(200).json(UserData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a User
  router.delete('/:id', async (req, res) => {
    try {
      const UserData = await User.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!UserData) {
        res.status(404).json({ message: 'No User found with this id!' });
        return;
      }
  
      res.status(200).json(UserData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;