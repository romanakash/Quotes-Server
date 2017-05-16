import mongojs from 'hapi-mongojs';

const postDaily = (request, reply) => {
    const data = request.payload.json;
    let daily = {
        value: data.value,
        author: data.author,
        day: data.day,
        creationDate: data.creationDate
    }
    insertDaily(daily);
    return reply(daily);
}

const insertDaily = (obj) => {
    const daily = mongojs.db().collection('daily');
    daily.insert(obj)
}

export default postDaily;
