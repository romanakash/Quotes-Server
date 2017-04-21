import mongojs from 'hapi-mongojs';
const ObjectId = require('mongodb').ObjectID;                  // req obj ID module

const findByObjectId = (request, reply) => {
    let obj = request.params.objectId;                         // get string id
    const quotes = mongojs.db().collection('quotes');          // get collection
    quotes.findOne({_id: ObjectId(obj)}, (err, quote) => {     // get specific quote
        reply(quote);                                          // return quote
    });
};

export default findByObjectId;
