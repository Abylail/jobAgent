import Vue from "vue";
import Vuex from "vuex";
import jobList from "@/config/jobList.json";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        jobList: []
    },
    getters: {
        getJobList: state => state.jobList
    },
    mutations: {
        setJobs(state, list) {
            state.jobList = list;
        }
    },
    actions: {
        async fetchJobs({ commit }) {
            const { jobs } = await new Promise(resolve => setTimeout(() => resolve(jobList), 1000))
            commit("setJobs", jobs);
        }
    }
})