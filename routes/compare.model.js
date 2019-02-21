const express = require('express');
const compareRouter = express.Router();
const Compare = require("../models/compare");
const Procedure = require("../models/procedure");

const addCompareId = compareId => procedure => ({ ...procedure.toObject(), compareId })


compareRouter.get("/", (req, res, next) => {
    // Compare.find({ user: req.user._id }, (err, compares) => {
    Compare.find({ user: req.user._id }, (err, compares) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        Promise.all(compares.map(compare => Procedure.findById(compare.procedure).then(addCompareId(compare._id))))
            .then(procedures => {
                res.send(procedures)
            })
            .catch(err => {
                res.status(500);
                return next(err);
            })
    });
});

compareRouter.post("/", (req, res, next) => {
    const compare = new Compare(req.body);
    compare.user = req.user._id;
    //add user after procedure
    Compare.findOne({ procedure: req.body.procedure, user: req.user._id })
        .then(found => {
            if (found) throw Error('Procedure already saved');
            return compare.save()
        })
        .then(newCompare => {
            return Procedure.findById(newCompare.procedure).then(addCompareId(newCompare._id))
        })
        .then(foundProcedure => {
            return res.status(201).send(foundProcedure);
        })
        .catch(err => {
            res.status(500);
            next(err)
        })
});

compareRouter.get("/:compareId", (req, res, next) => {
    // user: req.user._id 
    Compare.findOne({ _id: req.params.compareId, user: req.user._id }, (err, compare) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!compare) {
            res.status(404)
            return next(new Error("No compare item found."));
        }
        return res.send(compare);
    });
});

compareRouter.put("/:compareId", (req, res, next) => {
    Compare.findOneAndUpdate(
        { _id: req.params.compareId, user: req.user._id },
        req.body,
        { new: true },
        (err, compare) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(compare);
        }
    );
});

compareRouter.delete("/:compareId", (req, res, next) => {
    Compare.findOneAndRemove({ _id: req.params.compareId, user: req.user._id }, (err, compare) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(compare);
    });
});

module.exports = compareRouter;
