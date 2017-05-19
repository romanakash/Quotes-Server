import mongojs from 'hapi-mongojs';
import moment from 'moment';

const getDailyQuotes = (request, reply) => {
    const daily = mongojs.db().collection('daily');
    const year = moment().year();
    let month = parseInt(request.params.month, 10);
    daily.aggregate(
        { $project: { "value": 1, "author": 1, day: "1", date: "1",
            month: { $month: '$date' } } },
        { $match: { month: month } }
    ,  (err, dailies) => {
            if (err) {
                console.error(err);
            }
        reply(dailies)
    })
}

export default getDailyQuotes;
