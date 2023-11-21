const { Router } = require("express");
const eventBack = require("E:/ProjetoIHC/Projeto/eventosBack.js");

const router = Router();

router.get("/", eventBack.getEvents);
router.get("/:eventid", eventBack.getEventsById);
router.post("/", eventBack.addEvent);
router.put("/:eventid", eventBack.updateEvent);
router.delete("/:eventid", eventBack.deleteEvent);

module.exports = router;