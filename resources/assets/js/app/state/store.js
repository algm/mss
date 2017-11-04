import authenticate from './mutations/authenticate.js';

export default {
  state: {
    authenticated: false,
    user_data: {}
  },

  mutations: {
    authenticate: authenticate
  }
};
