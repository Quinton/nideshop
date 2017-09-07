'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '121.196.193.102',
      port: '3306',
      database: 'nideshop',
      user: 'root',
      password: 'root',
      prefix: 'nideshop_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};