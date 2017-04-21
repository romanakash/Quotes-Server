import mongojs from 'hapi-mongojs';

const findAllQuotes = (request, reply) => {
    const quotes = mongojs.db().collection('quotes');  // get collection
    quotes.find((err, quotes) => {                     // find quotes
        if (err) {                                     // check for error
            console.error(err);
        }
        reply(quotes);                                 // return quotes
    });
};

export default findAllQuotes;
