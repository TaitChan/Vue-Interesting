import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/role/list',
    method: 'get',
    params,
  })
}

export function del(params) {
  return request({
    url: '/role/del',
    method: 'post',
    params,
  })
}
