const isAuthenticated = (state) => Boolean(state.auth.isAuthenticated.success);
const status = (state) => state.auth.connection;
const getError = (state) => state.auth.error;

export default {
  isAuthenticated,
  status,
  getError,
};
