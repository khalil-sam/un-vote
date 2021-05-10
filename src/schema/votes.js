"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const votesSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    rcid: {
        type: Schema.Types.Number, 
        // this was a number
        required: true
    },
    ccode: {
        type: Schema.Types.Number // this was a number
    },
    member: {
        type: Schema.Types.String,
    },
    vote: {
        type: Schema.Types.Number, //this was a number 
    },
    Country: {
        type: Schema.Types.String,
    },
    Countryname: {
        type: Schema.Types.String,
        required: true
    },
    year: {
        type: Schema.Types.String,
    },
    session: {
        type: Schema.Types.String,
    },
    date: {
        type: Schema.Types.String,
    },
    unres: {
        type: Schema.Types.String,
    },
    resid: {
        type: Schema.Types.Number, //this was a number
    }






},
{
    collection: 'votes'
});
module.exports = mongoose.model("votes", votesSchema);
