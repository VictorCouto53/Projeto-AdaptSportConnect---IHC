const getEvents = "SELECT * FROM event";
const getEventByName = "SELECT * FROM event WHERE nomeevento = $1";
const getEventByLocal = "SELECT * FROM event WHERE local = $1";
const getEventByAcess = "SELECT * FROM event WHERE acessibilidade = $1";
const getEventById = "SELECT * FROM event WHERE eventid = $1";
const addEvent = "INSERT INTO event (nomeevento, descricao, local, acessibilidade, eventid) VALUES ($1, $2, $3, $4, $5)";
const deleteEvent = "DELETE FROM event WHERE eventid = $1";
const updateEvent = "UPDATE event SET nomeevento = $1, descricao = $2, local = $3, acessibilidade = $4 WHERE eventid = $5";


module.exports = {
    getEvents,
    getEventByName,
    getEventByLocal,
    getEventByAcess,
    getEventById,
    addEvent,
    deleteEvent,
    updateEvent,
}