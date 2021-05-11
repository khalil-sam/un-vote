"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resolutionsSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    rcid: {
        type: Schema.Types.String, 
        // this can be a number
        required: true
    },
    year: {
        type: Schema.Types.Number,
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
        type: Schema.Types.Number, 
    },
    abstain: {
        type: Schema.Types.Number 
    },
    yes: {
        type: Schema.Types.Number 
    },
    no: {
        type: Schema.Types.Number 
    },
    importantvote: {
        type: Schema.Types.String, //this can be a boolean
    },

    amend: {
        type: Schema.Types.String  //this can be a boolean
    },
    para: {
        type: Schema.Types.String  //this can be a boolean
    },
    short: {
        type: Schema.Types.String,
    },
    descr: {
        type: Schema.Types.String,
    },
    me: {
        type: Schema.Types.String, //this can be a boolean
    },
    nu: {
        type: Schema.Types.String, //this can be a boolean
    },
    di: {
        type: Schema.Types.String, //this can be a boolean
    },
    hr: {
        type: Schema.Types.String, //this can be a boolean
    },
    co: {
        type: Schema.Types.String, //this can be a boolean
    },
    ec: {
        type: Schema.Types.String, //this can be a boolean
    },
    ident: {
        type: Schema.Types.String, //this can be a boolean
    }

},
{
    collection: 'resolutions'
});
module.exports = mongoose.model("resolutions", resolutionsSchema);