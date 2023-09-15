import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: [20, 30, 1],
      clicked: false,
      more: {},
    };
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
    likes(state, payload) {
      if (state.clicked == false) {
        state.likes[payload] += 1;
        state.clicked = true;
      } else {
        state.likes[payload] -= 1;
        state.clicked = false;
      }
    },
  },
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a) => {
        console.log(a.data);
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
