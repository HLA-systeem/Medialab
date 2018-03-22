const EXPRESS = require('express');
const ROUTER = EXPRESS.Router(); 
const ASSERTIONS = require('./models/assertionModel');
const BADGECLASSES = require('./models/badgeclassModel');
const ISSUERS = require('./models/issuerModel');
const OPTIONS = require('./options');

ROUTER.route('/').get(getRoot);
ROUTER.route('/assertions/').get(ASSERTIONS.get).post(ASSERTIONS.post).options(OPTIONS.collectionOptions);
ROUTER.route('/assertions/:id').get(ASSERTIONS.get).patch(ASSERTIONS.update).put(ASSERTIONS.rewrite).delete(ASSERTIONS.delete).options(OPTIONS.detailOptions);
ROUTER.route('/badegeclasses/').get(BADGECLASSES.get).post(BADGECLASSES.post).options(OPTIONS.collectionOptions);
ROUTER.route('/badegeclasses/:id').get(BADGECLASSES.get).patch(BADGECLASSES.update).put(BADGECLASSES.rewrite).delete(BADGECLASSES.delete).options(OPTIONS.detailOptions);
ROUTER.route('/issuers/').get(ISSUERS.get).post(ISSUERS.post).options(OPTIONS.collectionOptions);
ROUTER.route('/issuers/:id').get(ISSUERS.get).patch(ISSUERS.update).put(ISSUERS.rewrite).delete(ISSUERS.delete).options(OPTIONS.detailOptions);
    
function getRoot(req, res){
    res.send('<a href="/assertions">Assertion Collection</a></br>' +
    '<a href="/badegeclasses">Badegeclasses Collection</a></br>' +
    '<a href="/issuers">Issuers Collection</a>');
}

module.exports = ROUTER;
