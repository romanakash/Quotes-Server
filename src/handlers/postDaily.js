import mongojs from 'hapi-mongojs';

const postDaily = (request, reply) => {
    const data = request.payload.json;
    let daily = {
        value: data.value,
        author: data.author,
        tag: data.tags.tag,
        tagId: data.tags.tagId,
        day: data.day,
        creationDate: data.creationDate
    }
    insertDaily(daily);
    console.log("Succesfully added to mongodb");
    return reply(daily);
}

const insertDaily = (obj) => {
    const daily = mongojs.db().collection('daily');
    daily.insert(obj)
    console.log(obj);
}

export default postDaily;
