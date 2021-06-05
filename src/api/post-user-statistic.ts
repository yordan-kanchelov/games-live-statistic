import express from "express";
import { SessionsManager } from "../models/SessionsManager";
let router = express.Router();

router.route("/game-statistic").post(async (req, res) => {
    console.log(req.body);

    try {
        console.log(typeof req.body.gin);

        if (typeof req.body.gin == "undefined" || typeof req.body.pid == "undefined") {
            throw new Error("Wrong data");
        }

        SessionsManager.getInstance().updateSession(req.body);

        res.sendStatus(200);
    } catch (e) {
        console.warn("");
        res.sendStatus(400);
    }
});

module.exports = router;
