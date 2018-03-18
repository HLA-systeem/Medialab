const ASSERTION = require('../models/assertionModel');
const STATUS = require('../httpCodes');
const OPTIONS = require('../options');

module.exports.getAssertion = (req, res) => {}
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
                    resObject.pagination = PAGINATION.paginate(start,limit,total,req);
                    STATUS.serie200(req, res, resObject); 
                });
            }
        });
    }  
}

module.exports.postAssertion = (req, res) =>{
    let data = new ASSERTION.model({
        id: req.body.name,
        recipient: req.body.species,
        image: req.body.capable_of,
        evidence: req.body.residence,
        eye_color: req.body.eye_color,
        hair_color: req.body.hair_color,
    });

    
    data.save( (err, data) => {
        if(!STATUS.serie400(err,req,res,data)){
            STATUS.serie200(req,res,data);
        } 
    });
}

module.exports.rewriteAssertion = (req, res) => { 
    ASSERTION.model.findOne({_id:req.params.id}).exec((err,data) => {
        data.name = req.body.name;
        data.species = req.body.species;
        data.capable_of = req.body.capable_of;
        data.residence = req.body.residence;
        data.eye_color = req.body.eye_color;
        data.hair_color = req.body.hair_color;

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