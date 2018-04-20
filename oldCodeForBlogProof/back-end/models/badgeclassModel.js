const MONGOOSE = require('mongoose');
const CRUDS = require('../cruds/badgeclassCRUD');

MONGOOSE.Promise = global.Promise;

var BadgeclassSchema = MONGOOSE.Schema(
    {
        "@context": {
            type: String,
            required: false,
            default: 'https://w3id.org/openbadges/v2'
        },
        type: {
            type: String,
            required: false,
            default: 'BadgeClass'
        },
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        criteria: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: false
        },
        issuer: {
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

module.exports.model = MONGOOSE.model('Badgeclass', BadgeclassSchema);
module.exports.get = CRUDS.getBadgeclass;
module.exports.post = CRUDS.postBadgeclass;
module.exports.update = CRUDS.updateBadgeclass;
module.exports.rewrite = CRUDS.rewriteBadgeclass;
module.exports.delete = CRUDS.deleteBadgeclass;