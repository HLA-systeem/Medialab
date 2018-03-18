const MONGOOSE = require('mongoose');
const CRUDS = require('../cruds/issuerCruds');

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

module.exports.model = MONGOOSE.model('Badgeclass', IssuerSchema);
module.exports.get = CRUDS.getIssuer;
module.exports.post = CRUDS.postIssuer;
module.exports.update = CRUDS.updateIssuer;
module.exports.rewrite = CRUDS.rewriteIssuer;
module.exports.delete = CRUDS.deleteIssuer;