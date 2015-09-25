/**
 * @summary
 *   + 店铺设置界面控制
 * @description
 *   + description
 * @param    {string}  address   address
 * @returns  void
 * @date     2015-08-30 00:36:44
 * @author   chenc3@knownsec.com
 */

$(document).ready(function () {
  'use strict';
  // 页面初始化
  $('.template').hide();
  $('.market').find('.triangle-bottomright').hide();
  //减库存和行业模板的切换
  $('.tab-template').on('click', function () {
    $('.tab-stock').removeClass('active');
    $('.del-tip').hide();
    $(this).addClass('active');
    $('.stock').hide();
    $('.template').show();
  });
  $('.tab-stock').on('click', function () {
    $('.tab-template').removeClass('active');
    $(this).addClass('active');
    $('.template').hide();
    $('.stock').show();
    $('.del-tip').hide();
  });
  //模板的切换
  var $templateDom = $('.general, .market');
  $templateDom.on('click', function () {
    var self = $(this);
    $('.del-tip').show();
    $('.del-tip .on').on('click', function () {
      $('.del-tip').hide();
      $templateDom.removeClass('border-active');
      $templateDom.find('.triangle-bottomright').removeClass('triangle-active').removeClass('.triangle-bottomright');
      self.addClass('border-active');
      self.find('.template-text').find('div:eq(0)').addClass('triangle-active');
    });
    $('.del-tip .off').on('click', function () {
      $('.del-tip').hide();
    });
  });
  $('.del-tip .on').on('click', function () {
    $('.triangle-verify').removeClass('triangle-verify').removeClass('triangle-active').addClass('triangle-active');
    $('.border-verify').removeClass('border-verify').addClass('border-active');
    $('.del-tip').hide();
  });
  //控制checkbox
  $('.false-checkbox').on('click', function () {
    $('.confirm, .pay').find('input[type="checkbox"]')[0].checked = false;
    $('.confirm, .pay').find('.false-checkbox').html('');
    var self = $(this);
    if (self.html() === '') {
      self.html('&radic;');
      self.parent().find('input[type="checkbox"]')[0].checked = true;
    }
    else {
      self.html('');
      self.parent().find('input[type="checkbox"]')[0].checked = false;
    }
  });

  $('.few').on('click', function () {
    $(this).parent().find('.false-checkbox').trigger('click');
  })
});
