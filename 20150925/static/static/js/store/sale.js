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
  })
  var saleChart = echarts.init($('#line-chart')[0]);
  var option = {
    tooltip: {
      show: true,
      trigger: 'item',
      formatter: "{b} <br/>{a} : {c}"
    },
    calculable : true,
    grid: {
      x: 60,
      x2: 30,
      show: false,
      borderWidth: 0,
    },
    xAxis : [
    {
      type : 'category',
      axisLine: {
        lineStyle: {
          color: '#e4e4e4',
          borderWidth: 1,
        }
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          align: 'center'
        }
      },
      boundaryGap : false,
      data: ["2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", "2013/2/28", "2013/3/1", "2013/3/4"],
      splitLine: {
        show: false,
      },
      axisTick: {
      }
    }
    ],
    yAxis : [
      {
        type : 'value',
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: '#ffffff'
          }
        },
      },
    ],
    series : [
      {
        name:'收入金额',
        type:'line',
        smooth: true,
        symbol: 'none',
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#ffae00',
              width: 1
            }
          }
        },
        data:[3, 5, 9, 4, 2, 7, 10],
      },
      {
        name:'订单数',
        type:'line',
        smooth: true,
        symbol: 'none',
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#3f9de6',
              width: 1
            }
          }
        },
        data:[1, 2, 2, 5, 3, 2, 7],
      },
      {
        name:'访客数',
        type:'line',
        smooth: true,
        symbol: 'none',
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#49d667',
              width: 1
            }
          }
        },
        data:[4, 9, 2, 10, 4, 8, 9],
      }
    ]
  };
  saleChart.setOption(option);
  $('#aRecent7DaysDemo3').on('click', function () {
      saleChart.clear();
      var Days7 = ["2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", "2013/2/28", "2013/3/1", "2013/3/4"];
      var yS1 = [(Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, ];
      var yS2 = [(Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, ];
      var yS3 = [(Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0, ];
      option.xAxis[0].data = Days7;
      option.series[0].data = yS1;
      option.series[1].data = yS2;
      option.series[2].data = yS3;
      saleChart.setOption(option);
  });
  $('#aRecent14DaysDemo3').on('click', function () {
      var Days14 = ["2013/2/18", "2013/2/19", "2013/2/20", "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", "2013/2/28", "2013/3/1", "2013/3/4"];
      var yS1 = [
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0
       ];
      var yS3 = [
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0
       ];
      var yS2 = [
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0
       ];
      option.xAxis[0].data = Days14;
      option.series[0].data = yS1;
      option.series[1].data = yS2;
      option.series[2].data = yS3;
      saleChart.setOption(option);
  });
  $('#aRecent30DaysDemo3').on('click', function () {
      saleChart.clear();
      var yS1 = [
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0
       ];
      var yS2 = [
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0
       ];
      var yS3 = [
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0,
       (Math.random() * 100).toFixed(0) - 0, (Math.random() * 100).toFixed(0) - 0
       ];
      var Days30 = ["2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6", "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", "2013/2/28", "2013/3/1", "2013/3/4"];
      option.xAxis[0].data = Days30;
      option.series[0].data = yS1;
      option.series[1].data = yS2;
      option.series[2].data = yS3;
      saleChart.setOption(option);
  });
});
