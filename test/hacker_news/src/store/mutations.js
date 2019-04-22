export default {
  SET_NEWS(state, news){
    state.newsList = news;
  },
  SET_ASK(state, ask){
    state.askList = ask;
  },
  SET_JOBS(state, jobs){
    state.jobsList = jobs;
  },
  SET_DETAIL(state, askDetail){
    state.askDetail = askDetail;
  },
  SET_USER(state, userDetail){
    state.userInfo = userDetail;
  },
}