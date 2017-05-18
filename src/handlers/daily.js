import mongojs from 'hapi-mongojs';
import moment from 'moment';

const getDailyQuotes = (request, reply) => {
    const daily = mongojs.db().collection('daily');
    const year = moment().year();
    let month = parseInt(request.params.month, 10);
    let f = new Date(year, month, 1);
    let l = new Date(year, month + 1, 1);
    daily.find({
        date: { $gte: f, $lt: l}
    },  (err, dailies) => {
            if (err) {
                console.error(err);
            }
        reply(dailies)
    })
}

export default getDailyQuotes;
