$(document).ready(function () {
  $('.user-menu, .del-background, .cash-background').hide();
  $('.friend-tab .tabs li ').on('click', function () {
    $('.order-date input').val('');
    $('.comm-count').text(0);
    $(this).closest('.friend-tab').find('input[type="checkbox"]').prop('checked', false);
  })
  $('.user .user-name, .user img').on('click', function () {
    $('.user-menu').fadeToggle();
  });
  $(document).on('click', function (e) {
    var $target = $(e.target);
    if ($target.closest('.user-menu').length === 0 && $target.closest('.user').length === 0) {
      $('.user-menu').fadeOut(1000);
    }
  })
  $('a.del, a.remove').on('click', function () {
    var self = $(this).closest('tr');
    $('.del-background').show();
    $('.del-tip .off').on('click', function () {
      $('.del-background').hide();
    });
    $('.del-tip .on').on('click', function () {
      self.fadeOut(500);
      $('.del-background').hide();
    });
  });
  $('a.look').on('click', function () {
    $('.cash-background').show();
    $('.tip-close, button.cash-tip-btn').on('click', function () {
      $('.cash-background').hide();
    });
  });
  var pageDetail = $('.page-detail');
  $('.page-num').click(function () {
    pageDetail.fadeToggle();
  })
  function dyniframesize(down) { 
var pTar = null; 
if (document.getElementById){ 
pTar = document.getElementById(down); 
} 
else{ 
eval('pTar = ' + down + ';'); 
} 
if (pTar && !window.opera){ 
//begin resizing iframe 
pTar.style.display="block" 
if (pTar.contentDocument && pTar.contentDocument.body.offsetHeight){ 
//ns6 syntax 
pTar.height = pTar.contentDocument.body.offsetHeight +20; 
pTar.width = pTar.contentDocument.body.scrollWidth+20; 
} 
else if (pTar.Document && pTar.Document.body.scrollHeight){ 
//ie5+ syntax 
pTar.height = pTar.Document.body.scrollHeight; 
pTar.width = pTar.Document.body.scrollWidth; 
} 
} 
} 
});
