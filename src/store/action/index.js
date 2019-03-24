import * as Types from '../action-types'

// action reducer是纯函数 输入一定 返回就一定
export default {
    add(val) {
        return {type: Types.ADD, count: val}
    }
}