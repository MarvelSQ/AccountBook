import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import types from './mutation-types';
import account from './module/accounts';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

function genID(users) {
  // there is rule about gen a id
  // const id = `A0${Math.round(Math.random() * 1000)}`;
  // return users.every(e => e.id === id) ? genID(users) : id;
  return `A${(`${users.length + 1}`).padStart(4, 0)}`;
}

function persistenceUser(user) {
  localStorage.setItem('user', JSON.stringify(Object.assign(user, { decay: (new Date().getTime() + 3600000) })));
}

/**
 * remove decay from localStorage user
 * @param  {String} name     [description]
 * @param  {String} password [description]
 * @param  {String} id       [description]
 * @return {Object}          [description]
 */
function changeUser({ name, password, id }) {
  return { name, password, id };
}

export default new Vuex.Store({
  state: {
    records: [],
    log: types.UNKNOWN,
    logMsg: '',
    user: undefined,
    users: [],
    relog: false,
  },
  actions: {
    hasUser({ commit }) {
      const u = localStorage.getItem('user');
      if (u) {
        const user = JSON.parse(u);
        setTimeout(() => {
          commit(...user.decay > new Date().getTime() ?
          [types.LOGIN_SUCCESS, changeUser(user)] :
          [types.LOGIN_FAILURE, 'Your log status is out of date! you need relog']);
        }, 2000);
        commit(types.RELOGIN, true);
        commit(types.LOGGING, user);
      } else {
        commit(types.UNLOG);
      }
    },
    signup({ commit, state }, { name, password }) {
      setTimeout(() => {
        commit(...state.users.find(e => e.name === name) ?
        [types.SIGNUP_FAILURE, `There already is a ${name}`] :
        [types.SIGNUP_SUCCESS, { name, password, id: genID(state.users) }]);
      }, 2000);
      commit(types.SIGNING);
    },
    login({ commit, state }, { name, password }) {
      setTimeout(() => {
        const user = state.users.find(e => e.name === name);
        commit(...user && user.password === password ?
          [types.LOGIN_SUCCESS, user] :
          [types.LOGIN_FAILURE, 'Please make sure the name and password are correct!']);
      }, 2000);
      commit(types.RELOGIN, false);
      commit(types.LOGGING, { name, password });
    },
    addRecord({
      commit,
    }, record) {
      commit(types.ADD_TO_CART, { id: record.id, user: record.user, num: record.num });
    },
  },
  getters: {
    records(state) {
      return state.records;
    },
    getLog(state) {
      return state.log;
    },
    getUser(state) {
      return state.user;
    },
    getLogMsg(state) {
      return state.logMsg;
    },
  },
  mutations: {
    [types.UNLOG](state) {
      state.log = 'unlog';
    },
    [types.SIGNING](state) {
      state.log = 'signing';
    },
    [types.RELOGIN](state, bool) {
      state.relog = bool;
    },
    [types.SIGNUP_SUCCESS](state, user) {
      state.log = 'signup success';
      state.user = user;
      if (!state.users.every(e => e.id === user.name)) {
        state.users.push(user);
      }
      persistenceUser(user);
    },
    [types.SIGNUP_FAILURE](state, msg) {
      state.log = 'signup fail';
      state.logMsg = msg;
    },
    [types.LOGGING](state) {
      // eslint-disable-next-line
      console.log(state);
      state.log = 'logging';
    },
    [types.LOGIN_SUCCESS](state, user) {
      state.log = 'logged';
      state.user = user;
      if (!state.relog) {
        persistenceUser(user);
      }
    },
    [types.LOGIN_FAILURE](state, msg) {
      state.log = 'log fail';
      state.logMsg = msg;
    },
    [types.ADD_TO_CART](state, { id, user, num }) {
      let r = state.records.find(e => e.id === id);
      if (r) {
        r.num += num;
      } else {
        r = { id, user, num };
        state.records.push(r);
      }
    },
  },
  modules: {
    account,
  },
  strict: debug,
  plugins: debug
    ? [createLogger()]
    : [],
});
