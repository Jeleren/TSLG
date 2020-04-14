import Mock from 'mockjs'

function banner() {
  let res = Mock.mock({
      'data|3-5': [{
          id: '@integer(0, 10)',
        url: '@image',
        image:'@image'
      }]
  })
  return res.data
}

function title() {
  let res = Mock.mock({
    'data|3-5':[{
      name: '@ctitle',
      id: '@integer(0, 10)',
      'kids|3-5':[{
        name: '@ctitle',
        id: '@integer(0, 10)',
        parent_id: '@natural'
      }]
    }]
  })
  return res.data
}

function group() {
  let res = Mock.mock({
    'data|4': [{
      id: '@natural',
      image: '@image',
      if_like: '@boolean',
      like_num: '@integer(100, 15000)',
      if_collect: '@boolean',
      collect_num: '@integer(100, 15000)',
      name: '@ctitle',
      cate: 'dsfalk、啊发发、啊短发',
      user: {
        username: '@ctitle',
        image: '@image',
        upload_nums: '@natural',
        fan_nums: '@natural',
        if_follow: '@boolean'
      }
    }]
  })
  return res.data
}

export default {
  banner,
  title,
  group,
}
