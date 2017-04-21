import mongojs from 'hapi-mongojs';

const postQuote = (request, reply) => {
    const data = request.payload.json;
    let quote = {
        value: data.value,
        author: data.author,
        tag: data.tags.tag,
        tagId: data.tags.tagId,
    }
    insertQuote(quote);
    console.log("Succesfully added to mongodb");
    return reply(quote);
}

const insertQuote = (obj) => {
    const quotes = mongojs.db().collection('quotes');
    quotes.insert(obj)
    console.log(obj);
}

export default postQuote;
