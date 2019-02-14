const express = require('express');
const procedureRouter = express.Router();
const Procedure = require("../models/procedure");

procedureRouter.get("/", (req, res, next) => {
    Procedure.find((err, procedures) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(procedures);
    });
});

procedureRouter.post("/", (req, res, next) => {
    const procedure = new Procedure(req.body);
    // procedure.user = req.user._id;
    procedure.save(function (err, newProcedure) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newProcedure);
    });
});

procedureRouter.get("/:procedureId", (req, res, next) => {
    Procedure.findOne({ _id: req.params.procedureId, user: req.user._id }, (err, procedure) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!procedure) {
            res.status(404)
            return next(new Error("No procedure item found."));
        }
        return res.send(procedure);
    });
});

procedureRouter.put("/:procedureId", (req, res, next) => {
    Procedure.findOneAndUpdate(
        { _id: req.params.procedureId, user: req.user._id },
        req.body,
        { new: true },
        (err, procedure) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(procedure);
        }
    );
});

procedureRouter.delete("/:procedureId", (req, res, next) => {
    Procedure.findOneAndRemove({ _id: req.params.procedureId, user: req.user._id }, (err, procedure) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(procedure);
    });
});

module.exports = procedureRouter;
