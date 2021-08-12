const router = require("express").Router();
const { Event } = require("../../models");
const withAuth = require("../../utils/auth");

//Get all events
router.get("/", async (req, res) => {
  try {
    const eventsData = await Event.findAll();
    res.status(200).json(eventsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single events
router.get("/:id", async (req, res) => {
  try {
    const eventsData = await Event.findByPk(req.params.id, {
      include: [{ model: user }],
    });

    if (!eventsData) {
      res.status(404).json({ message: "No events found with this id!" });
      return;
    }

    res.status(200).json(eventsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create an event
router.post("/addevent", async (req, res) => {
  try {
    console.log(req.body)
    console.log("Bad request on line 37")
    const newEvent = await Event.create({
      ...req.body,
      name: req.body.name,
      description: req.body.desc,
      time_start: req.body.date,  
    });
    res.status(200).json(newEvent);
    res.render('main')
  } catch (err) {
    res.status(400).json(err);
  }
});

//DELETE an event
router.delete("/:id", async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!eventData) {
      res.status(404).json({ message: "No events found with that id" });
      return;
    }
    res.status(200).json(eventsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
