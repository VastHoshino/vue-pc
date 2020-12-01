var Mock = require('mockjs')

Mock.Random.ctitle()
Mock.Random.color()
Mock.Random.cname()
Mock.Random.image()

var data = Mock.mock({
  title: '@ctitle(4)',
  'subTitle|3-10': ['@ctitle(1,4)'],
  'caroucelList|4': ["@image('200x100', '@color', '#FFF', 'png', '@cname')"]
})

console.log(data)
