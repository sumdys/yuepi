var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideHeader: true,
    hideBottom: true,
    refreshTime: '', // 刷新的时间 
    contentlist: [], // 列表显示的数据源
    allPages: '',    // 总页数
    currentPage: 1,  // 当前页数  默认是1
    loadMoreData: '加载更多……' 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this

    wx.request({
      url: 'http://www.ipyue.com/api/home/lists?type='+options.type,
      method:'GET',
      data:{},
      header:{
        'Accept':'application/json'
      },
      success:function(res){
        that.setData({
          itemList: res.data.itemList
        }),
        wx.setNavigationBarTitle({
          title: res.data.title,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function (e) {
    var that = this

    wx.request({
      url: 'http://www.ipyue.com/api/home/lists?type=5',
      method:'GET',
      data:{},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          itemList: res.data.itemList
        })
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('3333333')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})