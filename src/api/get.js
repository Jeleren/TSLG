import axios from '../utils/axios'

let api='/api'
export function getImage(data) {
  return axios.get(`${api}/images/?${data}`)
}
export function getBanner() {
  return axios.get(`${api}/banners/`)
}
export function getTypeImage(data){
  return axios.get(`${api}/${data}&num=16`)
}
export function getOrderImage(data){
  return axios.get(`${api}/images/?${data}`)
}
export function getImageInfo(data) {
  return axios.get(`${api}/images/${data}/`)
}
//user
export function getCollectList(image_id) {
  return axios.get(`${api}/folders/?image-id=${image_id}`)
}
export function getCollection() {
  return axios.get(`${api}/folders/`)
}

export function getDownloadHistory(page) {
  return axios.get(`${api}/download/?${page}`)
}

export function getUploadHistory(page) {
  return axios.get(`${api}/images/?${page}`)
}

export function getFollowRankList(params) {
  return axios.get(`${api}/users/?ordering=-fan_nums&num=4&page=${params}`)
}

export function getSignedList(params) {
  return axios.get(`${api}/users/?if_sign=true&num=4&${params}`)
}

//根据收藏夹id获取收藏夹全部图片
export function getFolderImage(id) {
  return axios.get(`${api}/folders/${id}/`)
}
export function getCertification() {
  return axios.get(`${api}/certification/`)
}
//获取图片的评论
export function getComment(image_id) {
  return axios.get(`${api}/comment/?${image_id}`)
}
export function getAllTitle() {
  return axios.get(`${api}/group/?show=true`)
}
//首页标题
export function getTitle() {
  return axios.get(`${api}/group/`)
}
export function getMainImage(data) {
  return axios.get(`${api}/${data}&num=4`)
}

export function getFans() {
  return axios.get(`${api}/fans/`)
}
export function getMyFollow() {
  return axios.get(`${api}/followers/`)
}

//作品管理
export function getWorkStatus(params) {
  return axios.get(`${api}/images/?${params}`)
}

export function getWorkNums() {
  return axios.get(`${api}/image_num/`)
}
