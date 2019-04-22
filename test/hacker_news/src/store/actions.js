import axios from 'axios'
import {
  fetchNewsList,
  fetchAskList,
  fetchJobsist,
  fetchAskDetail,
  fetchUserInfo,
} from '../api/index.js'

export default {
  async FETCH_NEWS({ commit }){
    try {
      const response = await fetchNewsList();
      commit('SET_NEWS', response.data )
    } catch (err){
      console.log(err)
    }
  },
  async FETCH_ASK({ commit }){
    const response = await fetchAskList();
    commit('SET_ASK', response.data )
  },
  async FETCH_JOBS({ commit }){
    const response = await fetchJobsist();
    commit('SET_JOBS', response.data )
  },
  async ASK_DETAIL({ commit }, itemId){
    const response = await fetchAskDetail(itemId)
    commit('SET_DETAIL', response.data )
  },
  async USER_DETAIL({ commit }, userName){
    const response = await fetchUserInfo(userName);
    commit('SET_USER', response.data )
  }
}
