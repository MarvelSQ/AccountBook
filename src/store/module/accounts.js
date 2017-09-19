import types from '../mutation-types';

const astate = {
  account: {},
  records: [
    {
      title: 'taxi',
      description: '',
      mates: [
        { id: 'A0001', name: 'zhiquan' },
        { id: 'A0002', name: 'wang' },
      ],
      money: 55,
      cDate: '2017-09-14',
      type: 'travel',
    },
  ],
};

const getters = {
  getAccount: state => state.account,
  getRecords: state => state.records,
};

const actions = {
  addRecord({ commit }, { title, description, mates, money, cDate, type }) {
    commit(types.ADD_TO_RECORDS, {
      title, description, mates, money, cDate, type,
    });
  },
};

const mutations = {
  [types.ADD_TO_RECORDS](state, record) {
    state.records.push(record);
  },
};

export default {
  state: astate,
  getters,
  actions,
  mutations,
};
