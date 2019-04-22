import axios from 'axios'

const baseUrl = 'https://api.hnpwa.com/v0/'

function fetchNewsList(){
  return axios.get(`${baseUrl}news/1.json`)
}

function fetchAskList(){
  return axios.get(`${baseUrl}ask/1.json`)
}

function fetchJobsist(){
  return axios.get(`${baseUrl}jobs/1.json`)
}

function fetchAskDetail(itemId){
  return axios.get(`${baseUrl}item/${itemId}.json`)
}

function fetchUserInfo(userName){
  return axios.get(`${baseUrl}user/${userName}.json`)
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsist,
  fetchAskDetail,
  fetchUserInfo,
}