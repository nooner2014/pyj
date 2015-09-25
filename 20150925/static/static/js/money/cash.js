$(document).ready(function () {
  var dateRange = new pickerDateRange('date_demo3', {
    aRecent7Days: 'aRecent7DaysDemo3', //最近7天
    aRecent14Days: 'aRecent14DaysDemo3', //最近14天
    aRecent30Days: 'aRecent30DaysDemo3', //最近30天
    isTodayValid: false,
    startDate : '2013-04-14',
    endDate : '2013-04-21',
    //needCompare : true,
    //isSingleDay : true,
    //shortOpr : true,
    defaultText: ' 至 ',
    inputTrigger: 'input_trigger_demo3',
    theme: 'ta',
    success: function (obj) {
        $("#dCon_demo3").html('开始时间 : ' + obj.startDate + '<br/>结束时间 : ' + obj.endDate);
    }
  });
  $('.get-cash').on('click', function () {
    $('.get-cash-background').show();
  })
  $('.get-cash-background .off').on('click', function  () {
    $('.get-cash-background').hide();
  })
  $('.get-cash-background .on').on('click', function  () {
    $('.get-cash-background').hide();
  })
})