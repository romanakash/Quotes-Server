import mongojs from 'hapi-mongojs';

const skipQuotes = (request, reply) => {
    const quotes = mongojs.db().collection('quotes');  // get collection
    let num = parseInt(request.params.num, 10);
    quotes.find({}).skip(num, (err, quotes) => {
        if (err) {
            console.error(err);
        }
        reply(quotes);
    })
};

export default skipQuotes;
