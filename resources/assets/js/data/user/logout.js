import store from 'store';

function logout() {
    store.remove('user');
}

export default logout;