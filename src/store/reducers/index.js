import * as Types from '../action-types'
function reducer (state = {number: 0}, action) {
    switch(action.type) {
        case Types.ADD:
            return {number: state.number + action.count}
    }
    return state;
}
export default reducer