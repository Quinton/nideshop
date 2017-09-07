'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: process.env.db_host || '127.0.0.1',
      port: '3306',
      database: 'nideshop',
      user: process.env.db_user || 'root',
      password: process.env.db_pass || 'root',
      prefix: 'nideshop_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};