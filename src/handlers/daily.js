import mongojs from 'hapi-mongojs';
const ObjectId = require('mongodb').ObjectID;

const getDailyQuotes = (request, reply) => {
    const daily = mongojs.db().collection('daily');
    daily.find((err, dailies) => {
        if (err) {
            console.error(err);
        }
        reply(dailies)
    })
};

export default getDailyQuotes;