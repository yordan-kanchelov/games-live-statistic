import express from "express";
import { SessionsManager } from "../models/SessionsManager";
let router = express.Router();

router.route("/game-statistic").get(async (req, res) => {
    try {
        let activeSessions = SessionsManager.getInstance().activeGameSessions;
        let statistics: any = activeSessions;

        if (typeof req.query.gin != "undefined") {
            statistics = activeSessions.find((session) => (session.gin == +req.query.gin ? true : false));
        }

        if (!statistics) {
            statistics = [];
        }

        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(statistics));
    } catch (e) {
        res.sendStatus(500);
    }
});

module.exports = router;
