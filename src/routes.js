"use strict";
const mongoose = require("mongoose");
const votes = require("./schema/votes");


const express = require("express");
const path = require("path");
const resolutions = require("./schema/resolutions");
const router = express.Router();
const constants = require('./constants');





router.route("/")
    .get((req, res) => {
        console.log("GET /");
        let reqPath = path.join(__dirname, '../public');
        res.sendFile(reqPath + "/countries.html");
    });
    // .get((req, res) => {
    //     console.log("GET /");
        // readFile('../public/home.html','utf8',(err,html)=>
        // {console.log(html);
        //     res.send(html)
        // })

    //     res.status(200).send("this is the home page for now");
        
    // });
    // router.route("/c")
    // .get((req, res) => {
    //     console.log("GET /");
    //     let reqPath = path.join(__dirname, '../public');
    //     res.sendFile(reqPath + "/countries.html");
    // });

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

/*const sortByDate = (arr, order) => {
    if (order == "decr") {
        return arr.sort((a, b) => {
            return a.date < b.date;
        })
    }
    else {
        return arr.sort((a, b) => {
            console.log("a date:"+a.date);
            let result = a.date > b.date
            console.log(result);
            return result;
        })
    }
}*/

const sortByDate = (arr, order) => {
    if (order == "incr") {
        return arr.sort((a, b) => {
            if(b.date < a.date) {
                return 1;
            }
            return -1;
        })
    }
    else { // decr
        return arr.sort((a, b) => {
            if(b.date > a.date) {
                return 1;
            }
            return -1;
        })
    }
}

router.route("/resolutions").get((req, res) => {
            let size = req.body.pagesize;
            if(!size) {
                size = "20";
            }
            size = parseInt(size);

            let page = req.body.pagenum;
            if(!page) {
                page = "1";
            }
            page = parseInt(page) - 1; // page 0 at the start

            let dateOrder = req.body.dateOrder;
            if(!dateOrder) {
                dateOrder = "incr";
            }

            console.log("GET /all-res");    
            resolutions.find()  // limit by 20, later add fetch with parameters that records the number of solutions 
                .then(data => {
                    if (data){
                        let result = sortByDate(data, dateOrder); // NOT WORKING
                        //console.log("Result sorted by date: "+result)
                        //console.log("result is array: "+Array.isArray(result));

                        // check sorted...
                        /*
                        for(let i=1; i<result.length; i++) {
                            console.log(result[i].date);
                            if (result[i].date < result[i-1].date) {
                                console.log("bad!");
                            }
                        }*/
                        console.log("result length:"+result.length);

                        if(req.body.category) {
                            result = result.filter(item => {
                                //console.log("item:"+item);
                                //console.log("category:"+req.body.category);
                                let hasCat = (item[req.body.category] == "1");
                                //console.log("hasCat:"+hasCat);
                                return hasCat;
                            })
                        }

                        console.log("page size:"+size + "; page num:" + page);
                        result = result.slice(page*size, page*size + size);

                        res.status(200).send(result);
                        return;
                    }
                })
                .catch(err => {
                    console.log("ERROR!!!!:"+err);
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
