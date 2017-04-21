import mongojs from 'hapi-mongojs';

const findByTagId = (request, reply) => {
    let id = parseInt(request.params.tagId, 10);         // get param id
    const quotes = mongojs.db().collection('quotes');    // get collection
    quotes.find({tagId: id}, (err, quotes) => {          // find quotes by id
        if (err) {                                       // check for err
            console.error(err);
        }
        reply(quotes);                                   // return req quotes   
    })
};

export default findByTagId;
