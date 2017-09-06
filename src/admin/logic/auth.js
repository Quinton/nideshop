'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {

  loginAction(){

      this.allowMethods = 'post';
      this.rules = {
          username: { required: true, string: true},
          password: { required: true, string: true},
      };
  }
}