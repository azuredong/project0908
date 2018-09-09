import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
      tabs: [],
      activeIndex: '/axiosDemo',
      movieDetail: {}
  },
  mutations: {
    addTabs (state, data) {
      this.state.tabs.push(data);
    },
    removeTabs (state, route) {
      let index = 0;
      for (let tab of state.tabs) {
        if (tab.route === route) {
          break;
        }
        index++;
      }
      this.state.tabs.splice(index, 1);
    },
    setActiveIndex (state, index) {
      this.state.activeIndex = index;
    },
    setDetail (state, row) {
      this.state.movieDetail = row;
    }
  }
});

export default store;
