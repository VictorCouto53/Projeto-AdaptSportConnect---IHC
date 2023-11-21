const pool = require("E:/ProjetoIHC/Projeto/db.js");
const queries = require("./queries.js");

const getEvents = (req, res) => {
    pool.query(queries.getEvents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const getEventsById = (req, res) => {
    const id = parseInt(req.params.eventid);
    pool.query(queries.getEventById, [id], (error, results) => {
        if (error) {
            res.status(500).send('Erro interno do servidor');
            return;
        };

        if (results.rows.length === 0) {
            res.status(404).send('Evento não encontrado');
            return;
        }

        res.status(200).json(results.rows);
    })
}

const getEventsByName = (req, res) => {
    const eventName = req.params.nomeevento;
    pool.query(queries.getEventByName, [eventName], (error, results) => {
        if (error) {
            res.status(500).send('servidor');
            return;
        };

        if (results.rows.length === 0) {
            res.status(404).send('Evento não encontrado');
            return;
        }
        res.status(200).json(results.rows);
    })
}

const getEventsByLocal = (req, res) => {
    const eventLocal = req.params.local;
    pool.query(queries.getEventByLocal, [eventLocal], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getEventsByAcess = (req, res) => {
    const eventAcess = req.params.acessibilidade;
    pool.query(queries.getEventByAcess, [eventAcess], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addEvent = (req, res) => {
    const { nomeevento, descricao, local, acessibilidade, eventid } = req.body;

    pool.query(queries.getEventById, [eventid], (error, results) => {
        if (results.rows) {
            res.send("Evento já existe");
        }
    })

    pool.query(queries.addEvent, [nomeevento, descricao, local, acessibilidade, eventid], (error, results) => {
        if (error) throw error;
        res.status(201).send("Evento adicionado");
    })
}

const deleteEvent = (req, res) => {
    const eventid = parseInt(req.params.eventid);
    pool.query(queries.getEventById, [eventid], (error, results) => {
        const noEventFound = !results.rows.length;
        if (noEventFound)
            res.send("Evento não existe")
        pool.query(queries.deleteEvent, [eventid], (error, results) => {
            if (error) throw error;
            res.status(200).send("Evento removido");
        })
    })
}

const updateEvent = (req, res) => {
    const eventid = parseInt(req.params.eventid);
    const { nomeevento, descricao, local, acessibilidade } = req.body;

    pool.query(queries.getEventById, [eventid], (error, results) => {
        const noEventFound = !results.rows.length;
        if (noEventFound)
            res.send("Evento não existe")

        pool.query(queries.updateEvent, [nomeevento, descricao, local, acessibilidade, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Evento atualizado");
        })
    })
}

module.exports = {
    getEvents,
    getEventsById,
    getEventsByName,
    getEventsByLocal,
    getEventsByAcess,
    addEvent,
    deleteEvent,
    updateEvent,
}