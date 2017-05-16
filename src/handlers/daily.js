import mongojs from 'hapi-mongojs';
import moment from 'moment';

const getDailyQuotes = (request, reply) => {
    const daily = mongojs.db().collection('daily');
    const year = moment().year();
    const days = moment().daysInMonth();
    let month = request.params.month;
    daily.find({
        date: { $gte: new Date(year, month, 1), $lt: new Date(year, month, days)}
    },  (err, dailies) => {
            if (err) {
                console.error(err);
            }
        reply(dailies)
    })
};

export default getDailyQuotes;
