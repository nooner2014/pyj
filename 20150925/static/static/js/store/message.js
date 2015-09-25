$(document).ready(function () {
  $('div.msg-detail').hide();
  $('table.sys a').on('click', function () {
    $('div.msg-content').hide();
    $('div.msg-detail').show();
  });
});
