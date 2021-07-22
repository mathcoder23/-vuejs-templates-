//提供core层的，api具体实现

import {GoodsApi} from "../api/GoodsApi";
import {CoreApi} from "../core/api/core/CoreApi";
//配置baseUrl
CoreApi.init("")
export const MyApi = {
    //实现的方法写在其中
    GoodsApi: GoodsApi
}
