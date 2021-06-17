import jsonp from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd';

export default class Axios {
    // static jsonp(options) {
    //     return new Promise((resolve, reject) => {
    //         this.jsonp(options.url, {
    //             param: 'callback'
    //         }, function(err, response) {
    //             if (response.status === 'success') {
    //                 resolve(response);
    //             } else {
    //                 reject(response.message)
    //             }
    //         })
    //     })
    // }
    static ajax(options) {
        let baseurl =
            "https://www.fastmock.site/mock/5bffafb7b04355675bd16b11802c7bbc/almenerge";

        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'post',
                baseURL: baseurl,
                timeout: 5000,
                params: (options.data && options.data.params) || '',
            }).then((response) => {
                if (response.status == '200') {
                    let res = response.data
                    if (res.code == '0') {
                        resolve(res)
                    } else {
                        Modal.info({
                            title: "提示",
                            content: res.data.msg
                        })
                    }
                } else {
                    reject(response.data)
                }
            })
        });
    }
}