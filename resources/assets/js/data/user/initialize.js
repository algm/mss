import store from 'store';

function initialize() {
    let domVar = MSS_VARS.user;
    let data = null;
    
    data = store.get('user');
    
    if (domVar) {
        store.set('user', domVar);
        data = domVar;    
    }
    
    let token = store.get('token') || MSS_VARS.token;

    if (data && token) {
        data.token = token;    
        store.set('token', token);
    }

    return data;
}

export default initialize;