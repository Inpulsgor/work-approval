const isAuthenticated = (state) => Boolean(state.auth.connection.success);
const getError = (state) => state.auth.error;

export default {
  isAuthenticated,
  getError,
};
