"use strict";
const mongoose = require("mongoose");
const votes = require("./schema/votes");


const express = require("express");
const path = require("path");
const resolutions = require("./schema/resolutions");
const router = express.Router();
const constants = require('./constants');
const { read } = require("fs");
const { readFile } = require("fs");



router.route("/")
    // .get((req, res) => {
    //     console.log("GET /");
    //     let reqPath = path.join(__dirname, '../public');
    //     res.sendFile(reqPath + "/home.html");
    // });
    .get((req, res) => {
        console.log("GET /");
        // readFile('../public/home.html','utf8',(err,html)=>
        // {console.log(html);
        //     res.send(html)
        // })

        res.status(200).send("this is the home page for now");
        
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
            resolutions.find().limit(20)  // limit by 20, later add fetch with parameters that records the number of solutions 
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
                votes.find({Countryname : req.params.id}).limit(20)
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
