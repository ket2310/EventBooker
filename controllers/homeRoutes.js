const router = require('express').Router();
const { Event, User} = require('../models');
const withAuth = require('../utils/auth');
const path = require('path')

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all events and JOIN with posterer data
    const eventData = await Event.findAll();
   // Serialize data so the template can read it
    const events = eventData.map((event) =>
      event.get({ plain: true })
    );
    // Pass serialized data and session flag into template
    res.render('localevents', {
      events,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/findevents', withAuth, async (req, res) => {
  try {
    res.render('localevents')
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    const eventData = await Event.findAll({
      where:{
        user_id: req.session.user_id,
      },
    })
      // Serialize data so the template can read it
      const events = eventData.map((event) =>
      event.get({ plain: true })
    );
    res.render('profile', {
      events,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/signup' , (req, res) =>{ 
//     res.render('signup')
// })




router.get('/event/:id',  withAuth, async (req, res) => {
  try {
    console.log('')
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const event = eventData.get({ plain: true });
    console.log(event)
    res.render('events', {
      ...event,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;