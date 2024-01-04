import { createStore } from "vuex";

export default createStore({
    state: {
        counter: 0
    },
    // getters: {
    //     counter: state => state.counter
    // }
    getters: {
        counter(state) {
            return state.counter;
        }
    },
    mutations: {
        increment(state){
            state.counter += 1;
        },
        decrement(state){
            state.counter -= 1;
        }
    },
    actions: {
        addCounter(context) {
            context.commit("increment")          
        },
        subCounter(context) {
            context.commit("decrement")
        }
    }
});

