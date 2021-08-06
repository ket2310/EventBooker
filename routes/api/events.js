const router = require('express').Router();
const { user } = require('./user');

//Get all events
router.get('/', async (req, res) => {
 try{
    const eventsData = await Event.findAll();
     res.status(200).json(eventsData);
    } catch (err) {
    res.status(500).json(err);
}
});



// Get a single events
router.get('/:id', async (req, res) => {
    try {
      const eventsData = await Event.findByPk(req.params.id, {
        include: [{ model: user}]
      });
  
      if (!eventsData) {
        res.status(404).json({ message: 'No events found with this id!' });
        return;
      }
  
      res.status(200).json(eventsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Create an event
router.post('/', async (req, res) => {
    try {
      const eventData = await Event.create(req.body);
      res.status(200).json(eventData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  //DELETE an event
router.delete('/:id', async (req, res) => {
    try{
        const eventData = await Event.destroy({
            where: {
                id: req.params.id
            }
        });
    if(!eventData) {
        res.status(404).json({message:'No events found with that id'})
    return;
    }
    res.status(200).json(eventsData);
    }catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;