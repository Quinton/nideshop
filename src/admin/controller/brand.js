'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {

        let page = this.get('page') || 1;
        let size = this.get('size') || 10;
        let name = this.get('name') || '';

        let model = this.model('brand');
        let data = await model.field(['id', 'name', 'floor_price', 'app_list_pic_url', 'is_new', 'sort_order', 'is_show']).where({name: ['like', `%${name}%`]}).order(['id DESC']).page(page, size).countSelect();

        return this.success(data);
    }

    async infoAction() {
        let id = this.get('id');
        let model = this.model('brand');
        let data = await model.where({id: id}).find();

        return this.success(data);
    }

    async storeAction(){

        if (!this.isPost()) {
            return false;
        }

        let values = this.post();
        let id = this.post('id');

        let model = this.model('brand');
        values.is_show = values.is_show ? 1 : 0;
        values.is_new = values.is_new ? 1 : 0;
        if (id > 0) {
            console.log('update')

            await model.where({id: id}).update(values);
        } else {
            delete values.id;
            console.log('add')
            await model.add(values);
        }
        return this.success(values);

    }

    async destoryAction(){
        let id = this.post('id');
        await this.model('brand').where({id: id}).limit(1).delete();
        //删除图片

        return this.success();
    }
}