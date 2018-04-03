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
    var that = this
    // 商品详情
    wx.request({
      url: 'http://www.ipyue.com/api/freetour/detail/id/68',
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
        that.setData({
          goodsPicsInfo: goodsPicsInfo,
          goodsDetails: goodsDetails
        })
      }
    })

  }
})
