import findAllQuotes from './handlers/all-quotes';
import findByTagId from './handlers/tag-id';
import findByObjectId from './handlers/object-id';
import getDailyQuotes from './handlers/daily';
import getAuthorNames from './handlers/getAuthorNames'
import skipQuotes from './handlers/limitQuotes';
import postQuote from './handlers/post';
import postDaily from './handlers/postDaily';
import Joi from 'joi';

const routes = [
    {
        method: 'GET',                      // root
        path: '/',
        handler: (request, reply) => {
            reply("This is the server");
        }
    },
    {
        method: 'GET',                      // all the quotes
        path: '/quotes',
        handler: findAllQuotes
    },
    {                                       // limit the quotes
        method: 'GET',
        path: '/quotes/{num}',
        handler: skipQuotes
    },
    {
        method: 'GET',                      // filter by tag id
        path: '/quotes/tag/{tagId}',
        handler: findByTagId
    },
    {
        method: 'GET',
        path: '/id/{objectId}',
        handler: findByObjectId
    },
    {
        method: 'GET',
        path: '/daily',
        handler: getDailyQuotes
    },
    {
        method: 'GET',
        path: '/authors',
        handler: getAuthorNames
    },
    {
        method: 'POST',
        path: '/post',
        handler: postQuote,
        config: {
            validate: {
                payload: {
                    json: Joi.object().keys({
                        value: Joi.string().required(),
                        author: Joi.string().required(),
                        tags: Joi.object().keys({
                            tag: Joi.string().required(),
                            tagId: Joi.number().min(1).max(50).required(),
                        })
                    })
                }
            },
            cors: {
                additionalHeaders: ["Access-Control-Allow-Origin"]
            }
        }
    },
    {
        method: 'POST',
        path: '/post-dailies',
        handler: postDaily,
        config: {
            validate: {
                payload: {
                    json: Joi.object().keys({
                        value: Joi.string().required(),
                        author: Joi.string().required(),
                        tags: Joi.object().keys({
                            tag: Joi.string().required(),
                            tagId: Joi.number().min(1).max(50).required(),
                        }),
                        day: Joi.string(),
                        creationDate: Joi.string().required(),
                    })
                }
            },
            cors: {
                additionalHeaders: ["Access-Control-Allow-Origin"]
            }
        }
    }
];

export default routes;
