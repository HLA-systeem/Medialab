const ASSERTION = require('../models/assertionModel');
const STATUS = require('../httpCodes');
const OPTIONS = require('../options');

module.exports.getAssertion = (req, res) => {
    var search = {};
    var start = 0;
    var limit = 0;
    
    if(req.params.id != null){
        res = OPTIONS.detailOptions(req,res);
        ASSERTION.model.find({_id:req.params.id}).lean().exec((err, data) => {
            if(!STATUS.serie400(err,req,res,data)){
                data[0]._links = {};
                data[0]._links.self = {'href':'http://' + req.headers.host + '/assertions/' + data[0]._id};
                data[0]._links.collection = {'href':'http://' + req.headers.host + '/assertions/'};
                STATUS.serie200(req, res, data[0]);
            }
        });
    } 
    else{
        res = OPTIONS.collectionOptions(req,res); 
        ASSERTION.model.find(search).skip(start).limit(limit).exec((err, data) => {
            if(!STATUS.serie400(err,req,res,data)){
                let collection= [];
                data.forEach((element, index, array) => {
                    let jsonData = element.toJSON();
                    jsonData._links = {self: {'href':'http://' + req.headers.host + '/assertions/' + jsonData._id}};
                    collection.push(jsonData);
                });

                let resObject = {}
                resObject.items = collection;
                resObject._links = {self: {'href': 'http://' + req.headers.host + '/assertions'}};

                ASSERTION.model.count({}).exec((err2, total) =>{
                    STATUS.serie200(req, res, resObject); 
                });
            }
        });
    }  
}

module.exports.postAssertion = (req, res) =>{
    let data = new ASSERTION.model({
        id: req.body.id,
        recipient: {
            type:req.body.recipient.type,
            identity:req.body.recipient.identity,   
        },
        image: req.body.image,
        evidence: req.body.evidence,
        issuedOn: req.body.issuedOn,
        expires: req.body.expires,
        badge: req.body.badge,/*
        verification: {
            type: req.body.verification.type
        }*/
    });

    
    data.save( (err, data) => {
        if(!STATUS.serie400(err,req,res,data)){
            STATUS.serie200(req,res,data);
        } 
    });
}

module.exports.rewriteAssertion = (req, res) => { 
    ASSERTION.model.findOne({_id:req.params.id}).exec((err,data) => {
        data.id = req.body.id;
        data.recipent = {
            type:req.body.recipient.type,
            identity:req.body.recipient.identity, 
        };
        data.image = req.body.image;
        data.evidence = req.body.evidence;
        data.issuedOn = req.body.issuedOn;
        data.expires = req.body.expires;
        data.badge = req.body.badge;/*
        data.verification = {
            type: req.body.verification.type
        };*/

        data.save( (err, data) => {
            if(!STATUS.serie400(err,req,res,data)){
                STATUS.serie200(req,res,data);
            } 
        });
    });
}

module.exports.updateAssertion = (req, res) => {
    ASSERTION.model.findOneAndUpdate({_id:req.params.id}, req.body,{new: true}).exec((err,data) =>{ 
        if(!STATUS.serie400(err,req,res,data)){
            STATUS.serie200(req,res,data);
        }
    });
}

module.exports.deleteAssertion = (req, res) => {
    ASSERTION.model.findOneAndRemove({_id:req.params.id}).exec((err,data) =>{ 
        if(!STATUS.serie400(err,req,res,data)){
            STATUS.serie200(req,res,data);
        }
    });
}