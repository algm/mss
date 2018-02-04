import defaultState from '../default';

const reducerMethods = {
    MSS_INIT_USER(state, action) {
        return {
            loggedIn: action.data && !!action.data.id,
            data: Object.assign({}, action.data)
        };
    }
}

export default function user(state, action) {
    if (typeof reducerMethods[action.type] == 'function') {
        return reducerMethods[action.type](state, action);
    }

    return defaultState.user;
}