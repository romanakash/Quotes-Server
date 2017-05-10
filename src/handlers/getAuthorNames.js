import mongojs from 'hapi-mongojs';

const getAuthorNames = (request, reply) => {
    const quotes = mongojs.db().collection('quotes');  // get collection
    quotes.distinct('author', {}, (err, authors) => {
        reply(authors)
    });
}

export default getAuthorNames;
