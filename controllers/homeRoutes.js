const router = require('express').Router();
const { Event, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all eventss and JOIN with user data
    const eventsData = await Events.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const eventss = eventsData.map((events) => events.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      eventss, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/event/:id',  withAuth, async (req, res) => {
//   try {
//     console.log('')
//     const eventData = await event.findByPk(req.params.id, {
//       include: [
//         {
//           model: Poster,
//           attributes: ['name'],
//         },
//         {
//           model: Comment,
//           attributes: ['comments`']
//         }
//       ],
//     });

//     const event = eventData.get({ plain: true });
//     console.log(event)
//     res.render('event', {
//       ...event,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
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

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }

//   res.render('login');
// });

// router.get('/signup' , (req, res) =>{ 
//     res.render('signup')
// })

router.get('/events/:id', async (req, res) => {
  try {
    const eventsData = await Events.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const events = eventsData.get({ plain: true });

    res.render('events', {
      ...events,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Events }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
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

module.exports = router;
