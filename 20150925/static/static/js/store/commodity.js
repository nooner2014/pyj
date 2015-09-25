$(document).ready(function () {
  $('.pic-del-tip, .commodity-add, .select-content, .cash-background, .user-menu').hide();
  $('span.surplus').text('30');
  $('.add button.add, .edit').on('click', function () {
    $("[id^='rt_rt']").css({'height': '40px', 'width': '90px'});
    $('.commodity-add').show();
    $('.commodity-show').hide();
  });
  $('.check-all').on('click', function () {
    var isChecked = $(this).is(":checked");
    var allCheckbox = $(this).closest('.tab_content').find('table.com-table').find('input[type="checkbox"]');
    var checkAll = $(this).closest('.tab_content').find('.check-all');
    if (isChecked) {
      allCheckbox.prop('checked', 'checked');
      checkAll.prop('checked', 'checked');
    }
    else {
      allCheckbox.prop('checked', '');
      checkAll.prop('checked', '');
    }
  });

  //$('span.checkbox i').on('click', function () {
  //  $(this).toggleClass('selected');
  //  $(this).parent().find('.norms-checkbox').trigger('click');
  //});

  $(document).on('click','.norms-edit', function () {
    $('.cash-background').find('table.norms-table tr').not('table.norms-table tr:eq(0)').remove();
    var selectCheckbox = $('.cash-background').find('span.checkbox').find('i');
    selectCheckbox.removeClass('selected');
    var $normsList = $('.norm-table tr').not('.norm-table tr:eq(0)').not('.norm-table tr:last-child()').find('td:eq(0)');
    var $colorList = $('.norm-table tr').not('.norm-table tr:eq(0)').not('.norm-table tr:last-child()').find('td:eq(1)');
    var normsTextList = [];
    var colorTextList = [];
    $.each($normsList, function () {
      if (normsTextList.indexOf($(this).text()) === -1) {
        normsTextList.push($(this).text());
      }
    });
    $.each($colorList, function () {
      if (colorTextList.indexOf($(this).text()) === -1) {
        colorTextList.push($(this).text());
      }
    });
    var allText = normsTextList.concat(colorTextList);
    $.each(selectCheckbox, function () {
      var selectSpan = $(this).parent().find('span');
      $.each(allText, function (i, j) {
        if (j === selectSpan.text()) {
          selectSpan.parent().find('i').trigger('click');
        }
      })
    })
    $('.cash-background').show();
  })

  $(document).on('click','.norms-del', function () {
    $(this).closest('tr').remove();
    getCommCounts();
  })
  $(document).on('click','span.checkbox i', function () {
    $(this).toggleClass('selected');
    var self = $(this).parent().find('span');
    var noSelectType = $(this).closest('.size').attr('class').split(' ')[1];
    var typeDict = {
      'size-main': '0',
      'color-main': '1'
    };
    $outTable = $('.norm-table').find('tr');

    if ($(this).attr('class') === 'select') {
      $.each($outTable, function (m, k) {
        var tdText = $(k).find('td:eq('+ typeDict[noSelectType] + ')').text();
        console.log(tdText, self.text());
        if (tdText === self.text()) {
          $(k).remove();
        }
      })
      $.each($('table.norms-table').find('tr').find('td:eq(0)'), function (i, j) {
        if (self.text() === $(j).text()) {
          $(j).closest('tr').remove();
        }
      })
    }
    else {
      $(this).parent().find('.norms-checkbox').trigger('click');
      var parentDom = $(this).closest('.size').attr('class');
      var trData = parentDom.split(' ')[1];
      var normsName = $(this).parent().find('span').text();
      addTable(trData, normsName);
    }
  });
  var addTable = function (trData, normsName) {
    var normsName = normsName || '';
    var table1 = $('.norms-table');
      var row = $("<tr data-class=" + trData + "></tr>");
      var tdHtml = "<td>" + normsName + "</td>" + "<td><span class='self-norms'></span><input type='text' class='add-hide'></td>" + "<td><span class='norms-table-add'>添加</span> <span class='norms-table-del span-del'>删除</span></td>";
      var td_1 = $(tdHtml);
      row.append(td_1);
      table1.append(row);
  }
  $(document).on('click', '.norms-table-add', function () {
    var className = $(this).closest('tr').data('class');
    var insertText = $(this).closest('tr').find('span.self-norms').text();
    var selfDom = $('.' + className).find('.size-content');
    var insertStatus = 0;
    $.each(selfDom, function () {
      if (insertText === $.trim($(this).text())) {
        insertStatus += 1;
      }
    })
    if (insertText === '') {
      alert('没有自定义规格可添加');
    }
    else if (insertStatus !== 0) {
      alert('该规格已经存在');
    }
    else if (insertStatus === 0) {
      var lastDom = $('.' + className);
      var insertDom = "<span class='size-content size-self'> <span class='checkbox'><i class='select'></i><span>" + insertText + "</span><input type='checkbox' class='norms-checkbox'></span> </span>"
      lastDom.append($(insertDom));
    }
  }); 
  $(document).on('click','.self-norms', function () {
    $(this).css('display', 'none');
    var $inputDom = $(this).parent().find('input.add-hide');
    $inputDom.css('display', 'inline').focus();
    $inputDom.on('blur', function () {
      $inputDom.css('display', 'none');
      $(this).parent().find('span').css('display', 'inline-block');
      $(this).parent().find('span').text($(this).val());
    })
  });
  $(document).on('click', '.norms-table-del', function () {
    var delDom = $(this).closest('tr').find('td:eq(0)');
    var delText = delDom.text()
    var className = $(this).closest('tr').data('class');
    var delSelfDom = $('.' + className).find('span.size-self');
    /*if (delSelfDom.length === 0) {
      alert('添加系统规格后不能删除！！！')
    }
*/    $.each(delSelfDom, function (i, j) {
      var text = $(j).find('.checkbox span').text();
      if (text === delText) {
        $(this).remove();
        delDom.closest('tr').remove();
      }
      else {
        alert('添加系统规格后不能删除！！！')
      }
    })
    //var sysNorms = $(this).closest('tr').find('td:eq(0)').text();
    //if (sysNorms === "") {
    //  $(this).closest('tr').remove();
    //}
    //else {
    //}
  }); 

  $('.norms-btn').on('click', function () {
    var parentDom = $(this).parent().find('.size').attr('class');
    var trData = parentDom.split(' ')[1];
    addTable(trData, '');
  });

  $('.norms').on('click', function () {
    $('.cash-background').find('table.norms-table tr').not('table.norms-table tr:eq(0)').remove();
    $('.cash-background').find('span.checkbox').find('i').removeClass('selected');
    $('.cash-background').show();
  });

  $(' .norms-level-1-div .close').on('click', function () {
    $('.cash-background').hide();
  })
  $('.norms-add-btn').on('click', function () {
    var sizeList = [];
    var colorList = [];
    $.each($('tr[data-class="size-main"]'), function () {
      var sizeDom = $(this).find('td:eq(0)').text();
      sizeList.push(sizeDom);
    });
    $.each($('tr[data-class="color-main"]'), function () {
      var colorDom = $(this).find('td:eq(0)').text();
      colorList.push(colorDom);
    });
    $('.cash-background').hide();
    var allTr = $('.norm-table tr').not('.norm-table tr:last-child()').not('.norm-table tr:first()');
    if (sizeList.length !== 0 && colorList.length === 0) {
      $.each(sizeList, function (i, j){
          addNormsTable(j, '', allTr.length);
      });
    }
    else if (sizeList.length === 0 && colorList.length !== 0) {
      $.each(colorList, function (i, j){
        addNormsTable('', j, allTr.length);
      });
    }
    if (sizeList && colorList) {
      $.each(sizeList, function (i, j){
        $.each(colorList, function (m, k) {
          addNormsTable(j, k, allTr.length);
        });
     });
    }
  });
  var addNormsTable = function (nomsType, color, isEmpty) {
    var selectDom = '.norm-table td:contains("' + 'L' + '")';
    var normTd = $(selectDom);
    var normsText = [];
    var colorText = [];
    var $normsList = $('.norm-table tr').not('.norm-table tr:eq(0)').not('.norm-table tr:last-child()');
    var $colorList = $('.norm-table tr').not('.norm-table tr:eq(0)').not('.norm-table tr:last-child()');
    $.each($normsList, function(i, j) {
      var singleText = $(this).find('td:eq(0)').text();
      var singleText1 = $(this).find('td:eq(1)').text();
      normsText.push([singleText, singleText1]);
    });
    var isAdd = true;
    $.each(normsText, function (i, j) {
      if (j[0] === nomsType && j[1] === color) {
        isAdd = false;
      }
    });
    if (isAdd) {
      var insertDom ='<tr data-norm=' + nomsType + '> <td>' + nomsType + color + '</td> <td><span class="replace comm-counts">100.00</span><input type="text" class="add-hide" /></td> <td><span class="replace  daifa">100.00</span><input type="text" class="add-hide" /></td> <td><span class="single">10.00</span><input type="text" class="add-hide" /></td> <td><span class="replace market-price">80.00</span><input type="text" class="add-hide" /></td> <td><span class="replace">20.00</span><input type="text" class="add-hide" /></td> <td><span class="norms-edit span-edit">编辑</span><span class="norms-del span-del"> 删除</span></td> </tr>';
      var allTr = $('.norm-table tr').not('.norm-table tr:last-child()');
      var trCount = 0;
      $.each(allTr, function (c, d) {
        var firstTd = $(d).find('td:first-child()').text();
        trCount += 1;
        if (firstTd === nomsType) {
          return false;
        }
      });
      console.log(trCount, nomsType);
      if (trCount === 0 || isEmpty === 0 || trCount >= isEmpty) {
        $('.norm-table tr:last').before($(insertDom));
      }
      else {
        $(allTr[trCount]).after($(insertDom));
      }
      getCommCounts();
    }
  };

  $('.comm-title').bind('input propertychange', function() {
    var textLen = $(this).val().length;
    $('span.surplus').text(23-textLen);
  });

  $('.friend-tab .tabs li ').on('click', function () {
    $('.friend-tab .tabs li').not($(this)).find('a i').attr('class', 'sort');
    var self = $(this).find('a i');
    var cName = self.attr('class');
    self.removeClass();
    if (cName === 'sort') {
      self.addClass('desc');
    }
    else if (cName === 'desc') {
      self.addClass('asce');
    }
    else {
      self.addClass('desc');
    }
  });

  $('.classify').on('click', function () {
    $(this).parent().find('.select-content').toggle();
  });

  $('div.level-1-div div.pic-collections .pic-single').hover(function () {
    $(this).find('.pic-del-tip').show();
  }, function () {
    $(this).find('.pic-del-tip').hide();
  });

  $('input[type="checkbox"]').on('click', function () {
    var count = 0;
    var checkList = $('table.com-table input[type="checkbox"]');
    $.each(checkList, function (item) {
      if (checkList[item].checked === true) {
        count += 1;
      }
    });
    $('span.comm-count').text(count);
  });

  var getCommCounts = function () {
    var domList = $('.comm-counts');
    var statisticCount = 0;
    domList.each(function (i, j) {
      statisticCount += parseInt($(j).text());
    });
    $('.comm-counts-all').text(statisticCount.toFixed(2));
    $('span.single').each(function (i, j) {
      var replaceNum = $(j).closest('tr').find('span.daifa').text();
      var singleNum = parseInt(replaceNum) * 0.25;
      $(this).text(singleNum.toFixed(2));
    });
    $('span.market-price').each(function (i, j) {
      var replaceNum = $(j).closest('tr').find('span.daifa').text();
      var singleNum = parseInt(replaceNum) * 3;
      $(this).text(singleNum.toFixed(2));
    });
  };
  getCommCounts();

  $(document).on('click','td span.replace', function () {
    var spanName = $(this).parent().find('input.add-hide');
    spanName.css('display', 'inline');
    $(this).css('display', 'none');
    spanName.val($(this).text());
    spanName.focus();
  });
  $(document).on('blur','td input.add-hide', function () {
    var spanName = $(this).parent().find('span.replace');
    spanName.css('display', 'inline');
    $(this).css('display', 'none');
    spanName.text($(this).val());
    if ($(this).parent().find('span').attr('class') !== 'replace market-price') {
      getCommCounts();
    }
  });
  $('.select-save').on('click', function () {
    var hasSelected = false;
    $('.tab_content').each(function () {
      if ($(this).css('display') === 'block') {
        hasSelected = $(this).find('table.order-detail').find(':checkbox').is(':checked');
      }
      if (!hasSelected) {
        $('.select-error').show();
        setTimeout(function() {
          $('.select-error').hide();
        }, 3000);
      }
    });
    //var checkStatus = $('tab_content').find(':checkbox').is(":checked");
    //if (!checkStatus) {
    //}
  })
});
