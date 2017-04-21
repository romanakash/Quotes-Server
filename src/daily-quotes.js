/* import mongojs from 'hapi-mongojs';
import moment from 'moment';
const ObjectId = require('mongodb').ObjectID;               // req obj ID module

const getFromQuotes = () => {
    let days = moment().daysInMonth();                      // get no. of days
    const quotes = mongojs.db().collection('quotes');       // get collections
    const daily  = mongojs.db().collection('daily');
    quotes.find({offDay: false}).limit(days, (err, qs) => { // query
        if (err) {
            console.error(err);                             // check for err
        }
        for (let q of qs) {                                 // set offDay to true
            quotes.update(                                  // update quotes
                {
                    _id: ObjectId(q._id)                    // update.find
                },
                {
                $set: {                                     // update.modify
                    offDay: true
                }
            })
        }
        daily.remove({}, () => {                            // clear daily
            console.log("Collection cleared")
        });
        daily.insert(qs, (err, docs) => {                   // insert into daily
            if (err) {
                console.error(err);
            }
        });
    });
};

export default getFromQuotes;
*/
