const express = require('express');
const compareRouter = express.Router();
const Compare = require("../models/compare");

compareRouter.get("/", (req, res, next) => {
    Compare.find({ user: req.user._id }, (err, compares) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(compares);
    });
});

compareRouter.post("/", (req, res, next) => {
    const compare = new Compare(req.body);
    compare.user = req.user._id;
    compare.save(function (err, newCompare) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newCompare);
    });
});

compareRouter.get("/:compareId", (req, res, next) => {
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
