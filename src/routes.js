"use strict";
const mongoose = require("mongoose");
const votes = require("./schema/votes");


const express = require("express");
const resolutions = require("./schema/resolutions");
const router = express.Router();
const constants = require('./constants');


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
        
router.route("/year/:id").get((req, res) => {
    console.log("GET /year");

    resolutions.find({year: req.params.id})
        .then(data => {
            if (data){
            res.status(200).send(data);
        return;}
            else{
                res.status(200).send("Please input a year from 1948 to 2019")
            }
        })
        .catch(err => {
            res.status(404).send(err);
        })
    })

router.route("/r-votes/:id").get((req, res) => {
        console.log("GET /resolutionVotes");    
        votes.find({resid: req.params.id})
            .then(data => {
                if (data){
                res.status(200).send(data);
            return;}
                else{
                    res.status(200).send("Please input a valid resid")
                }
            })
            .catch(err => {
                res.status(404).send(err);
            })
        })

router.route("/resolutions").get((req, res) => {
            console.log("GET /all-res");    
            resolutions.find()
                .then(data => {
                    if (data){
                    res.status(200).send(data);
                return;}
                })
                .catch(err => {
                    res.status(404).send(err);
                })
            })

router.route("/resolutions/resid/:id").get((req, res) => {
                console.log("GET specific resid");    
                resolutions.find({resid : req.params.id})
                    .then(data => {
                        if (data){
                        res.status(200).send(data);
                    return;}
                    else{
                        res.status(200).send("Please input a valid resid")
                    }
                    })
                    .catch(err => {
                        res.status(404).send(err);
                    })
                })
        

router.route("/votes/country/:id").get((req, res) => {
                console.log("GET country votes");    
                votes.find({Countryname : req.params.id})
                    .then(data => {
                        if (data){
                        res.status(200).send(data);
                    return;}
                    else{
                        res.status(200).send("Please input a valid country")
                    }
                    })
                    .catch(err => {
                        res.status(404).send(err);
                    })
                })

router.route("/votes/country").get((req, res) => {
                console.log("GET countries");
                let a = constants   
                res.status(200).send(a.all_countries); })

module.exports = router;
