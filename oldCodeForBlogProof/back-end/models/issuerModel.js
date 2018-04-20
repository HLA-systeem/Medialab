const MONGOOSE = require('mongoose');
const CRUDS = require('../cruds/issuerCRUD');

MONGOOSE.Promise = global.Promise;

var IssuerSchema = MONGOOSE.Schema(
    {
        "@context": {
            type: String,
            required: false,
            default: 'https://w3id.org/openbadges/v2'
        },
        type: {
            type: String,
            required: false,
            default: 'Issuer'
        },
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
    },
    
    {versionKey: false},
);

module.exports.model = MONGOOSE.model('Issuer', IssuerSchema);
module.exports.get = CRUDS.getIssuer;
module.exports.post = CRUDS.postIssuer;
module.exports.update = CRUDS.updateIssuer;
module.exports.rewrite = CRUDS.rewriteIssuer;
module.exports.delete = CRUDS.deleteIssuer;