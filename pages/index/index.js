//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerList:[{pic:'../../sources/imgs/banner_01.png'},{pic:'../../sources/imgs/banner_01.png'}]
  },
  goMap() {
    wx.navigateTo({
      url: '/pages/map/index'
    })
  },
  vedio() {
    wx.navigateTo({
      url: '/projectDetail/pages/detail/index'
    })
  },
  toImg() {
    wx.navigateTo({
      url: '/projectImg/pages/img/index'
    })
  },
  xianli1() {
    wx.navigateTo({
      url: '/xianli/pages/page1/index'
    })
  },
  onLoad: function () {
   
  },
  onShow:function () {

  }
})
