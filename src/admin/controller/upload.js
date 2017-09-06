'use strict';

import Base from './base.js';
let gm = require('gm').subClass({imageMagick: true});

export default class extends Base {

    async brandPicAction() {
        let brandFile = this.file('brand_pic');
        if (think.isEmpty(brandFile)) {
            return this.fail('保存失败');
        }
        let that = this;
        let filename = '/static/upload/brand/' + think.uuid(32) + '.jpg';
        gm(brandFile.path)
            .resize(750, 420, "!")
            .write(think.RESOURCE_PATH + filename, function (err) {
                if (err) {
                    that.fail('图片上传失败');
                }
                that.success({
                    name: 'brand_pic',
                    fileUrl: 'http://127.0.0.1:8360' + filename
                });
            });
    }

    async brandNewPicAction() {
        let brandFile = this.file('brand_new_pic');
        if (think.isEmpty(brandFile)) {
            return this.fail('保存失败');
        }
        let that = this;
        let filename = '/static/upload/brand/' + think.uuid(32) + '.jpg';
        gm(brandFile.path)
            .resize(375, 252, "!")
            .write(think.RESOURCE_PATH + filename, function (err) {
                if (err) {
                    that.fail('图片上传失败');
                }
                that.success({
                    name: 'brand_new_pic',
                    fileUrl: 'http://127.0.0.1:8360' + filename
                });
            });
    }
}