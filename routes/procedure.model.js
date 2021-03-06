const express = require('express');
const procedureRouter = express.Router();
const Procedure = require("../models/procedure");

const keyWordToRegex = keyword => {
    const interpolated = keyword.split(' ')
        .map(s => {
            return `(?=.*${s})`
        })
        .join('');
    return `^${interpolated}.*$`
}


procedureRouter.get("/", (req, res, next) => {
    const { limit, cursor, keyword } = req.query;
    let query = {};
    if (cursor) query._id = { $lt: cursor };
    // if (keyword) query.$text = ({ $search: keyword });
    if (keyword) query = ({ 'description': { '$regex': keyWordToRegex(keyword), '$options': 'i' } });
    // if (keyword) query = ({$or: [{ 'description': { '$regex': keyWordToRegex(keyword), '$options': 'i' } },
    //                             { 'hospital': { '$regex': keyWordToRegex(keyword), '$options': 'i' } }]});

    Procedure.find(query)
        .sort({ _id: -1 })
        .limit(+limit)
        .then(procedures => {
            const cursor = procedures.length ? procedures[procedures.length - 1]._id : null
            return res.send({ procedures, cursor })
        })
        .catch(err => {
            res.status(500);
            next(err)
        })

})

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
    Procedure.findOne({ _id: req.params.procedureId }, (err, procedure) => {
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
