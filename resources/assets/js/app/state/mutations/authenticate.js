export default (state, payload) => {
  if (payload.token) {
    localStorage.setItem('id_token', payload.token);
    state.authenticated = true;
  }
}
