"use strict";

const fs = require("fs");
const path = require("path");

module.exports = (app) => {
  const JSONStream = require("JSONStream");
  var router = require("express").Router();

  /*
    router.get('/allplayers', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Transfer-Encoding', 'chunked');

        const allplayers = path.join(__dirname, '../../allplayers.json');

        try {
            const data = fs.readFileSync(allplayers, 'utf8');
            const stream = JSONStream.stringify();
            stream.pipe(res);
            stream.end(JSON.parse(data));
        } catch (err) {
            console.log(err.message)
        }

    })
*/

  router.get("/schedule", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Transfer-Encoding", "chunked");

    const schedule = path.join(__dirname, "../../schedule.json");

    try {
      const data = fs.readFileSync(schedule, "utf8");
      const stream = JSONStream.stringify();
      stream.pipe(res);
      stream.end(JSON.parse(data));
    } catch (err) {
      console.log(err.message);
    }
  });

  router.get("/projections", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Transfer-Encoding", "chunked");

    const projections = path.join(__dirname, "../../projections.json");

    try {
      const data = fs.readFileSync(projections, "utf8");
      const stream = JSONStream.stringify();
      stream.pipe(res);
      stream.end(JSON.parse(data));
    } catch (err) {
      console.log(err.message);
    }
  });

  /*
    router.post('/playervalues', (req, res) => {
        const playervalues = fs.readFileSync('./playervalues.json', 'utf-8')

        const data = JSON.parse(playervalues)
            .filter(pv =>
                req.body.player_ids.includes(pv.player_id)
                || pv.player_id.includes(' ')
            )

        const players_without_values = req.body.player_ids
            .filter(player_id => {
                !data.find(d => d.player_id === player_id)
            })
            .map(player_id => {
                return {
                    player_id: player_id
                }
            })

        res.send([...data, ...players_without_values])
    })
*/

  app.use("/main", router);
};
