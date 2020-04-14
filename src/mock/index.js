import Mock from 'mockjs'
import main from './main'

Mock.mock(/\/banners/, 'get', main.banner())
Mock.mock(/\/group\/$/, 'get', main.title())
Mock.mock(/\/group\/\d+/, 'get', main.group())
Mock.mock(/\/group\/\?show=true/, 'get', main.group())
