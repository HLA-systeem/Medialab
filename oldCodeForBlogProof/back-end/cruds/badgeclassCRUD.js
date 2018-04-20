const BADGECLASS = require('../models/badgeclassModel');
const STATUS = require('../httpCodes');
const OPTIONS = require('../options');

module.exports.getBadgeclass = (req, res) => {
    var search = {};
    var start = 0;
    var limit = 0;

    if(req.params.id != null){
        res = OPTIONS.detailOptions(req,res);
        BADGECLASS.model.find({_id:req.params.id}).lean().exec((err, data) => {
            if(!STATUS.serie400(err,req,res,data)){
                data[0]._links = {};
                data[0]._links.self = {'href':'http://' + req.headers.host + '/badgeclasses/' + data[0]._id};
                data[0]._links.collection = {'href':'http://' + req.headers.host + '/badgeclasses/'};
                STATUS.serie200(req, res, data[0]);
            }
        });
    } 
    else{
        res = OPTIONS.collectionOptions(req,res); 
        BADGECLASS.model.find(search).skip(start).limit(limit).exec((err, data) => {
            if(!STATUS.serie400(err,req,res,data)){
                let collection= [];
                data.forEach((element, index, array) => {
                    let jsonData = element.toJSON();
                    jsonData._links = {self: {'href':'http://' + req.headers.host + '/badgeclasses/' + jsonData._id}};
                    collection.push(jsonData);
                });

                let resObject = {}
                resObject.items = collection;
                resObject._links = {self: {'href': 'http://' + req.headers.host + '/badgeclasses'}};

                BADGECLASS.model.count({}).exec((err2, total) =>{
                    STATUS.serie200(req, res, resObject); 
                });
            }
        });
    }  
}

module.exports.postBadgeclass = (req, res) =>{
    let data = new BADGECLASS.model({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        criteria: req.body.criteria,
        tags: req.body.tags,
        issuer: req.body.issuer,
    });

    
    data.save( (err, data) => {
        if(!STATUS.serie400(err,req,res,data)){
            STATUS.serie200(req,res,data);
        } 
    });
}

module.exports.rewriteBadgeclass = (req, res) => { 
    BADGECLASS.model.findOne({_id:req.params.id}).exec((err,data) => {
        data.id = req.body.id;
        data.name = req.body.name,
        data.description = req.body.description,
        data.image = req.body.image,
        data.criteria = req.body.criteria,
        data.tags = req.body.tags,
        data.issuer = req.body.issuer,

        data.save( (err, data) => {
            if(!STATUS.serie400(err,req,res,data)){
                STATUS.serie200(req,res,data);
            } 
        });
    });
}

module.exports.updateBadgeclass = (req, res) => {
    BADGECLASS.model.findOneAndUpdate({_id:req.params.id}, req.body,{new: true}).exec((err,data) =>{ 
        if(!STATUS.serie400(err,req,res,data)){
            STATUS.serie200(req,res,data);
        }
    });
}

module.exports.deleteBadgeclass = (req, res) => {
    BADGECLASS.model.findOneAndRemove({_id:req.params.id}).exec((err,data) =>{ 
        if(!STATUS.serie400(err,req,res,data)){
            STATUS.serie200(req,res,data);
        }
    });
}