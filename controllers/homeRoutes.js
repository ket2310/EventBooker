const router = require('express').Router();
const { Event, User} = require('../models');
const withAuth = require('../utils/auth');
const path = require('path')

router.get('/', async (req, res) => {
  try {
    // Get all events and JOIN with posterer data
    const eventData = await Event.findAll();


    // Serialize data so the template can read it
    const events = eventData.map((event) =>
      event.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render('homepage', {
      events,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/event/:id',  withAuth, async (req, res) => {
  try {
    console.log('')
    const eventData = await event.findByPk(req.params.id, {
      include: [
        {
          model: Poster,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['comments`']
        }
      ],
    });

    const event = eventData.get({ plain: true });
    console.log(event)
    res.render('event', {
      ...event,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Use withAuth middleware to prevent access to route
// router.get('/dashboard', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const posterData = await Poster.findByPk(req.session.poster_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: event }],
//     });

//     const poster = posterData.get({ plain: true });

//     res.render('dashboard', {
//       ...poster,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});



module.exports = router;
