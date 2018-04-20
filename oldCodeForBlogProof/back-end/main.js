const EXPRESS = require('express');
const BP = require('body-parser');
const CORS = require('cors');

const ROUTER = require('./router');
const connectDB = require('./db');
const STATUS = require('./httpCodes');

const API = EXPRESS();


connectDB();

API.use(BP.json());
API.use(BP.urlencoded({ extended: false })); 
API.use(CORS()); 

API.use('/', ROUTER);
API.use(STATUS.serie500);


API.listen(8080, () => {
    console.log('Server started on port 8080')
});

///home/project/2017_2018/mlab_labflab_t2/openbadges
//png-itxt set -k openbadges -f fileName.json -o output.png input.png