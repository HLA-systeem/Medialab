const MONGOOSE = require('mongoose');
const CRUDS = require('../cruds/assertionCRUD');

MONGOOSE.Promise = global.Promise;

var AssertionSchema = MONGOOSE.Schema(
    {
        "@context": {
            type: String,
            required: false,
            default: 'https://w3id.org/openbadges/v2'
        },
        type: {
            type: String,
            required: false,
            default: 'Assertion'
        },
        id: {
            type: String,
            required: true
        },
        recipient:{
                type:{
                    type: String,
                    required: true
                },
                identity:{
                    type: String,
                    required: true
                },
                hashed:{
                    type: Boolean,
                    required: false,
                    default: false
                }
            },

        image: {
            type: String,
            required: true
        },
        evidence: {
            type: String,
            required: true
        },
        issuedOn: {
            type: String,
            required: true
        },
        expires: {
            type: String,
            required: true
        },
        badge: {
            type: String,
            required: true
        },
        verification: {
            type: String,
            required: true
            },
        last_updated:{
            type: Date,
            default: Date.now
        }
    },
    
    {versionKey: false},
);

module.exports.model = MONGOOSE.model('Assertion', AssertionSchema);
module.exports.get = CRUDS.getAssertion;
module.exports.post = CRUDS.postAssertion;
module.exports.update = CRUDS.updateAssertion;
module.exports.rewrite = CRUDS.rewriteAssertion;
module.exports.delete = CRUDS.deleteAssertion;
