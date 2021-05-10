"use strict";
const mongoose = require("mongoose");
const votes = require("./schema/votes");


const express = require("express");
const router = express.Router();

router.route("/")
    .get((req, res) => {
        console.log("GET /");
        res.status(200).send({
            data: "App is running."
        });
    });


router.route("/votes")
    .get((req, res) => {
        console.log("GET /votes");

        // already implemented:
        votes.find({session:"1"})
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(404).send(err);
            })
        })








module.exports = router;
