import store from 'store';

function initialize() {
    let domVar = MSS_VARS.user;
    let data = null;

    data = store.get('user');

    if (domVar) {
        store.set('user', domVar);
        data = domVar;    
    }

    return data;
}

export default initialize;