var WxParse = require('../../wxParse/wxParse.js');
var app = getApp()
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
  },

  onLoad: function (options) {
    // console.log(options);
    var that = this
    // 商品详情
    wx.request({
      url: 'http://www.ipyue.com/api/freetour/detail/id/' + options.id,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        // console.log(res.data.data);
        var goodsDetails = res.data.data;
        var goodsPicsInfo = [];
        var goodsPicsObj = {};
        var goodspic = res.data.data.images;
        //var goodspics = goodspic.substring(0, goodspic.length - 1);
        var goodspicsArr = goodspic;
        for (var i = 0; i < goodspicsArr.length; i++) {
          // console.log(goodspicsArr[i]);
          goodsPicsInfo.push({
            "picurl": goodspicsArr[i]
          });
        }
        console.log(goodsDetails);
        var feature = goodsDetails.feature
        var reference_route = goodsDetails.reference_route
        feature = feature.replace(/http:.*?.com/gi,'');
        console.log(feature);
        feature = feature.replace(/\/Public/gi,'http://www.ipyue.com/Public');
        reference_route = reference_route.replace(/<div style=.*?>/gi,'')
        WxParse.wxParse('feature', 'html', feature, that, 5);
        WxParse.wxParse('reference_route', 'html', reference_route, that, 5);
        // console.log(feature);
        that.setData({
          goodsPicsInfo: goodsPicsInfo,
          goodsDetails: goodsDetails,
        })
      }
    })

  }
})
