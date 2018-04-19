// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input1 : "你的名字",
    input2 : "对方名字",
    returnString : "返回结果"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  onClick:function(){
    console.log(this.data.input1 )
    var name1 = this.data.input1;
    var name2 = this.data.input2;
    var returnname = "";
    var sum = 0;
    if(name1 == "张晓华" && name2 == "卢展鹏"){
      returnname = "天造地设"
    } else if (name1 == "张晓华" && name2 != "卢展鹏"){
      returnname = "什么鬼"
    } else if (name1 != "张晓华" && name2 == "卢展鹏"){
      returnname = "什么鬼"
    }else{
      returnname = "看天气吧 哈哈哈"
    }
    this.setData({
      returnString: returnname
    })
  },

  onInput:function(e){
    var str1 = e.detail.value
    
    this.setData({
      input1:str1
    })
  },
  onInput2: function (e) {
    var str1 = e.detail.value
    this.setData({
      input2:str1
    })
  }
})