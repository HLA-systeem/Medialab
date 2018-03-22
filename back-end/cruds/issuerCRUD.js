const ISSUER = require('../models/issuerModel');
const STATUS = require('../httpCodes');
const OPTIONS = require('../options');

module.exports.getIssuer = (req, res) => {
    var search = {};
    var start = 0;
    var limit = 0;
    
    if(req.params.id != null){
        res = OPTIONS.detailOptions(req,res);
        ISSUER.model.find({_id:req.params.id}).lean().exec((err, data) => {
            if(!STATUS.serie400(err,req,res,data)){
                data[0]._links = {};
                data[0]._links.self = {'href':'http://' + req.headers.host + '/issuers/' + data[0]._id};
                data[0]._links.collection = {'href':'http://' + req.headers.host + '/issuers/'};
                STATUS.serie200(req, res, data[0]);
            }
        });
    } 
    else{
        res = OPTIONS.collectionOptions(req,res); 
        ISSUER.model.find(search).skip(start).limit(limit).exec((err, data) => {
            if(!STATUS.serie400(err,req,res,data)){
                let collection= [];
                data.forEach((element, index, array) => {
                    let jsonData = element.toJSON();
                    jsonData._links = {self: {'href':'http://' + req.headers.host + '/issuers/' + jsonData._id}};
                    collection.push(jsonData);
                });

                let resObject = {}
                resObject.items = collection;
                resObject._links = {self: {'href': 'http://' + req.headers.host + '/issuers'}};

                ISSUER.model.count({}).exec((err2, total) =>{
                    resObject.pagination = PAGINATION.paginate(start,limit,total,req);
                    STATUS.serie200(req, res, resObject); 
                });
            }
        });
    }  
}

module.exports.postIssuer = (req, res) =>{
    let data = new ISSUER.model({
        id: req.body.id,
        name: req.body.name,
        url: req.body.url,
        email: req.body.email,
    });

    
    data.save( (err, data) => {
        if(!STATUS.serie400(err,req,res,data)){
            STATUS.serie200(req,res,data);
        } 
    });
}

module.exports.rewriteIssuer = (req, res) => { 
    ISSUER.model.findOne({_id:req.params.id}).exec((err,data) => {
        data.id = req.body.id;
        data.name = req.body.name,
        data.url = req.body.url,
        data.email = req.body.email,

        data.save( (err, data) => {
            if(!STATUS.serie400(err,req,res,data)){
                STATUS.serie200(req,res,data);
            } 
        });
    });
}

module.exports.updateIssuer = (req, res) => {
    ISSUER.model.findOneAndUpdate({_id:req.params.id}, req.body,{new: true}).exec((err,data) =>{ 
        if(!STATUS.serie400(err,req,res,data)){
            STATUS.serie200(req,res,data);
        }
    });
}

module.exports.deleteIssuer = (req, res) => {
    ISSUER.model.findOneAndRemove({_id:req.params.id}).exec((err,data) =>{ 
        if(!STATUS.serie400(err,req,res,data)){
            STATUS.serie200(req,res,data);
        }
    });
}