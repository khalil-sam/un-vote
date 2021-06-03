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

const voteToRes = (vote) => {
    resolutions.findOne({"rcid":vote.rcid})
    .then(data => {
        if(data) {
            //console.log("voteToRes SUCCESS: converted vote " + JSON.stringify(vote) + " to " + JSON.stringify(data));
            return data;
        }
        else {
            //console.log("voteToRes: failed with vote " + JSON.stringify(vote) + "and result" + data);
            return false;
        }
    })
}

router.route("/resolutions").get((req, res) => {
            let size = req.query.pagesize;
            if(!size) {
                size = "20";
            }
            size = parseInt(size);

            let page = req.query.pagenum;
            if(!page) {
                page = "1";
            }
            page = parseInt(page) - 1; // page 0 at the start

            let dateOrder = req.query.dateOrder;
            if(!dateOrder) {
                dateOrder = "incr";
            }

            let year = req.query.year;

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

                        if(req.query.category) {
                            result = result.filter(item => {
                                //console.log("item:"+item);
                                //console.log("category:"+req.body.category);
                                let hasCat = (item[req.query.category] == "1");
                                //console.log("hasCat:"+hasCat);
                                return hasCat;
                            })
                        }

                        if(year) {
                            result = result.filter(item => {
                                return (item.year == year);
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

                console.log("query:" + JSON.stringify(req.query));

                let size = req.query.pagesize;
                if(!size) {
                    size = "20";
                }
                size = parseInt(size);

                let page = req.query.pagenum;
                if(!page) {
                    page = "1";
                }
                page = parseInt(page) - 1; // page 0 at the start

                let dateOrder = req.query.dateOrder;
                if(!dateOrder) {
                    dateOrder = "incr";
                }
                
                let year = req.query.year;

                let voteQuery = {Countryname : req.params.id, vote : {$ne: 9}};

                if(year) {
                    voteQuery.year = year;
                }

                let resCatQuery = {}
                if(req.query.category) {
                    resCatQuery[req.query.category] = "1";
                }
                console.log("RES CAT QUERY:" + JSON.stringify(resCatQuery));

                resolutions.find(resCatQuery)
                .then(data => {
                    if(data) {
                        let rcidList = [];
                        data.forEach(item => {
                            rcidList.push(item.rcid);
                        })

                        console.log("rcidList: "+rcidList);
                        
                        votes.find(voteQuery)
                        .then(data => {
                            if (data) {

                                let result = sortByDate(data, dateOrder);

                                result = result.filter(item => {
                                    console.log("item rcid: "+item.rcid);
                                    console.log("item-r type:"+typeof(item.rcid)); //number
                                    //console.log("rcidList length: "+rcidList.length); // 6203
                                    let b = rcidList.includes(item.rcid.toString());
                                    console.log("include: "+b);
                                    return b;
                                });

                                //console.log("rcidList type:"+typeof(rcidList[0])); //string
                                
                                if(page*size > result.length) {
                                    console.log("page too high!");
                                }

                                result = result.slice(page*size, page*size + size);
                                res.status(200).send(result);
                                return;
                            }
                            else {
                                res.status(200).send("Please input a valid country")
                            }
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(404).send(err);
                        })
                    }
                    else {
                        res.status(200).send("Bad res query")
                    }
                })    
})

router.route("/votes/country").get((req, res) => {
                console.log("GET countries");
                let a = constants   
                res.status(200).send(a.all_countries);
            })

module.exports = router;
